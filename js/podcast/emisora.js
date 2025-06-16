document.addEventListener('DOMContentLoaded', () => {
    function setupPlayer(prefix) {
        const audio = document.getElementById(`podcast-stream-${prefix}`);
        const progressBar = document.getElementById(`progress-bar-${prefix}`);
        const currentTimeDisplay = document.getElementById(`current-time-${prefix}`);
        const totalTimeDisplay = document.getElementById(`progress-total-${prefix}`);
        const playButton = document.querySelector(`.play-${prefix}`);
        const pauseButton = document.querySelector(`.pause-${prefix}`);

        function updateTime() {
            const currentTime = audio.currentTime;
            const duration = audio.duration;
            const minutesCurrent = Math.floor(currentTime / 60);
            const secondsCurrent = Math.floor(currentTime % 60);
            const minutesTotal = Math.floor(duration / 60);
            const secondsTotal = Math.floor(duration % 60);
            const formattedCurrentTime = `${minutesCurrent}:${secondsCurrent < 10 ? '0' : ''}${secondsCurrent}`;
            const formattedTotalTime = `${minutesTotal}:${secondsTotal < 10 ? '0' : ''}${secondsTotal}`;
            
            currentTimeDisplay.textContent = formattedCurrentTime;
            totalTimeDisplay.textContent = formattedTotalTime;

            // Actualizar el control deslizante
            const value = (currentTime / duration) * 100;
            progressBar.value = value;
            progressBar.style.setProperty('--slider-value', `${value}%`);
        }

        progressBar.addEventListener('input', () => {
            const value = progressBar.value;
            const duration = audio.duration;
            audio.currentTime = (value / 100) * duration;
        });

        playButton.addEventListener('click', () => {
            audio.play();
            playButton.style.display = 'none';
            pauseButton.style.display = 'block';
        });

        pauseButton.addEventListener('click', () => {
            audio.pause();
            playButton.style.display = 'block';
            pauseButton.style.display = 'none';
        });

        audio.addEventListener('timeupdate', updateTime);

        audio.addEventListener('loadedmetadata', () => {
            const duration = audio.duration;
            const minutesTotal = Math.floor(duration / 60);
            const secondsTotal = Math.floor(duration % 60);
            totalTimeDisplay.textContent = `${minutesTotal}:${secondsTotal < 10 ? '0' : ''}${secondsTotal}`;
        });

        function initializeControls() {
            if (audio.paused) {
                playButton.style.display = 'block';
                pauseButton.style.display = 'none';
            } else {
                playButton.style.display = 'none';
                pauseButton.style.display = 'block';
            }
        }

        initializeControls();
    }

    setupPlayer('mobile');
    setupPlayer('desktop');

    // Función para pausar todos los audios
    function pauseAllAudio() {
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => {
            audio.pause();
        });
    }

    // Definir el ancho mínimo para considerar que es "escritorio"
    const desktopWidth = 1024;

    // Función para manejar el cambio de tamaño de la ventana
    function handleResize() {
        if (window.innerWidth < desktopWidth) {
            // Si el tamaño de la ventana es menor que desktopWidth (por ejemplo, móvil)
            console.log("Tamaño de ventana detectado: Móvil");
            pauseAllAudio();
        } else {
            // Si el tamaño de la ventana es mayor o igual a desktopWidth (por ejemplo, escritorio)
            console.log("Tamaño de ventana detectado: Escritorio");
            pauseAllAudio();
        }
    }

    // Llamar la función handleResize en el evento resize
    window.addEventListener('resize', handleResize);
    
    // Ejecutar la función una vez para manejar el tamaño inicial de la ventana
    handleResize();
});
