let salary = 0;
let expenses = [];
let chart;

// -------------------- Ladda data från localStorage --------------------
window.onload = () => {
  const savedSalary = parseFloat(localStorage.getItem("salary")) || 0;
  const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const savedGoalAmount = parseFloat(localStorage.getItem("goalAmount")) || 0;
  const savedMonthlySaving = parseFloat(localStorage.getItem("monthlySaving")) || 0;

  // Sätt värdena i inputs
  document.getElementById("salaryInput").value = savedSalary || "";
  document.getElementById("goalAmount").value = savedGoalAmount || "";
  document.getElementById("monthlySaving").value = savedMonthlySaving || "";

  salary = savedSalary;
  expenses = savedExpenses;

  renderExpenses();
  updateBalance();
};

// -------------------- Lön --------------------
function setSalary() {
  salary = parseFloat(document.getElementById("salaryInput").value) || 0;
  localStorage.setItem("salary", salary);
  updateBalance();
}

// -------------------- Lägg till utgift --------------------
function addExpense() {
  const nameInput = document.getElementById("expenseName");
  const amountInput = document.getElementById("expenseAmount");

  const name = nameInput.value.trim();
  const amount = parseFloat(amountInput.value) || 0;

  if (name && amount > 0) {
    expenses.push({ name, amount });
    localStorage.setItem("expenses", JSON.stringify(expenses));

    renderExpenses();
    updateBalance();

    // Rensa fälten och sätt fokus tillbaka
    nameInput.value = "";
    amountInput.value = "";
    nameInput.focus();
  }
}

// -------------------- Rendera utgifter --------------------
function renderExpenses() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  expenses.forEach((exp, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${exp.name}: ${exp.amount} kr</span>
      <button onclick="removeExpense(${i})">❌</button>
    `;
    list.appendChild(li);
  });
}

// -------------------- Ta bort utgift --------------------
function removeExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderExpenses();
  updateBalance();
}

// -------------------- Uppdatera saldo --------------------
function updateBalance() {
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const balance = salary - totalExpenses;
  document.getElementById("balance").textContent = `${balance} kr kvar`;

  updateChart(balance);
}

// -------------------- Uppdatera cirkeldiagram --------------------
function updateChart(balance) {
  const ctx = document.getElementById("expenseChart").getContext("2d");

  if (chart) chart.destroy();

  const labels = expenses.map(e => e.name);
  const data = expenses.map(e => e.amount);

  labels.push("Kvar");
  data.push(balance >= 0 ? balance : 0);

  chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          "#e74c3c",
          "#f39c12",
          "#3498db",
          "#2ecc71",
          "#9b59b6",
          "#95a5a6"
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  });
}

// -------------------- Sparmål --------------------
function calculateGoal() {
  const goalAmountInput = document.getElementById("goalAmount");
  const monthlySavingInput = document.getElementById("monthlySaving");

  const goalAmount = parseFloat(goalAmountInput.value) || 0;
  const monthlySaving = parseFloat(monthlySavingInput.value) || 0;
  const currentBalance = salary - expenses.reduce((sum, e) => sum + e.amount, 0);

  // Spara sparmål i localStorage
  localStorage.setItem("goalAmount", goalAmount);
  localStorage.setItem("monthlySaving", monthlySaving);

  if (goalAmount <= 0 || monthlySaving <= 0) {
    document.getElementById("goalResult").textContent = "Ange giltigt sparmål och månadsbesparing.";
    return;
  }

  let remaining = goalAmount - currentBalance;
  if (remaining <= 0) {
    document.getElementById("goalResult").textContent = "Du har redan nått ditt sparmål! 🎉";
    return;
  }

  const months = Math.ceil(remaining / monthlySaving);
  const years = Math.floor(months / 12);
  const extraMonths = months % 12;

  let resultText = `Det tar ungefär `;
  if (years > 0) resultText += `${years} år `;
  if (extraMonths > 0) resultText += `${extraMonths} månader `;
  resultText += `för att nå ditt sparmål på ${goalAmount} kr.`;

  document.getElementById("goalResult").textContent = resultText;
}
