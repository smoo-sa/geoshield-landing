// ===== Geoshield Landing — interactions =====

// Sticky header on scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  menuToggle.classList.toggle('open');
});

// Close menu when a nav link is clicked
mainNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.classList.remove('open');
  });
});

// Active nav link based on section in view
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const setActiveLink = () => {
  let current = 'home';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 160) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// Scroll-reveal animations
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Social video embeds =====
// Instagram: real reels from @geoshield2024 (embed endpoint = playable inline)
const INSTAGRAM_EMBEDS = [
  'https://www.instagram.com/reel/DRMKJEjDGK9/embed',
  'https://www.instagram.com/reel/DQ4rIh6DJYe/embed',
  'https://www.instagram.com/reel/DQPBgeejP_Z/embed',
];

// TikTok: paste @geoshield2024 video URLs here and they will embed automatically.
// Example: 'https://www.tiktok.com/@geoshield2024/video/7123456789012345678'
const TIKTOK_VIDEOS = [
  'https://www.tiktok.com/@geoshield2024/video/7668267502253919509',
  'https://www.tiktok.com/@geoshield2024/video/7575452015417904405',
  'https://www.tiktok.com/@geoshield2024/video/7565160478398237960',
];

const instagramGrid = document.getElementById('instagramGrid');
const tiktokGrid = document.getElementById('tiktokGrid');

INSTAGRAM_EMBEDS.forEach(src => {
  const card = document.createElement('div');
  card.className = 'ig-card';

  const media = document.createElement('div');
  media.className = 'ig-media';
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.className = 'video-frame';
  iframe.loading = 'lazy';
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('allow', 'encrypted-media; clipboard-write');
  media.appendChild(iframe);

  const footer = document.createElement('a');
  footer.className = 'ig-watch';
  footer.href = src.replace('/embed', '');
  footer.target = '_blank';
  footer.rel = 'noopener';
  footer.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2a3.8 3.8 0 0 1-2.3 2.3c-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-2.3-2.3c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4zm6.4-3.1a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg> Watch more';

  card.appendChild(media);
  card.appendChild(footer);
  instagramGrid.appendChild(card);
});

const tiktokId = url => (url.match(/video\/(\d+)/) || [])[1];

if (TIKTOK_VIDEOS.length) {
  TIKTOK_VIDEOS.forEach(url => {
    const id = tiktokId(url);
    if (!id) return;

    const card = document.createElement('div');
    card.className = 'tiktok-card';

    const media = document.createElement('div');
    media.className = 'tiktok-media';
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.tiktok.com/embed/v2/${id}`;
    iframe.className = 'video-frame';
    iframe.loading = 'lazy';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('allow', 'encrypted-media');
    media.appendChild(iframe);

    const footer = document.createElement('a');
    footer.className = 'tiktok-watch';
    footer.href = url;
    footer.target = '_blank';
    footer.rel = 'noopener';
    footer.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.6 3c.4 2.2 1.8 3.6 4 3.8v3c-1.6 0-3-.5-4-1.3v6.7a6.1 6.1 0 1 1-6.1-6.1c.3 0 .7 0 1 .1v3.1a3 3 0 1 0 2.1 2.9V3h3z"/></svg> Watch more';

    card.appendChild(media);
    card.appendChild(footer);
    tiktokGrid.appendChild(card);
  });
} else {
  tiktokGrid.innerHTML = `
    <div class="video-fallback">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.4 2.2 1.8 3.6 4 3.8v3c-1.6 0-3-.5-4-1.3v6.7a6.1 6.1 0 1 1-6.1-6.1c.3 0 .7 0 1 .1v3.1a3 3 0 1 0 2.1 2.9V3h3z"/></svg>
      <h3>فيديوهات تيك توك</h3>
      <p>أضف روابط فيديوهات @geoshield2024 في ملف script.js داخل قائمة TIKTOK_VIDEOS لتظهر هنا مباشرة.</p>
      <a href="https://www.tiktok.com/@geoshield2024" target="_blank" rel="noopener" class="btn btn-primary btn-sm">مشاهدة الحساب على تيك توك</a>
    </div>`;
}

// Drag-to-scroll for video scrollers (desktop)
const isRTL = getComputedStyle(document.documentElement).direction === 'rtl';
document.querySelectorAll('.video-grid').forEach(grid => {
  let isDown = false, startX = 0, startScroll = 0;
  grid.addEventListener('pointerdown', e => {
    isDown = true;
    startX = e.clientX;
    startScroll = grid.scrollLeft;
    grid.setPointerCapture(e.pointerId);
    grid.style.scrollSnapType = 'none';
  });
  grid.addEventListener('pointermove', e => {
    if (!isDown) return;
    const delta = e.clientX - startX;
    grid.scrollLeft = isRTL ? startScroll + delta : startScroll - delta;
  });
  const endDrag = () => {
    isDown = false;
    grid.style.scrollSnapType = '';
  };
  grid.addEventListener('pointerup', endDrag);
  grid.addEventListener('pointercancel', endDrag);
});

// Tab switching
const activateVideoTab = name => {
  document.querySelectorAll('.video-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  document.querySelectorAll('.video-panel').forEach(p => p.classList.toggle('active', p.id === `panel-${name}`));
};
document.querySelectorAll('.video-tab').forEach(tab => {
  tab.addEventListener('click', () => activateVideoTab(tab.dataset.tab));
});
if (location.hash === '#tiktok' || location.hash === '#instagram') {
  activateVideoTab(location.hash.slice(1));
}
