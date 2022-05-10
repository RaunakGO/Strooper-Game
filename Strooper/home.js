function start() {
    document.getElementById("start-modal").style.display = "none";
    document.getElementById("playground").style.display = "flex";
    startGame();
}

const colors = ["red", "green", "yellow", "black", "blue", "pink"]
var point = 0;

function startGame() {
    var playText = document.getElementById("text");

    playText.innerText = colors[Math.floor(Math.random() * colors.length)];
    playText.style.color = colors[Math.floor(Math.random() * colors.length)];

    var code = playText.style.color.substr(0, 1);
    window.addEventListener("keypress", (key) => {
        if (key.key === code) {
            point++;
            code = "";
            document.getElementById("result").style.display = "block";
            document.getElementById("result").innerText = "Correct!";
            document.getElementById("result").style.color = "green";
            startGame();
        } else {
            code = "";
            document.getElementById("result").style.display = "block";
            document.getElementById("result").innerText = "Wrong!";
            document.getElementById("result").style.color = "red";
            playText.style.color = "black";
            playText.style.textAlign = "center";
            playText.innerText = `You Lost!😂 Refresh to Play Again Point Scored: ${point}`;
        }
    })
}
