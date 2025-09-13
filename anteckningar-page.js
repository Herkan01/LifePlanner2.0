const noteList = document.getElementById("note-list");
const noteEditor = document.getElementById("note-editor");
const notesContainer = document.getElementById("notes-container");
const newNoteBtn = document.getElementById("new-note-btn");
const noteText = document.getElementById("note-text");
const backBtnHeader = document.querySelector("header .back-btn");

let notes = [];
let currentNoteId = null;

// Ladda anteckningar från localStorage
try {
  notes = JSON.parse(localStorage.getItem("notes")) || [];
} catch (e) {
  notes = [];
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Rendera anteckningar
function renderNotes() {
  notesContainer.innerHTML = "";
  notes.forEach(note => {
    const div = document.createElement("div");
    div.className = "note-card";
    div.innerText = note.content.substring(0, 100) || "(Tom anteckning)";
    
    // Klick på anteckning
    div.onclick = () => openNote(note.id);

    // Delete-knapp
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "×";
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      if (confirm("Är du säker på att du vill ta bort denna anteckning?")) {
        notes = notes.filter(n => n.id !== note.id);
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();
      }
    };

    div.appendChild(deleteBtn);
    notesContainer.appendChild(div);
  });
}

// Visa editor
function showEditor() {
  noteList.style.display = "none";
  noteEditor.style.display = "flex";
  backBtnHeader.style.display = "block";
}

// Visa lista
function showList() {
  noteList.style.display = "block";
  noteEditor.style.display = "none";
  backBtnHeader.style.display = "block"; // På första sidan går den till main-page.html
}

// Skapa ny anteckning
newNoteBtn.onclick = () => {
  const id = Date.now();
  const newNote = { id, content: "", updated: new Date().toISOString() };
  notes.push(newNote);
  currentNoteId = id;
  noteText.value = "";
  showEditor();
};

// Öppna befintlig anteckning
function openNote(id) {
  const note = notes.find(n => n.id === id);
  if (!note) return;
  currentNoteId = id;
  noteText.value = note.content;
  showEditor();
}

// Back-knapp
backBtnHeader.onclick = () => {
  if (noteEditor.style.display !== "none") {
    // Vi är i editor -> spara och gå tillbaka till listan
    if (currentNoteId) {
      const note = notes.find(n => n.id === currentNoteId);
      if (note) {
        note.content = noteText.value;
        note.updated = new Date().toISOString();
      }
      currentNoteId = null;
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    showList();
    renderNotes();
  } else {
    // Vi är på första sidan -> gå till main-page.html
    window.location.href = "main-page.html";
  }
};

// Autospara
noteText.addEventListener("input", () => {
  if (currentNoteId) {
    const note = notes.find(n => n.id === currentNoteId);
    if (note) {
      note.content = noteText.value;
      note.updated = new Date().toISOString();
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }
});

// Init
renderNotes();
showList();
