const calendarEl = document.getElementById('calendar');
const currentMonthEl = document.getElementById('currentMonth');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

let currentDate = new Date();
let events = JSON.parse(localStorage.getItem('events') || '[]');

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function saveEvents() {
    localStorage.setItem('events', JSON.stringify(events));
}

// Popup för ny aktivitet
function showAddEventPopup(dayDate) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const modal = document.createElement('div');
    modal.className = 'modal';

    const closeBtn = document.createElement('span');
    closeBtn.textContent = '×';
    closeBtn.className = 'close-btn';
    closeBtn.addEventListener('click', () => overlay.remove());
    modal.appendChild(closeBtn);

    const titleEl = document.createElement('h3');
    titleEl.textContent = `Ny aktivitet ${formatDate(dayDate)}`;
    modal.appendChild(titleEl);

    // Tid-dropdown
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

    modal.appendChild(document.createElement('br'));
    modal.appendChild(document.createElement('br'));

    // Textinput
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Aktivitet: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Skriv aktivitet här';
    nameLabel.appendChild(nameInput);
    modal.appendChild(nameLabel);

    // Knappar
    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Spara';
    saveBtn.className = 'action-btn';
    saveBtn.addEventListener('click', () => {
        const title = nameInput.value.trim();
        if (!title) return alert("Skriv in aktivitet!");
        events.push({ date: formatDate(dayDate), time: timeSelect.value, title, desc: '' });
        saveEvents();
        renderCalendar();
        overlay.remove();
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Avbryt';
    cancelBtn.className = 'action-btn';
    cancelBtn.addEventListener('click', () => overlay.remove());

    btnContainer.appendChild(saveBtn);
    btnContainer.appendChild(cancelBtn);
    modal.appendChild(document.createElement('br'));
    modal.appendChild(btnContainer);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

// Render kalender
function renderCalendar() {
    calendarEl.innerHTML = '';

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    currentMonthEl.textContent = `${currentDate.toLocaleDateString('sv-SE', { month: 'long' })} ${year}`;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startWeekday = firstDay.getDay(); // 0 = söndag

    for (let i = 0; i < (startWeekday === 0 ? 6 : startWeekday - 1); i++) {
        calendarEl.appendChild(document.createElement('div'));
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayDate = new Date(year, month, day);
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.textContent = day;

        const dayEvents = events.filter(ev => ev.date === formatDate(dayDate));
        if (dayEvents.length > 0) dayDiv.style.backgroundColor = '#d0f0d0';

        dayDiv.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.className = 'overlay';

            const modal = document.createElement('div');
            modal.className = 'modal';

            const closeBtn = document.createElement('span');
            closeBtn.textContent = '×';
            closeBtn.className = 'close-btn';
            closeBtn.addEventListener('click', () => overlay.remove());
            modal.appendChild(closeBtn);

            const titleEl = document.createElement('h3');
            titleEl.textContent = `Åtgärder för ${formatDate(dayDate)}`;
            modal.appendChild(titleEl);

            // Se aktiviteter-knapp
            const viewBtn = document.createElement('button');
            viewBtn.textContent = 'Se aktiviteter';
            viewBtn.className = 'action-btn';
            viewBtn.addEventListener('click', () => {
                overlay.remove();
                if (dayEvents.length === 0) {
                    alert("Inga aktiviteter denna dag.");
                    return;
                }

                const viewOverlay = document.createElement('div');
                viewOverlay.className = 'overlay';

                const viewModal = document.createElement('div');
                viewModal.className = 'modal';

                const viewTitle = document.createElement('h3');
                viewTitle.textContent = `Aktiviteter - ${formatDate(dayDate)}`;
                viewModal.appendChild(viewTitle);

                dayEvents.forEach(ev => {
                    const eventContainer = document.createElement('div');
                    eventContainer.className = 'view-event';
                    eventContainer.textContent = `${ev.time} - ${ev.title}`;
                    viewModal.appendChild(eventContainer);
                });

                const closeView = document.createElement('button');
                closeView.textContent = 'Stäng';
                closeView.className = 'action-btn';
                closeView.addEventListener('click', () => viewOverlay.remove());
                viewModal.appendChild(document.createElement('br'));
                viewModal.appendChild(closeView);

                viewOverlay.appendChild(viewModal);
                document.body.appendChild(viewOverlay);
            });
            modal.appendChild(viewBtn);

            // Ta bort aktivitet-knapp
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Ta bort aktivitet';
            removeBtn.className = 'action-btn';
            removeBtn.addEventListener('click', () => {
                overlay.remove();
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

                dayEvents.forEach(ev => {
                    const eventContainer = document.createElement('div');
                    eventContainer.className = 'remove-event';

                    const eventText = document.createElement('span');
                    eventText.textContent = `${ev.time} - ${ev.title}`;
                    eventContainer.appendChild(eventText);

                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = '×';
                    deleteBtn.className = 'delete-btn';
                    deleteBtn.addEventListener('click', () => {
                        const index = events.indexOf(ev);
                        if (index !== -1) {
                            events.splice(index, 1);
                            saveEvents();
                            renderCalendar();
                            removeOverlay.remove();
                        }
                    });

                    eventContainer.appendChild(deleteBtn);
                    removeModal.appendChild(eventContainer);
                });

                const closeRemove = document.createElement('button');
                closeRemove.textContent = 'Stäng';
                closeRemove.className = 'action-btn';
                closeRemove.addEventListener('click', () => removeOverlay.remove());
                removeModal.appendChild(document.createElement('br'));
                removeModal.appendChild(closeRemove);

                removeOverlay.appendChild(removeModal);
                document.body.appendChild(removeOverlay);
            });
            modal.appendChild(removeBtn);

            // Lägg till ny aktivitet-knapp
            const addBtn = document.createElement('button');
            addBtn.textContent = 'Lägg till ny anteckning';
            addBtn.className = 'action-btn';
            addBtn.style.marginTop = '10px';
            addBtn.addEventListener('click', () => {
                overlay.remove();
                showAddEventPopup(dayDate);
            });
            modal.appendChild(addBtn);

            overlay.appendChild(modal);
            document.body.appendChild(overlay);
        });

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

renderCalendar();
