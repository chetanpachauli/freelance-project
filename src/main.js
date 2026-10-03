import * as THREE from 'three';
import { createIcons, Play, Check, ChevronDown, Plus, ArrowRight, Menu, X, Video, Star, Sparkles } from 'lucide';

// Portfolio Dataset across all industries requested in the PDF Brief
const portfolioData = [
  {
    id: 1,
    title: "Luxury Penthouse Cinematic Walkthrough",
    category: "real-estate",
    categoryName: "Real Estate",
    format: "Short-Form Reel",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-living-room-41974-large.mp4",
    duration: "0:42",
    result: "420K+ Views on IG Reels",
    client: "Prestige Prime Realty"
  },
  {
    id: 2,
    title: "CEO Personal Brand Breakdown: Building Wealth",
    category: "personal-brand",
    categoryName: "Personal Brand",
    format: "Talking Head + Fast B-Roll",
    thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-laptop-42999-large.mp4",
    duration: "0:58",
    result: "3.2x Engagement Spike",
    client: "Alex V. (Founder & Angel Investor)"
  },
  {
    id: 3,
    title: "Algorithmic Trading Explained in 60 Seconds",
    category: "finance",
    categoryName: "Finance",
    format: "Motion Graphics + Explainer",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-crypto-currency-and-stock-market-charts-41484-large.mp4",
    duration: "0:55",
    result: "18% Inbound Lead Rate",
    client: "AlphaFin Hedge Advisory"
  },
  {
    id: 4,
    title: "DTC Skincare Brand Viral Ad Hook",
    category: "ecommerce",
    categoryName: "E-commerce",
    format: "High-Paced UGC Ad",
    thumbnail: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-applying-a-face-cream-in-close-up-41907-large.mp4",
    duration: "0:30",
    result: "4.1x ROAS on Meta Ads",
    client: "Lumina Organic Skincare"
  },
  {
    id: 5,
    title: "Aesthetic Dental Smile Transformation",
    category: "healthcare",
    categoryName: "Healthcare",
    format: "Before & After Case Reel",
    thumbnail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-doctor-explaining-a-treatment-to-a-patient-42358-large.mp4",
    duration: "0:38",
    result: "85 High-Ticket Consultations",
    client: "Dr. Sterling Aesthetic Clinic"
  },
  {
    id: 6,
    title: "High-Performance Habit Coaching Blueprint",
    category: "education",
    categoryName: "Education",
    format: "Educational YouTube Short",
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-man-sitting-in-a-coffee-shop-reading-a-book-42436-large.mp4",
    duration: "0:52",
    result: "14,000+ Course Signups",
    client: "Mindshift Mastery Academy"
  },
  {
    id: 7,
    title: "Modern Minimalist Architectural Villa Tour",
    category: "real-estate",
    categoryName: "Real Estate",
    format: "Cinematic Horizontal 4K Cut",
    thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-living-room-41974-large.mp4",
    duration: "1:45",
    result: "Private Buyer Secured in 14 Days",
    client: "Coastal Haven Properties"
  },
  {
    id: 8,
    title: "B2B SaaS Founder Vision Story",
    category: "personal-brand",
    categoryName: "Personal Brand",
    format: "LinkedIn Authority Video",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-laptop-42999-large.mp4",
    duration: "1:15",
    result: "1,200+ Founder Reshares",
    client: "CloudScale Software"
  },
  {
    id: 9,
    title: "Fitness & Nutrition App Launch Ad",
    category: "ecommerce",
    categoryName: "E-commerce",
    format: "Fast-Paced Motion Ad",
    thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-applying-a-face-cream-in-close-up-41907-large.mp4",
    duration: "0:25",
    result: "65,000+ App Installs",
    client: "PulseFit Nutrition"
  }
];

// Initialize on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  createIcons({ icons: { Play, Check, ChevronDown, Plus, ArrowRight, Menu, X, Video, Star, Sparkles } });

  initThreeHero();
  initFormatCardHighlight();
  initBeforeAfterSlider();
  initRoiCalculator();
  initAmbientMouseGlow();
  initCounterStats();
  initPortfolio();
  initVideoCarousel();
  initVideoModal();
  initFAQ();
  initMobileMenu();
  initLeadForm();
  initScrollEffects();
  initUrlParamTracking();
  initLiveDiscordChat();
  initScrollReveal();
  initFloatingSideNav();
  initStudioTimeline();
  init3DTiltCards();
  initTextScramble();
});

