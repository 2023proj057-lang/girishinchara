// Countdown to the Muhurtam (IST)
const EVENT_DATE = new Date('2027-01-24T11:00:00+05:30');
const pad = n => String(n).padStart(2, '0');
function tick() {
  const diff = Math.max(0, EVENT_DATE - new Date());
  document.getElementById('cd-d').textContent = pad(Math.floor(diff / 864e5));
  document.getElementById('cd-h').textContent = pad(Math.floor(diff % 864e5 / 36e5));
  document.getElementById('cd-m').textContent = pad(Math.floor(diff % 36e5 / 6e4));
  document.getElementById('cd-s').textContent = pad(Math.floor(diff % 6e4 / 1e3));
}
tick(); setInterval(tick, 1000);
