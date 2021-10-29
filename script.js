const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

// Set Date input Min with today's date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Take values from Form Input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
}


// Event Listener
countdownForm.addEventListener('submit', updateCountdown);