// 0.5. Format Cards Glowing Border Beam Sequential Highlight
function initFormatCardHighlight() {
  const cards = document.querySelectorAll('.format-card');
  if (!cards.length) return;

  let activeIndex = 3; // Start on YouTube Videos (Card 4) like in screenshot
  let isHovered = false;
  let interval;

  function setActiveCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add('is-active');
      } else {
        card.classList.remove('is-active');
      }
    });
  }

  function startCycle() {
    clearInterval(interval);
    interval = setInterval(() => {
      if (!isHovered) {
        activeIndex = (activeIndex + 1) % cards.length;
        setActiveCard(activeIndex);
      }
    }, 2800);
  }

  cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      isHovered = true;
      activeIndex = index;
      setActiveCard(index);
    });

    card.addEventListener('mouseleave', () => {
      isHovered = false;
    });

    card.addEventListener('click', () => {
      activeIndex = index;
      setActiveCard(index);
    });
  });

  setActiveCard(activeIndex);
  startCycle();
}

// 0. Three.js 3D Hero Background with Golden Ambient Particles & Floating Geometric Knot
function initThreeHero() {
  const canvas = document.getElementById('three-hero-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
  camera.position.z = 40;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 1. Ambient Golden Floating Dust Particles
  const particleCount = 220;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 90;
    positions[i + 1] = (Math.random() - 0.5) * 70;
    positions[i + 2] = (Math.random() - 0.5) * 60;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMaterial = new THREE.PointsMaterial({
    color: 0xFFA800,
    size: 1.6,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(geometry, particleMaterial);
  scene.add(particleSystem);

  // 2. Futuristic Wireframe Geometric Ring & Torus Knot
  const knotGeometry = new THREE.TorusKnotGeometry(12, 3.2, 75, 14);
  const knotMaterial = new THREE.MeshBasicMaterial({
    color: 0xFFA800,
    wireframe: true,
    transparent: true,
    opacity: 0.14
  });
  const knot = new THREE.Mesh(knotGeometry, knotMaterial);
  knot.position.set(0, 0, -10);
  scene.add(knot);

  const ringGeometry = new THREE.TorusGeometry(18, 0.25, 16, 80);
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0xFF6B00,
    wireframe: true,
    transparent: true,
    opacity: 0.10
  });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.rotation.x = Math.PI / 3;
  scene.add(ring);

  // Mouse Parallax Interaction
  let targetMouseX = 0;
  let targetMouseY = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Handle Resize
  function handleResize() {
    if (!canvas || !canvas.parentElement) return;
    const width = canvas.parentElement.clientWidth;
    const height = canvas.parentElement.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
  handleResize();
  window.addEventListener('resize', handleResize);

  // Animation Loop with intersection observer to preserve CPU
  let isVisible = true;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
    });
  }, { threshold: 0.05 });
  observer.observe(canvas);

  function animate() {
    requestAnimationFrame(animate);
    if (!isVisible) return;

    // Smooth mouse parallax interpolation
    currentMouseX += (targetMouseX - currentMouseX) * 0.05;
    currentMouseY += (targetMouseY - currentMouseY) * 0.05;

    // Rotate meshes
    knot.rotation.x += 0.003;
    knot.rotation.y += 0.005;
    knot.position.x = currentMouseX * 4;
    knot.position.y = -currentMouseY * 3;

    ring.rotation.z += 0.002;
    ring.rotation.y += 0.001;

    particleSystem.rotation.y += 0.0006;
    particleSystem.position.x = currentMouseX * 2.5;
    particleSystem.position.y = -currentMouseY * 2;

    renderer.render(scene, camera);
  }

  animate();
}

