// Api Values
function fetchData() {
    fetch('https://blynk.cloud/external/api/getAll?token=Jc9_5CpG1Mb3WavmrwJ7fX8Cy5wb0s-6')
    .then(response => response.json())
    .then(data => {
        document.getElementById('v0').innerText = `${data.v0 +48}%`;
        document.getElementById('v1').innerText = `${data.v1 + 18}`;
        document.getElementById('v2').innerText = `${data.v2 }`;
    })
    .catch(error => console.error('Error fetching API:', error));
}

// Fetch data initially
fetchData();

// Refresh data every 100 milliseconds
setInterval(fetchData, 1000);


// Real timing
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();




