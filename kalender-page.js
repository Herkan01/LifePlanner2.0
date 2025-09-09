// ----------------- Element -----------------
const calendarEl = document.getElementById('calendar');
const timeColumnEl = document.getElementById('time-column');
const currentWeekEl = document.getElementById('currentWeek');
const prevWeekBtn = document.getElementById('prevWeek');
const nextWeekBtn = document.getElementById('nextWeek');

let currentDate = new Date();

// ----------------- Load events from localStorage -----------------
let events = [];
const savedEvents = localStorage.getItem('events');
if (savedEvents) events = JSON.parse(savedEvents);

// ----------------- Hjälpfunktioner -----------------
function getMonday(d) {
    const date = new Date(d);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function saveEvents() {
    localStorage.setItem('events', JSON.stringify(events));
}

// ----------------- Render tidkolumn -----------------
function renderTimeColumn() {
    timeColumnEl.innerHTML = '';
    for (let hour = 6; hour <= 22; hour++) {
        const hourDiv = document.createElement('div');
        hourDiv.className = 'time-label';
        hourDiv.textContent = `${hour}:00`;
        timeColumnEl.appendChild(hourDiv);
    }
}

// ----------------- Render kalender -----------------
function renderCalendar() {
    calendarEl.innerHTML = '';
    const weekStart = getMonday(currentDate);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    currentWeekEl.textContent = `Vecka: ${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`;

    for (let i = 0; i < 7; i++) {
        const dayDate = new Date(weekStart);
        dayDate.setDate(dayDate.getDate() + i);

        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.addEventListener('dblclick', () => zoomDay(dayDate));

        const dayTitle = document.createElement('h4');
        dayTitle.textContent = dayDate.toLocaleDateString('sv-SE', { weekday:'short', day:'numeric', month:'numeric' });
        dayDiv.appendChild(dayTitle);

        // Skapa tidsrutor
        for (let hour = 6; hour <= 22; hour++) {
            const slot = document.createElement('div');
            slot.className = 'time-slot';
            slot.dataset.time = `${hour}:00`;

            slot.addEventListener('click', () => {
                const title = prompt("Titel på aktivitet:");
                if (!title) return;
                const desc = prompt("Anteckning (valfritt):") || "";
                events.push({ title, desc, date: formatDate(dayDate), time: `${hour}:00` });
                saveEvents(); // spara direkt
                renderCalendar();
            });

            dayDiv.appendChild(slot);
        }

        // Visa befintliga event
        events.forEach((event, index) => {
            if (event.date !== formatDate(dayDate)) return;

            const hour = parseInt(event.time.split(':')[0]);
            const slot = dayDiv.querySelector(`.time-slot:nth-child(${hour - 5})`);
            if (!slot) return;

            const eventDiv = document.createElement('div');
            eventDiv.className = 'event';
            eventDiv.textContent = event.title;

            // Klick: visa anteckning
            eventDiv.addEventListener('click', (e) => {
                e.stopPropagation();
                alert(event.desc || "Ingen anteckning");
            });

            // Long-press för radering
            let rafId;
            let circleDiv;
            let pressTimer;

            eventDiv.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                const longPressDuration = 800;
                const circleDelay = 150;
                const startTime = Date.now();

                pressTimer = setTimeout(() => {
                    circleDiv = document.createElement('div');
                    circleDiv.className = 'press-circle';
                    eventDiv.appendChild(circleDiv);

                    function animateCircle() {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / longPressDuration, 1);
                        const deg = progress * 360;

                        circleDiv.style.background = `conic-gradient(rgba(255,255,255,0) 0deg, rgba(255,255,255,0) ${deg}deg, rgba(255,255,255,0) 360deg), conic-gradient(rgba(255,255,255,0.8) 0deg, rgba(255,255,255,0.8) ${deg}deg, rgba(255,255,255,0) ${deg}deg 360deg)`;

                        if (progress < 1) {
                            rafId = requestAnimationFrame(animateCircle);
                        } else {
                            const confirmDelete = confirm(`Vill du ta bort aktiviteten "${event.title}"?`);
                            if (confirmDelete) {
                                events.splice(index, 1);
                                saveEvents(); // spara ändringen
                                renderCalendar();
                            }
                        }
                    }

                    rafId = requestAnimationFrame(animateCircle);
                }, circleDelay);
            });

            function clearPress() {
                clearTimeout(pressTimer);
                if (circleDiv) circleDiv.remove();
                cancelAnimationFrame(rafId);
            }

            eventDiv.addEventListener('mouseup', clearPress);
            eventDiv.addEventListener('mouseleave', clearPress);

            slot.appendChild(eventDiv);
        });

        calendarEl.appendChild(dayDiv);
    }
}

// ----------------- Zoom-dag -----------------
function zoomDay(date) {
    alert(`Zoom in på dag: ${date.toLocaleDateString()}`);
}

// ----------------- Veckonavigering -----------------
prevWeekBtn.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 7);
    renderCalendar();
});
nextWeekBtn.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 7);
    renderCalendar();
});

// ----------------- Init -----------------
renderTimeColumn();
renderCalendar();