// 1. Portfolio Filter & Dynamic Motion Showcase Logic
function initPortfolio() {
  const container = document.getElementById('portfolio-grid');
  const tabs = document.querySelectorAll('.portfolio-tab');
  const wallModeBtn = document.getElementById('portfolio-mode-wall');
  const streamModeBtn = document.getElementById('portfolio-mode-stream');
  if (!container) return;

  let currentMode = 'wall'; // 'wall' (up & down) or 'stream' (horizontal left-right)
  let currentFilter = 'all';

  function renderCard(item) {
    return `
      <div class="wealth-card p-4 rounded-2xl overflow-hidden group cursor-pointer hover:border-brand-amber/40 transition-all shadow-lg bg-[#0d0e14] ${currentMode === 'stream' ? 'w-[320px] sm:w-[360px] flex-shrink-0' : ''}" data-video-id="${item.id}">
        <div class="video-card-thumb relative aspect-[16/10] bg-dark-950 rounded-xl overflow-hidden mb-3">
          <img src="${item.thumbnail}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent"></div>
          
          <div class="absolute top-2.5 left-2.5">
            <span class="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-dark-950/90 backdrop-blur-md text-brand-amber border border-brand-amber/30">
              ${item.categoryName}
            </span>
          </div>

          <div class="absolute top-2.5 right-2.5">
            <span class="px-2 py-0.5 text-[10px] font-mono rounded bg-dark-950/90 backdrop-blur-md text-slate-300">
              ${item.duration}
            </span>
          </div>

          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-11 h-11 rounded-full bg-brand-orange text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 font-mono">
            <span>${item.format}</span>
            <span class="text-emerald-400 font-bold">${item.result}</span>
          </div>
          <h3 class="font-bold text-white text-sm group-hover:text-brand-amber transition-colors line-clamp-1 mb-1">
            ${item.title}
          </h3>
          <p class="text-[11px] text-slate-400 line-clamp-1">${item.client}</p>
        </div>
      </div>
    `;
  }

  function renderView() {
    if (currentFilter !== 'all') {
      // Filtered view: Clean responsive grid
      const filtered = portfolioData.filter(item => item.category === currentFilter);
      container.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left h-full overflow-y-auto p-2">
          ${filtered.map(renderCard).join('')}
        </div>
      `;
    } else if (currentMode === 'wall') {
      // Up & Down Multi-Column Wall (Wealth Portal Exact Style)
      const col1Items = [portfolioData[0], portfolioData[3], portfolioData[6]];
      const col2Items = [portfolioData[1], portfolioData[4], portfolioData[7]];
      const col3Items = [portfolioData[2], portfolioData[5], portfolioData[8]];

      // Duplicate each column twice for 100% seamless infinite loop
      const col1Cards = [...col1Items, ...col1Items, ...col1Items].map(renderCard).join('');
      const col2Cards = [...col2Items, ...col2Items, ...col2Items].map(renderCard).join('');
      const col3Cards = [...col3Items, ...col3Items, ...col3Items].map(renderCard).join('');

      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left h-full">
          <div class="overflow-hidden relative h-full">
            <div class="animate-scroll-col-up flex flex-col gap-6">
              ${col1Cards}
            </div>
          </div>
          <div class="hidden md:block overflow-hidden relative h-full">
            <div class="animate-scroll-col-down flex flex-col gap-6">
              ${col2Cards}
            </div>
          </div>
          <div class="hidden lg:block overflow-hidden relative h-full">
            <div class="animate-scroll-col-up flex flex-col gap-6" style="animation-duration: 26s !important;">
              ${col3Cards}
            </div>
          </div>
        </div>
      `;
    } else {
      // Horizontal Left-to-Right Stream
      const row1Cards = [...portfolioData.slice(0, 5), ...portfolioData.slice(0, 5)].map(renderCard).join('');
      const row2Cards = [...portfolioData.slice(4), ...portfolioData.slice(0, 3), ...portfolioData.slice(4), ...portfolioData.slice(0, 3)].map(renderCard).join('');

      container.innerHTML = `
        <div class="flex flex-col gap-6 justify-center h-full overflow-hidden">
          <div class="overflow-hidden w-full">
            <div class="animate-slide-right flex gap-6">
              ${row1Cards}
            </div>
          </div>
          <div class="overflow-hidden w-full">
            <div class="animate-slide-left flex gap-6">
              ${row2Cards}
            </div>
          </div>
        </div>
      `;
    }

    // Attach click listeners to open modal on any card
    container.querySelectorAll('[data-video-id]').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.getAttribute('data-video-id'), 10);
        openVideoModal(id);
      });
    });
  }

  // Handle Tab Switch
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('bg-brand-orange', 'text-black', 'font-bold', 'shadow-lg');
        t.classList.add('bg-dark-850', 'text-slate-300', 'hover:border-slate-600');
      });
      tab.classList.remove('bg-dark-850', 'text-slate-300', 'hover:border-slate-600');
      tab.classList.add('bg-brand-orange', 'text-black', 'font-bold', 'shadow-lg');

      currentFilter = tab.getAttribute('data-filter') || 'all';
      renderView();
    });
  });

  // Handle Mode Switchers (Wall vs Stream)
  if (wallModeBtn && streamModeBtn) {
    wallModeBtn.addEventListener('click', () => {
      currentMode = 'wall';
      wallModeBtn.classList.add('bg-brand-orange', 'text-black', 'font-bold');
      wallModeBtn.classList.remove('bg-dark-850', 'text-slate-400');
      streamModeBtn.classList.remove('bg-brand-orange', 'text-black', 'font-bold');
      streamModeBtn.classList.add('bg-dark-850', 'text-slate-400');
      renderView();
    });

    streamModeBtn.addEventListener('click', () => {
      currentMode = 'stream';
      streamModeBtn.classList.add('bg-brand-orange', 'text-black', 'font-bold');
      streamModeBtn.classList.remove('bg-dark-850', 'text-slate-400');
      wallModeBtn.classList.remove('bg-brand-orange', 'text-black', 'font-bold');
      wallModeBtn.classList.add('bg-dark-850', 'text-slate-400');
      renderView();
    });
  }

  // Initial render
  renderView();
}


