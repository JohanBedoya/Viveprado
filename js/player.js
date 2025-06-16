var audio = document.getElementById("myAudio");
var slider = document.getElementById("slider");
var time = document.getElementById("time");

audio.addEventListener('timeupdate', function() {
  var value = (100 / audio.duration) * audio.currentTime;
  slider.value = value;
  updateTime();
});

function playAudio() { 
  audio.play(); 
} 

function pauseAudio() { 
  audio.pause(); 
} 

function seekAudio() {
  var seekto = audio.duration * (slider.value / 100);
  audio.currentTime = seekto;
}

function updateTime() {
  var curmins = Math.floor(audio.currentTime / 60);
  var cursecs = Math.floor(audio.currentTime - curmins * 60);
  var durmins = Math.floor(audio.duration / 60);
  var dursecs = Math.floor(audio.duration - durmins * 60);
  if(cursecs < 10){ cursecs = "0"+cursecs; }
  if(dursecs < 10){ dursecs = "0"+dursecs; }
  if(curmins < 10){ curmins = "0"+curmins; }
  if(durmins < 10){ durmins = "0"+durmins; }
  time.innerHTML = curmins+":"+cursecs+" / "+durmins+":"+dursecs;
}