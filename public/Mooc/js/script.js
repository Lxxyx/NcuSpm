var music = document.getElementById('music');
var audio = document.getElementsByTagName('audio')[0];

var pages1 = document.getElementById('pages1')
var pages2 = document.getElementById('pages2')
var pages3 = document.getElementById('pages3')

//当音乐播放停止，自动停止光盘旋转。
audio.addEventListener("ended", function(event) {
  music.classList.remove('play');
}, false);
//点击音乐图标，控制音乐播放效果。
music.addEventListener('touchstart', function(event) {
  if (audio.paused) {
    this.classList.add('play');
    audio.play();
  } else {
    this.classList.remove('play');
    audio.pause();
  }
}, false)

pages1.addEventListener('touchstart', function() {
  pages1.style.display = 'none';
  pages2.style.display = 'block';
  pages3.style.display = 'block';
  pages3.style.top = '100%';
  
  setTimeout(function() {
    pages2.classList.add('fadeOut');
    pages3.classList.add('fadeIn')
  },5500)
}, false);
pages2.addEventListener('touchstart', function() {}, false);
pages3.addEventListener('touchstart', function() {}, false);