// 1.5 Horizontal Video Carousel Controller
function initVideoCarousel() {
  const track = document.getElementById('video-carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (!track || !prevBtn || !nextBtn) return;

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -260, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: 260, behavior: 'smooth' });
  });
}

// 2. Interactive Video Modal Player
function initVideoModal() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const videoElem = document.getElementById('modal-video-element');
  const titleElem = document.getElementById('modal-video-title');
  const subtitleElem = document.getElementById('modal-video-subtitle');

  if (!modal || !closeBtn || !videoElem) return;

  window.openVideoModal = function(id) {
    const item = portfolioData.find(v => v.id === id);
    if (!item) return;

    titleElem.textContent = item.title;
    subtitleElem.textContent = `${item.categoryName} • ${item.format} • ${item.client}`;
    videoElem.src = item.videoUrl;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    videoElem.play().catch(() => {});
  };

  function closeModal() {
    videoElem.pause();
    videoElem.src = '';
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });
}

// 3. FAQ Accordion Handler
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');

        // Close all others
        faqItems.forEach(other => {
          const otherContent = other.querySelector('.faq-content');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherContent) otherContent.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        if (!isOpen) {
          content.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(45deg)';
        }
      });
    }
  });
}

// 4. Mobile Menu Drawer & Sticky CTA
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!openBtn || !closeBtn || !menu) return;

  function toggleDrawer(open) {
    if (open) {
      menu.classList.remove('translate-x-full', 'invisible');
      menu.classList.add('translate-x-0', 'visible');
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.add('translate-x-full', 'invisible');
      menu.classList.remove('translate-x-0', 'visible');
      document.body.style.overflow = '';
    }
  }

  openBtn.addEventListener('click', () => toggleDrawer(true));
  closeBtn.addEventListener('click', () => toggleDrawer(false));
  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

// 5. Lead Form with Visual Confirmation
function initLeadForm() {
  const form = document.getElementById('quote-form');
  const formFeedback = document.getElementById('form-feedback');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = `<span class="inline-flex items-center gap-2"><svg class="animate-spin w-4 h-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg> Generating Quote Proposal...</span>`;
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.innerHTML = originalText;
      btn.disabled = false;
      if (formFeedback) {
        formFeedback.classList.remove('hidden');
        setTimeout(() => {
          formFeedback.classList.add('hidden');
        }, 6000);
      }
    }, 1200);
  });
}

