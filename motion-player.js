const gallery = document.querySelector('#motion-gallery');
const publicVideos = Array.isArray(window.motionVideos) ? window.motionVideos : [];

publicVideos.forEach((item) => {
  const card = document.createElement('article');
  const video = document.createElement('video');
  const title = document.createElement('h2');
  const error = document.createElement('p');

  card.className = 'motion-card';
  video.className = 'motion-card-video';
  video.controls = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.src = item.src;
  video.setAttribute('aria-label', item.title);
  title.className = 'motion-card-title';
  title.textContent = item.title;
  error.className = 'motion-card-error';
  error.hidden = true;
  error.textContent = 'Bu video oynatılamadı. Lütfen daha sonra tekrar deneyin.';
  video.addEventListener('error', () => {
    error.hidden = false;
  });

  card.append(video, title, error);
  gallery.append(card);
});
