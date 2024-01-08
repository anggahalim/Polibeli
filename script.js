// script.js
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const nama = urlParams.get('nama');
  const seating = urlParams.get('seating');
  
  if (nama && seating) {
    document.getElementById('greeting').innerText = `Halo ${nama}, tempat duduk kamu berada di ${seating}.`;
  } else {
    document.getElementById('greeting').innerText = 'QR code tidak valid.';
  }
});