// 6. Scroll Effects & Sticky Bottom Bar
function initScrollEffects() {
  const stickyBar = document.getElementById('mobile-sticky-cta');
  const contactSection = document.getElementById('contact');
  if (!stickyBar) return;

  function updateStickyBar() {
    const contactRect = contactSection ? contactSection.getBoundingClientRect() : null;
    const isNearContact = contactRect && contactRect.top < window.innerHeight * 0.75;

    if (window.scrollY > 400 && !isNearContact) {
      stickyBar.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
      stickyBar.classList.add('translate-y-0', 'opacity-100');
    } else {
      stickyBar.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
      stickyBar.classList.remove('translate-y-0', 'opacity-100');
    }
  }

  window.addEventListener('scroll', updateStickyBar, { passive: true });
  updateStickyBar();
}

// 7. Outreach URL Parameters Tracking (?source=instagram&industry=real-estate)
function initUrlParamTracking() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('source');
  const industry = params.get('industry');

  if (source || industry) {
    const sourceInput = document.getElementById('tracking-source');
    const industryInput = document.getElementById('tracking-industry');
    if (sourceInput && source) sourceInput.value = source;
    if (industryInput && industry) industryInput.value = industry;

    // Auto-select industry filter tab if matching
    if (industry) {
      const targetTab = document.querySelector(`.portfolio-tab[data-filter="${industry}"]`);
      if (targetTab) {
        setTimeout(() => targetTab.click(), 300);
      }
    }
  }
}

