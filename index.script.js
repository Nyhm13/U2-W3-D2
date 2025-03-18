   
   document.addEventListener("DOMContentLoaded", function() {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
        document.getElementById("savedName").innerText = savedName;
    }
});

function save() {
    const name = document.getElementById("content").value;
    localStorage.setItem("userName", name);
    document.getElementById("savedName").innerText = name;
}

function remove() {
    localStorage.removeItem("userName");
    document.getElementById("savedName").innerText = "";
   
}

// Contatore
let timeElapsed = sessionStorage.getItem("sessionTime") || 0;
        timeElapsed = parseInt(timeElapsed);

        function updateTimer() {
            timeElapsed++;
            sessionStorage.setItem("sessionTime", timeElapsed);
            document.getElementById("timer").innerText = timeElapsed + " secondi";
        }

        setInterval(updateTimer, 1000);



        
        function resetTimer() {
            timeElapsed = 0;
            sessionStorage.setItem("sessionTime", timeElapsed);
            document.getElementById("timer").innerText = timeElapsed + " secondi";
        }