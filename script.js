// script.js
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const nama = urlParams.get('nama');
  const seating = urlParams.get('seating');
  document.getElementById('greeting').innerText = `Halo ${nama}, tempat duduk kamu berada di ${seating}.`;
});
