
var salvar = document.getElementById('salvar');
var fuga = document.getElementById('fuga');
var audio = new Audio('../audio/batmanaudio.mp3');

salvar.addEventListener('click', function tocarAudio() {
  audio.volume = 0.2;
  audio.currentTime = 1;
  audio.play();
})

fuga.addEventListener('click', function pararAudio(){
  audio.pause();
  audio.currentTime = 0;
})