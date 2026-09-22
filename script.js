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

if (instagramGrid) INSTAGRAM_EMBEDS.forEach(src => {
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
  footer.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg> Watch more';

  card.appendChild(media);
  card.appendChild(footer);
  instagramGrid.appendChild(card);
});

const tiktokId = url => (url.match(/video\/(\d+)/) || [])[1];

if (tiktokGrid && TIKTOK_VIDEOS.length) {
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
    footer.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg> Watch more';

    card.appendChild(media);
    card.appendChild(footer);
    tiktokGrid.appendChild(card);
  });
} else if (tiktokGrid) {
  tiktokGrid.innerHTML = `
    <div class="video-fallback">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
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
