var navBtn = document.querySelector('.nav__menu-btn');
var navList = document.querySelector('.nav__list');

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  var playPauseBtn = document.getElementById("playPauseBtn");

  playPauseBtn.addEventListener("click", function () {
    if (video.paused || video.ended) {
      video.play();
      playPauseBtn.innerHTML = "Pause";
    } else {
      video.pause();
      playPauseBtn.innerHTML = "Play";
    }
  });

  navBtn.addEventListener('click', function () {
    navList.classList.toggle('active');
  });

  video.addEventListener("ended", function () {
    playPauseBtn.innerHTML = "Play";
  });
});

navMenuBtn.addEventListener('click', () => {
  navListMobile.style.display = navListMobile.style.display === 'flex' ? 'none' : 'flex';
});