// 8. Live Interactive Discord Chat Simulator (Wealth Portal Exact Feature)
function initLiveDiscordChat() {
  const inputEl = document.getElementById('chat-typewriter-input');
  const sendBtn = document.getElementById('chat-send-btn');
  const messageFeed = document.getElementById('chat-message-feed');
  const typingIndicator = document.getElementById('chat-typing-indicator');

  if (!inputEl || !sendBtn || !messageFeed) return;

  const scenarios = [
    {
      author: "Alex Chen (DTC Brand Founder)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      time: "Just now",
      clientMessage: "I just recorded 6 new hook variations... can we test 3 of them for tomorrow's ad campaign?",
      replyAuthor: "Lead Producer (Marketing Talk)",
      replyBadge: "MT",
      replyTime: "Just now",
      replyMessage: "On it Alex! 🔥 Upload them to your shared Drive. We'll grade them and deliver all 3 variations in under 24 hours."
    },
    {
      author: "Sophie Palmer (Fitness Creator)",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      time: "Just now",
      clientMessage: "Hey team, our YouTube Short just crossed 100K views in 18 hours! Can we double up on this pacing?",
      replyAuthor: "Senior Editor (Marketing Talk)",
      replyBadge: "MT",
      replyTime: "Just now",
      replyMessage: "Incredible momentum Sophie! 🚀 The sound design pacing matched the drop perfectly. Let's produce 4 more with the same retention curve this week!"
    },
    {
      author: "Marcus Vance (Miami Real Estate)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      time: "Just now",
      clientMessage: "Just closed an investor viewing from the penthouse reel! Need 2 more drone cuts for the waterfront mansion.",
      replyAuthor: "Lead Producer (Marketing Talk)",
      replyBadge: "MT",
      replyTime: "Just now",
      replyMessage: "Huge congrats Marcus! 🥂 We already pulled the drone RAWs from your dropbox. First cut ready for review by 4 PM today."
    }
  ];

  let scenarioIndex = 0;
  let isUserInteracting = false;

  function typeWriterEffect(text, callback) {
    let index = 0;
    inputEl.value = '';

    const interval = setInterval(() => {
      if (isUserInteracting) {
        clearInterval(interval);
        return;
      }
      if (index < text.length) {
        inputEl.value += text[index];
        index++;
      } else {
        clearInterval(interval);
        setTimeout(callback, 800);
      }
    }, 45);
  }

  function appendMessage(isClient, author, avatarOrBadge, time, message, isBadge = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'flex items-start gap-3.5 mb-4 animate-fadeIn transition-all duration-300';
    
    let avatarHtml = '';
    if (isBadge) {
      avatarHtml = `
        <div class="w-9 h-9 rounded-full bg-gradient-to-br from-brand-amber to-brand-orange flex items-center justify-center text-black font-black text-xs flex-shrink-0 shadow-md">
          ${avatarOrBadge}
        </div>
      `;
    } else {
      avatarHtml = `
        <img src="${avatarOrBadge}" alt="${author}" class="w-9 h-9 rounded-full object-cover border border-white/20 flex-shrink-0" />
      `;
    }

    const bubbleBg = isClient ? 'bg-white/5 border border-white/5' : 'bg-brand-orange/10 border border-brand-orange/30';
    const authorColor = isClient ? 'text-white' : 'text-brand-amber font-bold';

    msgDiv.innerHTML = `
      ${avatarHtml}
      <div class="${bubbleBg} p-3 sm:p-3.5 rounded-xl rounded-tl-none w-full shadow-md">
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs font-bold ${authorColor}">${author}</span>
          <span class="text-[10px] text-slate-500 font-mono">${time}</span>
        </div>
        <p class="text-xs text-slate-200 leading-relaxed">${message}</p>
      </div>
    `;

    messageFeed.appendChild(msgDiv);
    messageFeed.scrollTop = messageFeed.scrollHeight;
  }

  function runNextScenario() {
    if (isUserInteracting) return;

    const current = scenarios[scenarioIndex];

    // 1. Type client message into input field
    typeWriterEffect(current.clientMessage, () => {
      if (isUserInteracting) return;

      // 2. Pulse Send Button
      sendBtn.classList.add('scale-110', 'brightness-125');
      setTimeout(() => {
        sendBtn.classList.remove('scale-110', 'brightness-125');

        // 3. Clear input & Append Client Message
        inputEl.value = '';
        appendMessage(true, current.author, current.avatar, current.time, current.clientMessage);

        // 4. Show "Marketing Talk is typing..."
        setTimeout(() => {
          if (typingIndicator) typingIndicator.classList.remove('hidden');
          messageFeed.scrollTop = messageFeed.scrollHeight;

          // 5. Marketing Talk replies
          setTimeout(() => {
            if (typingIndicator) typingIndicator.classList.add('hidden');
            appendMessage(false, current.replyAuthor, current.replyBadge, current.replyTime, current.replyMessage, true);

            // 6. Pause, then move to next scenario
            scenarioIndex = (scenarioIndex + 1) % scenarios.length;
            setTimeout(runNextScenario, 6000);
          }, 1800);

        }, 800);

      }, 350);
    });
  }

  // Allow visitor to type their own message and send
  inputEl.addEventListener('focus', () => {
    isUserInteracting = true;
  });

  function handleUserSend() {
    const text = inputEl.value.trim();
    if (!text) return;

    isUserInteracting = true;
    inputEl.value = '';
    appendMessage(true, "You (Brand Creator)", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80", "Just now", text);

    setTimeout(() => {
      if (typingIndicator) typingIndicator.classList.remove('hidden');
      messageFeed.scrollTop = messageFeed.scrollHeight;

      setTimeout(() => {
        if (typingIndicator) typingIndicator.classList.add('hidden');
        appendMessage(false, "Lead Producer (Marketing Talk)", "MT", "Just now", "Got your request! 🔥 Drop the raw footage in your shared Drive or submit the brief form below, and our senior editor will get straight on it.", true);

        // Resume auto cycle after 8 seconds
        setTimeout(() => {
          isUserInteracting = false;
          runNextScenario();
        }, 8000);
      }, 1600);
    }, 600);
  }

  sendBtn.addEventListener('click', handleUserSend);
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleUserSend();
    }
  });

  // Start the live typing loop
  setTimeout(runNextScenario, 1500);
}

