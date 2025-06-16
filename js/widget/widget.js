document.addEventListener('DOMContentLoaded', function() {
    const radio = document.getElementById('radio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const volumeControl = document.getElementById('volumeControl');

    playPauseBtn.addEventListener('click', function() {
        if (radio.paused) {
            radio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            radio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    stopBtn.addEventListener('click', function() {
        radio.pause();
        radio.currentTime = 0;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    volumeControl.addEventListener('input', function() {
        radio.volume = volumeControl.value;
    });
});
