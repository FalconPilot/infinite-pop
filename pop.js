/*
**  Infinite Pop JS
*/

// Create DOM elements
var video   = document.createElement('video');
var source  = document.createElement('source');

// Video properties
video.id        = "pop-vid";
video.autoplay  = true;

// Source properties
source.src = "./pop.mp4";

// DOM alteration
video.appendChild(source);
document.getElementById('page-body').appendChild(video);

// End event listener
video.addEventListener('timeupdate', function(e) {
  if (video.currentTime >= 81.25) {
    video.currentTime = 18.9;
    video.play();
  }
});
