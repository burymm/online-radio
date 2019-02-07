var playPause = document.getElementById('playPauseContainer');
var play = document.getElementById('playBtn');
var playClick = document.getElementById('playClickBtn');
var pause = document.getElementById('pauseBtn');
var pauseClick = document.getElementById('pauseClickBtn');
var off = document.getElementById('offBtn');
var on = document.getElementById('onBtn');

playPauseContainer.addEventListener("click", function() {
    if (play.style.display !== "none" && off.style.display !== "none") {
        play.style.display = "none";
        pause.style.display = "block";
        off.style.display = "none";
        on.style.display = "block";
    } else {
        pause.style.display = "none";
        play.style.display = "block";
        off.style.display = "block";
        on.style.display = "none";
    }
});