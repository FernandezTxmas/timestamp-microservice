// public/app.js
document.getElementById('timestampForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const dateInput = document.getElementById('dateInput').value;
  const resultDiv = document.getElementById('result');

  fetch(`/api/${encodeURIComponent(dateInput)}`)
    .then(response => response.json())
    .then(data => {
      resultDiv.innerHTML = `<p>Unix Timestamp: ${data.unix}</p><p>UTC: ${data.utc}</p>`;
    })
    .catch(error => {
      console.error('Error:', error);
      resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
