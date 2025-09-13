let notes = [];
try {
  notes = JSON.parse(localStorage.getItem("notes")) || [];
} catch (e) {
  console.warn("Kunde inte läsa notes från localStorage, återställer...", e);
  localStorage.setItem("notes", JSON.stringify([]));
}
let currentNoteId = null;

const noteList = document.getElementById("note-list");
const noteEditor = document.getElementById("note-editor");
const notesContainer = document.getElementById("notes-container");
const newNoteBtn = document.getElementById("new-note-btn");
const backBtn = document.getElementById("back-btn");
const noteText = document.getElementById("note-text");

// Visa alla anteckningar
function renderNotes() {
  notesContainer.innerHTML = "";
  notes.forEach(note => {
    const div = document.createElement("div");
    div.className = "note-card";
    div.innerText = note.content.substring(0, 100) || "(Tom anteckning)";
    div.onclick = () => openNote(note.id);
    notesContainer.appendChild(div);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
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

// Tillbaka till listan
backBtn.onclick = () => {
  showList();
  renderNotes();
};

// Autospara
noteText.addEventListener("input", () => {
  if (currentNoteId) {
    const note = notes.find(n => n.id === currentNoteId);
    note.content = noteText.value;
    note.updated = new Date().toISOString();
    localStorage.setItem("notes", JSON.stringify(notes));
  }
});

// Växla vy
function showEditor() {
  noteList.classList.add("hidden");
  noteEditor.classList.remove("hidden");
}

function showList() {
  noteEditor.classList.add("hidden");
  noteList.classList.remove("hidden");
}

// Start
renderNotes();