// 9. Interactive Before & After Transformation Slider
function initBeforeAfterSlider() {
  const container = document.getElementById('before-after-container');
  const clip = document.getElementById('before-image-clip');
  const handle = document.getElementById('before-after-handle');
  const btnBefore = document.getElementById('slider-btn-before');
  const btnSplit = document.getElementById('slider-btn-split');
  const btnAfter = document.getElementById('slider-btn-after');

  if (!container || !clip || !handle) return;

  let isDragging = false;

  function updateSliderPosition(percentage) {
    const clamped = Math.max(0, Math.min(100, percentage));
    clip.style.width = `${clamped}%`;
    handle.style.left = `${clamped}%`;
  }

  function handleMove(clientX) {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    updateSliderPosition(percentage);
  }

  // Mouse drag events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    handleMove(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch drag support for phones and tablets
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Mode Switch Buttons
  function setBtnActive(activeBtn) {
    [btnBefore, btnSplit, btnAfter].forEach(b => {
      if (!b) return;
      b.classList.remove('bg-brand-orange', 'text-black', 'font-extrabold', 'shadow-md');
      b.classList.add('text-slate-400', 'bg-white/5');
    });
    if (activeBtn) {
      activeBtn.classList.remove('text-slate-400', 'bg-white/5');
      activeBtn.classList.add('bg-brand-orange', 'text-black', 'font-extrabold', 'shadow-md');
    }
  }

  if (btnBefore) {
    btnBefore.addEventListener('click', () => {
      updateSliderPosition(100);
      setBtnActive(btnBefore);
    });
  }

  if (btnSplit) {
    btnSplit.addEventListener('click', () => {
      updateSliderPosition(50);
      setBtnActive(btnSplit);
    });
  }

  if (btnAfter) {
    btnAfter.addEventListener('click', () => {
      updateSliderPosition(0);
      setBtnActive(btnAfter);
    });
  }
}

// 10. Interactive Video Capacity & Output Estimator
function initRoiCalculator() {
  const slider = document.getElementById('calc-volume-slider');
  const display = document.getElementById('calc-volume-display');
  const hoursEl = document.getElementById('calc-hours-saved');
  const turnaroundEl = document.getElementById('calc-turnaround');
  const editorsEl = document.getElementById('calc-editors');
  const reachEl = document.getElementById('calc-reach');
  const applyBtn = document.getElementById('calc-apply-btn');

  if (!slider || !display) return;

  function recalculate() {
    const val = parseInt(slider.value, 10);
    display.textContent = val;

    if (hoursEl) hoursEl.textContent = `${val * 6} hrs`;

    if (turnaroundEl) {
      if (val <= 10) turnaroundEl.textContent = '48h';
      else if (val <= 24) turnaroundEl.textContent = '24-48h';
      else turnaroundEl.textContent = '24h Priority';
    }

    if (editorsEl) {
      if (val <= 10) editorsEl.textContent = '1 Dedicated';
      else if (val <= 24) editorsEl.textContent = '2 Dedicated';
      else editorsEl.textContent = '3 Senior Team';
    }

    if (reachEl) {
      const reachK = Math.round(val * 22.5);
      reachEl.textContent = `${reachK}K+`;
    }
  }

  slider.addEventListener('input', recalculate);

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const val = slider.value;
      const contactSection = document.getElementById('contact');
      const notesField = document.getElementById('notes');
      if (notesField) {
        notesField.value = `Interested in the custom plan for ~${val} videos per month. Please provide a tailored quote proposal.`;
      }
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  recalculate();
}

// 11. Subtle Ambient Cursor Spotlight
function initAmbientMouseGlow() {
  const glow = document.getElementById('ambient-mouse-glow');
  if (!glow) return;

  window.addEventListener('mousemove', (e) => {
    glow.style.setProperty('--cursor-x', `${e.clientX}px`);
    glow.style.setProperty('--cursor-y', `${e.clientY}px`);
  });
}

// 12. Animated Numbers Counting Up on Viewport Entry
function initCounterStats() {
  const counters = document.querySelectorAll('[data-target-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target-counter'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800;
        const start = performance.now();

        function update(time) {
          const progress = Math.min((time - start) / duration, 1);
          const easeOutQuad = 1 - (1 - progress) * (1 - progress);
          const current = Math.floor(easeOutQuad * target);
          el.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
          }
        }

        requestAnimationFrame(update);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(c => observer.observe(c));
}

