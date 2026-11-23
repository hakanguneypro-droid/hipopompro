(() => {
  const gallery = document.getElementById('motion-gallery');
  if (!gallery) return;
  const videos = Array.isArray(window.motionVideos) ? window.motionVideos : [];
  for (const item of videos) {
    if (!item || !item.src) continue;
    const card = document.createElement('article');
    card.className = 'motion-card';
    const video = document.createElement('video');
    video.className = 'motion-card-video';
    video.controls = true;
    video.preload = 'metadata';
    video.playsInline = true;
    video.setAttribute('aria-label', item.title || 'Proje videosu');
    // Encode each filename/path segment, particularly spaces, Turkish letters and #.
    video.src = item.src.split('/').map(encodeURIComponent).join('/');
    const title = document.createElement('h2');
    title.className = 'motion-card-title';
    title.textContent = item.title || 'Proje';
    const error = document.createElement('p');
    error.className = 'motion-card-error';
    error.hidden = true;
    video.addEventListener('error', () => {
      error.hidden = false;
      error.textContent = 'Video yüklenemedi. Dosyanın GitHub üzerinde yayınlandığını ve tarayıcı tarafından desteklendiğini kontrol edin.';
    });
    video.addEventListener('play', () => {
      document.querySelectorAll('.motion-card-video').forEach(other => {
        if (other !== video && !other.paused) other.pause();
      });
    });
    card.append(video, title, error);
    gallery.append(card);
  }
})();
