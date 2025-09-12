const calendarEl = document.getElementById('calendar');
const currentMonthEl = document.getElementById('currentMonth');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

let currentDate = new Date();
let events = JSON.parse(localStorage.getItem('events') || '[]');

// Formatdatum yyyy-mm-dd
function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function saveEvents() {
    localStorage.setItem('events', JSON.stringify(events));
}

// Render hela månaden
function renderCalendar() {
    calendarEl.innerHTML = '';

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    currentMonthEl.textContent = `${currentDate.toLocaleDateString('sv-SE', { month: 'long' })} ${year}`;

    // Första dag i månaden
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startWeekday = firstDay.getDay(); // 0 = söndag

    // Lägg till tomma dagar för veckodag-start
    for (let i = 0; i < (startWeekday === 0 ? 6 : startWeekday -1); i++) {
        const emptyDiv = document.createElement('div');
        calendarEl.appendChild(emptyDiv);
    }

    // Skapa alla dagar
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayDate = new Date(year, month, day);
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.textContent = day;

        // Visa events
        events.forEach(event => {
            if (event.date === formatDate(dayDate)) {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event';
                eventDiv.textContent = `${event.time} ${event.title}`;
                dayDiv.appendChild(eventDiv);
            }
        });

        // Klick på dag → prompt för tid och namn
        dayDiv.addEventListener('click', () => {
            const time = prompt("Tid (ex 14:00):");
            if (!time) return;
            const title = prompt("Titel på aktivitet:");
            if (!title) return;
            const desc = prompt("Anteckning (valfritt):") || "";

            events.push({
                date: formatDate(dayDate),
                time,
                title,
                desc
            });

            saveEvents();
            renderCalendar();
        });

        calendarEl.appendChild(dayDiv);
    }
}

// Månadsnavigering
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Init
renderCalendar();
