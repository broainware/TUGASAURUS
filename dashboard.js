const monthYear = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');
const tasksList = document.getElementById('tasksList');

let date = new Date();

// Contoh data tugas
const tasks = {
  "2025-04-24": ["Kalkulus"],
  "2025-04-25": ["Basis Data"],
  "2025-04-26": ["Algoritma dan Struktur Data"]
};

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0).getDate();
  const startDay = (firstDay.getDay() + 6) % 7; // Senin = 0

  calendarBody.innerHTML = '';

  let row = document.createElement('tr');
  for (let i = 0; i < startDay; i++) {
    const emptyCell = document.createElement('td');
    row.appendChild(emptyCell);
  }

  for (let day = 1; day <= lastDate; day++) {
    const cell = document.createElement('td');
    cell.textContent = day;
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    if (tasks[dateStr]) {
      cell.classList.add('has-task');
    }

    cell.addEventListener('click', () => selectDate(dateStr, cell));
    row.appendChild(cell);

    if ((startDay + day) % 7 === 0 || day === lastDate) {
      calendarBody.appendChild(row);
      row = document.createElement('tr');
    }
  }

  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  monthYear.textContent = `${monthNames[month]} ${year}`;
}

let selectedCell = null;

function selectDate(dateStr, cell) {
  if (selectedCell) {
    selectedCell.classList.remove('selected');
  }
  cell.classList.add('selected');
  selectedCell = cell;

  showTasks(dateStr);
}

function showTasks(dateStr) {
  tasksList.innerHTML = '';

  if (tasks[dateStr]) {
    tasks[dateStr].forEach(task => {
      const taskDiv = document.createElement('div');
      taskDiv.textContent = `${formatDate(dateStr)} : ${task}`;
      tasksList.appendChild(taskDiv);
    });
  } else {
    tasksList.textContent = "Tidak ada tugas.";
  }
}

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return `${day} ${getMonthName(parseInt(month) - 1)} ${year}`;
}

function getMonthName(monthIndex) {
  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  return monthNames[monthIndex];
}

document.getElementById('prevMonth').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

document.getElementById('editTasks').addEventListener('click', () => {
  alert('Fitur edit tugas coming soon!');
});

renderCalendar();
