document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('radio-stream');
    const playBtn = document.querySelector('.play');
    const pauseBtn = document.querySelector('.pause');
    const currentTime = document.getElementById('current-time');
    const slider = document.getElementById('pg-bar');
    const timeDisplay = document.getElementById('time');
    const audioPlayer = document.getElementById('radio-stream');
    const volumeControl = document.getElementById('volume-range');

    let isPlaying = false;
    let isDragging = false;

    // Función para actualizar el tiempo actual y la barra de progreso
    function updateProgress() {
        const currentTimeSecs = audio.currentTime;
        const duration = audio.duration;

        slider.value = currentTimeSecs;
        slider.max = duration;
        timeDisplay.textContent = formatTime(currentTimeSecs);

    }
    // CONTROL DE VOLUMEN //

    function controlVolumen(){
        volumeControl.value = 0.1;
        audioPlayer.volume = volumeControl.value;
        volumeControl.addEventListener('input', function (){
            audioPlayer.volume = volumeControl.value;
        })
    }

    // FIN CONTROL VOLUMEN

    
    // Formatear tiempo en formato mm:ss
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Actualizar el tiempo y la barra de progreso mientras se reproduce
    audio.addEventListener('timeupdate', function() {
        updateProgress();
    });

    // Control de reproducción/pausa
    playBtn.addEventListener('click', function() {
        audio.play();
        isPlaying = true;
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
        isPlaying = false;
    });

    // Actualizar posición de reproducción al cambiar el slider
    slider.addEventListener('input', function() {
        audio.currentTime = slider.value;
        updateProgress();
    });

    // Mostrar la duración total del audio una vez que esté disponible
    audio.addEventListener('loadedmetadata', function() {
        timeDisplay.textContent = formatTime(audio.currentTime);
    });

    // Actualizar la barra de progreso mientras se arrastra el slider
    slider.addEventListener('mousedown', function() {
        isDragging = true;
    });

    slider.addEventListener('mouseup', function() {
        isDragging = false;
    });

    slider.addEventListener('mousemove', function() {
        if (isDragging) {
            audio.currentTime = slider.value;
            updateProgress();
        }
    });

    controlVolumen();
});
