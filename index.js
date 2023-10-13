function updateClock() {
    const now = new Date();
    const targetDate = new Date("2024-01-23"); // Tanggal target (misalnya: 23 Januari 2022)

    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        // Waktu target telah tercapai atau berlalu
        document.getElementById("day").textContent = '00';
        document.getElementById("hour").textContent = '00';
        document.getElementById("minute").textContent = '00';
        document.getElementById("second").textContent = '00';
    } else {
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        document.getElementById("day").textContent = days.toString().padStart(2, '0');
        document.getElementById("hour").textContent = (hours % 24).toString().padStart(2, '0');
        document.getElementById("minute").textContent = (minutes % 60).toString().padStart(2, '0');
        document.getElementById("second").textContent = (seconds % 60).toString().padStart(2, '0');
    }
}

updateClock();
setInterval(updateClock, 1000);
