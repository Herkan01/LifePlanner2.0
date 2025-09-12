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

// Visa popup för ny aktivitet med tid och textinput
function showAddEventPopup(dayDate) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const modal = document.createElement('div');
    modal.className = 'modal';

    const titleEl = document.createElement('h3');
    titleEl.textContent = `Ny aktivitet ${formatDate(dayDate)}`;
    modal.appendChild(titleEl);

    // Tid-dropdown 00:00–23:00
    const timeLabel = document.createElement('label');
    timeLabel.textContent = 'Tid: ';
    const timeSelect = document.createElement('select');
    for (let h = 0; h <= 23; h++) {
        const hourStr = h.toString().padStart(2, '0');
        const option = document.createElement('option');
        option.value = `${hourStr}:00`;
        option.textContent = `${hourStr}:00`;
        timeSelect.appendChild(option);
    }
    timeLabel.appendChild(timeSelect);
    modal.appendChild(timeLabel);

    // Textinput för aktivitet
    modal.appendChild(document.createElement('br'));
    modal.appendChild(document.createElement('br'));
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Aktivitet: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Skriv aktivitet här';
    nameLabel.appendChild(nameInput);
    modal.appendChild(nameLabel);

    // Knapp-container
    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Spara';
    saveBtn.className = 'action-btn';
    saveBtn.addEventListener('click', () => {
        const title = nameInput.value.trim();
        if (!title) return alert("Skriv in aktivitet!");
        events.push({
            date: formatDate(dayDate),
            time: timeSelect.value,
            title,
            desc: ''
        });
        saveEvents();
        renderCalendar();
        document.body.removeChild(overlay);
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Avbryt';
    cancelBtn.className = 'action-btn';
    cancelBtn.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    btnContainer.appendChild(saveBtn);
    btnContainer.appendChild(cancelBtn);
    modal.appendChild(document.createElement('br'));
    modal.appendChild(btnContainer);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

// Render månadsrutnät
function renderCalendar() {
    calendarEl.innerHTML = '';

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    currentMonthEl.textContent = `${currentDate.toLocaleDateString('sv-SE', { month: 'long' })} ${year}`;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startWeekday = firstDay.getDay(); // 0 = söndag

    // Tomma rutor för veckodag-start
    for (let i = 0; i < (startWeekday === 0 ? 6 : startWeekday - 1); i++) {
        const emptyDiv = document.createElement('div');
        calendarEl.appendChild(emptyDiv);
    }

    // Skapa dagar
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayDate = new Date(year, month, day);
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.textContent = day;

        const dayEvents = events.filter(ev => ev.date === formatDate(dayDate));
        if (dayEvents.length > 0) {
            dayDiv.style.backgroundColor = '#d0f0d0';
        }

        dayDiv.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.className = 'overlay';

            const modal = document.createElement('div');
            modal.className = 'modal';

            const titleEl = document.createElement('h3');
            titleEl.textContent = `Välj åtgärd för ${formatDate(dayDate)}`;
            modal.appendChild(titleEl);

            // Lägg till aktivitet
            const addBtn = document.createElement('button');
            addBtn.textContent = 'Lägg till ny anteckning';
            addBtn.className = 'action-btn';
            addBtn.addEventListener('click', () => {
                document.body.removeChild(overlay);
                showAddEventPopup(dayDate);
            });

            // Ta bort aktivitet
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Ta bort aktivitet';
            removeBtn.className = 'action-btn';
            removeBtn.addEventListener('click', () => {
                document.body.removeChild(overlay);
                if (dayEvents.length === 0) {
                    alert("Inga aktiviteter att ta bort denna dag.");
                    return;
                }

                const removeOverlay = document.createElement('div');
                removeOverlay.className = 'overlay';

                const removeModal = document.createElement('div');
                removeModal.className = 'modal';

                const removeTitle = document.createElement('h3');
                removeTitle.textContent = `Ta bort aktivitet - ${formatDate(dayDate)}`;
                removeModal.appendChild(removeTitle);

                dayEvents.forEach((ev) => {
                    const eventContainer = document.createElement('div');
                    eventContainer.className = 'remove-event';

                    const eventText = document.createElement('span');
                    eventText.textContent = `${ev.time} - ${ev.title}`;
                    eventContainer.appendChild(eventText);

                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = '×';
                    deleteBtn.className = 'delete-btn';
                    deleteBtn.addEventListener('click', () => {
                        const globalIndex = events.indexOf(ev);
                        if (globalIndex !== -1) {
                            events.splice(globalIndex, 1);
                            saveEvents();
                            renderCalendar();
                            removeOverlay.remove();
                        }
                    });

                    eventContainer.appendChild(deleteBtn);
                    removeModal.appendChild(eventContainer);
                });

                const closeBtn = document.createElement('button');
                closeBtn.textContent = 'Stäng';
                closeBtn.className = 'action-btn';
                closeBtn.addEventListener('click', () => removeOverlay.remove());

                removeModal.appendChild(document.createElement('br'));
                removeModal.appendChild(closeBtn);

                removeOverlay.appendChild(removeModal);
                document.body.appendChild(removeOverlay);
            });

            modal.appendChild(addBtn);
            modal.appendChild(document.createElement('br'));
            modal.appendChild(document.createElement('br'));
            modal.appendChild(removeBtn);

            overlay.appendChild(modal);
            document.body.appendChild(overlay);
        });

        // Visa första aktivitet på dagen
        if (dayEvents.length > 0) {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event';
            eventDiv.textContent = `${dayEvents[0].time} ${dayEvents[0].title}`;
            dayDiv.appendChild(eventDiv);
        }

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
