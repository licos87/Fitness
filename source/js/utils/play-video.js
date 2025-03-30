const videoBtn = document.querySelector('.about__video-btn');
const container = document.querySelector('.about__video');

function playVideo() {
  container.style.display = 'block';

  container.innerHTML = `
    <iframe width="100%" height="100%"
      src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer;
      autoplay;
      clipboard-write;
      encrypted-media;
      gyroscope;
      picture-in-picture;
      web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>
  `;
}


videoBtn.addEventListener('click', playVideo);