// 13. Scroll-Driven Reveal & Lazy Loading (Adymize Staggered Entrance)
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// 14. Floating Vertical Side Navigation Indicator (Adymize Exact Feature)
function initFloatingSideNav() {
  const sideNav = document.getElementById('floating-side-nav');
  if (!sideNav) return;

  const dots = sideNav.querySelectorAll('.side-nav-dot');
  const sectionIds = Array.from(dots).map(d => d.getAttribute('data-section')).filter(Boolean);

  // Smooth scroll click handler
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const secId = dot.getAttribute('data-section');
      const target = document.getElementById(secId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Track active section on scroll with IntersectionObserver
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        dots.forEach(dot => {
          if (dot.getAttribute('data-section') === id) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  });

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
  });
}

// 15. Interactive Studio Precision Timeline Scrubber (Hollywood / Studio Feature)
function initStudioTimeline() {
  const slider = document.getElementById('studio-timeline-slider');
  const playhead = document.getElementById('studio-playhead');
  const tcDisplay = document.getElementById('timeline-timecode');
  const phaseLabel = document.getElementById('timeline-phase-label');
  const clipHook = document.getElementById('clip-hook');
  const clipBroll = document.getElementById('clip-broll');
  const clipPolish = document.getElementById('clip-polish');

  if (!slider || !playhead) return;

  function updateTimeline() {
    const val = parseFloat(slider.value);
    playhead.style.left = `${val}%`;

    // Dynamic Timecode
    const seconds = Math.floor(val * 0.6);
    const frames = Math.floor((val * 1.6) % 30);
    if (tcDisplay) {
      tcDisplay.textContent = `TC 00:00:${String(seconds).padStart(2, '0')}:${String(frames).padStart(2, '0')}`;
    }

    // Highlight active clip based on scrub position
    if (val < 35) {
      if (phaseLabel) phaseLabel.textContent = "Phase 1: 1.5s Hook Cut & Pattern Interrupt";
      if (clipHook) clipHook.style.boxShadow = "0 0 16px rgba(255, 106, 0, 0.4)";
      if (clipBroll) clipBroll.style.boxShadow = "none";
      if (clipPolish) clipPolish.style.boxShadow = "none";
    } else if (val < 70) {
      if (phaseLabel) phaseLabel.textContent = "Phase 2: Dynamic B-Roll & Visual Pacing";
      if (clipHook) clipHook.style.boxShadow = "none";
      if (clipBroll) clipBroll.style.boxShadow = "0 0 16px rgba(6, 182, 212, 0.4)";
      if (clipPolish) clipPolish.style.boxShadow = "none";
    } else {
      if (phaseLabel) phaseLabel.textContent = "Phase 3: 4K Master Grade & 48kHz Sound Design";
      if (clipHook) clipHook.style.boxShadow = "none";
      if (clipBroll) clipBroll.style.boxShadow = "none";
      if (clipPolish) clipPolish.style.boxShadow = "0 0 16px rgba(16, 185, 129, 0.4)";
    }
  }

  slider.addEventListener('input', updateTimeline);
  slider.addEventListener('touchmove', updateTimeline, { passive: true });
  updateTimeline();
}

// 16. 3D Card Perspective Tilt & Reflective Glare
function init3DTiltCards() {
  const cards = document.querySelectorAll('.card-3d-tilt');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
}

// 17. Kinetic Text Scramble / Cipher Decryption on Scroll
function initTextScramble() {
  const elements = document.querySelectorAll('[data-scramble="true"]');
  if (!elements.length) return;

  const chars = "!<>-_\\/[]{}—=+*^?#_$%~";

  function scramble(el) {
    const originalText = el.getAttribute('data-original-text') || el.innerText.trim();
    el.setAttribute('data-original-text', originalText);
    let iteration = 0;
    const maxIterations = originalText.length;

    const interval = setInterval(() => {
      el.innerText = originalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iteration >= maxIterations) {
        clearInterval(interval);
        el.innerText = originalText;
      }
      iteration += 1 / 2;
    }, 28);
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scramble(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));
}

