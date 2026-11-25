/**
 * ============================================================================
 * PRINCE PATEL (patelprince8055) - PRODUCTION PORTFOLIO CORE JAVASCRIPT
 * Pure Vanilla JavaScript (ES6+) with Zero Build Step / Zero External Runtime
 * Fully customizable via the CONFIG object below.
 * ============================================================================
 */

/* ============================================================================
   CENTRAL CONFIGURATION OBJECT (Edit all owner details, projects & links here)
   ============================================================================ */
const CONFIG = {
  // Owner & Brand Details
  owner: {
    name: "Prince Patel",
    username: "patelprince8055",
    githubUsername: "prinspatel8055",
    role: "Full Stack Web Developer | UI/UX Designer | Cybersecurity Learner",
    organization: "Ganpat University",
    email: "prinspatel8055@gmail.com",
    location: "Ganpat University, Gujarat, India",
    typingWords: [
      "Full Stack Developer",
      "UI/UX Designer",
      "Landing Page Specialist",
      "Cybersecurity Enthusiast",
      "Server & Hosting Specialist"
    ],
    stats: {
      projectsDelivered: 15,
      liveWebsites: 9,
      technologies: 25,
      yearsExperience: 4
    }
  },

  // Social Media Channels
  socialLinks: {
    github: "https://github.com/prinspatel8055",
    linkedin: "https://www.linkedin.com/in/prince-patel-7209ab322",
    instagram: "https://www.instagram.com/patelprince__8055/",
    facebook: "https://www.facebook.com/prince.patel.388565/"
  },

  // Contact Form Settings (Formspree or fallback to mailto)
  contactForm: {
    // Replace with your real Formspree endpoint (e.g. "https://formspree.io/f/mqkenjkk")
    // When left empty or set to placeholder, it uses an interactive mailto fallback
    formspreeEndpoint: ""
  },

  // Live Production Projects & Portals (Real Sites Delivered by Prince Patel)
  projects: [
    {
      id: "convocation",
      title: "Ganpat University Convocation Portal",
      url: "https://convocation.guni.ac.in/",
      category: "University",
      description: "Official Convocation registration and degree management portal for university graduates with secure student credentials and responsive workflow.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Webuzo"],
      image: "assets/projects/convocation.jpg"
    },
    {
      id: "atcnn",
      title: "ATCNN International Conference",
      url: "https://atcnn.guni.ac.in/",
      category: "Events",
      description: "Global conference platform for Advances in Technology, Computing & Neural Networks featuring call for papers, committee schedules, and keynote details.",
      tags: ["Web Design", "UI/UX", "JavaScript", "Event Portal"],
      image: "assets/projects/atcnn.jpg"
    },
    {
      id: "am-portal",
      title: "AM Portal - Admission Management",
      url: "https://am.guni.ac.in/",
      category: "University",
      description: "Centralized university admission and student application portal designed for fast form submission, document handling, and high-traffic enrollment seasons.",
      tags: ["Full Stack", "Node.js", "Express", "Database", "UI/UX"],
      image: "assets/projects/am-portal.jpg"
    },
    {
      id: "ict-courses",
      title: "GUNI ICT Engineering Courses",
      url: "https://www.ganpatuniversity.ac.in/courses/ict",
      category: "Education",
      description: "Interactive educational portal presenting academic curriculum, faculty directory, specialized labs, and program syllabus for ICT students.",
      tags: ["Frontend", "Responsive Design", "SEO", "CMS Integration"],
      image: "assets/projects/ict-courses.jpg"
    },
    {
      id: "icedmam",
      title: "ICEDMAM Global Conference",
      url: "https://www.ganpatuniversity.ac.in/icedmam/home-icedmam",
      category: "Events",
      description: "Global engineering symposium platform for International Conference on Engineering Design, Manufacturing & Advanced Materials.",
      tags: ["UI/UX Layouts", "Animations", "Event Showcase"],
      image: "assets/projects/icedmam.jpg"
    },
    {
      id: "digital-health-tech",
      title: "Digital Health Technology Platform",
      url: "https://www.ganpatuniversity.ac.in/about/digitalhealthtech-home",
      category: "Education",
      description: "Cross-disciplinary healthcare innovation and bioinformatics educational platform demonstrating digital healthcare transformation initiatives.",
      tags: ["Web Architecture", "UI Design", "Performance Optimization"],
      image: "assets/projects/digital-health-tech.jpg"
    },
    {
      id: "maritime-games",
      title: "National Maritime Games Official Portal",
      url: "https://nationalmaritimegames.org/",
      category: "Events",
      description: "Dynamic sports and maritime event portal hosting regatta schedules, athletic registrations, participant brackets, and live news bulletins.",
      tags: ["Landing Page", "Performance", "Interactive UI", "DNS/Hosting"],
      image: "assets/projects/maritime-games.jpg"
    },
    {
      id: "gcsrs",
      title: "GCSRS Research Symposium",
      url: "https://www.ganpatuniversity.ac.in/gcsrs/gcsrs-home",
      category: "Events",
      description: "Ganpat University Cutting-edge Scientific Research Summit portal with abstract submission workflows, speaker showcases, and schedule tracks.",
      tags: ["Framer", "Modern UI", "Interactive Elements"],
      image: "assets/projects/gcsrs.jpg"
    },
    {
      id: "maritime-conclave",
      title: "Maritime Skill Conclave (MTSC)",
      url: "https://www.ganpatuniversity.ac.in/maritimeskillconclave/mtsc-home",
      category: "Events",
      description: "High-level national conclave portal focusing on marine logistics, maritime vocational training, stakeholder summits, and industry panels.",
      tags: ["UI/UX Layout", "Responsive Web Design", "SEO Optimization"],
      image: "assets/projects/maritime-conclave.jpg"
    }
  ],

  // Antigravity & AI Lab Projects Subsection
  antigravityProjects: [
    {
      title: "AI Agentic Workflow Studio",
      description: "Autonomous task orchestration system and conversational web agents built with prompt pipelines, streaming UI, and modern APIs.",
      icon: "🤖",
      tags: ["Python", "AI Integration", "Web Agents", "Automation"],
      image: "assets/projects/antigravity-ai.jpg"
    },
    {
      title: "Matrix COSEC Biometric IoT Hub",
      description: "Python tool to connect, monitor live status, and export attendance logs from Matrix COSEC biometric devices across corporate networks.",
      icon: "⚡",
      tags: ["Python", "Biometric IoT", "Hardware Sync", "API"],
      image: "assets/projects/matrix-cosec.jpg"
    },
    {
      title: "OSINT Phone Intelligence Framework",
      description: "Advanced phone number intelligence investigation framework with customized Web UI, prebuilt Windows binary, and API reconnaissance.",
      icon: "🔍",
      tags: ["Go", "Cybersecurity", "OSINT", "Web UI"],
      image: "assets/projects/phoneinfoga.jpg"
    },
    {
      title: "BookVerse Robo Document Translator",
      description: "High-performance Robo book translator for PDF and FB2 files, batch converting entire libraries with zero layout loss and smart OCR.",
      icon: "📚",
      tags: ["Python", "Document AI", "OCR", "File Processing"],
      image: "assets/projects/BookVerse.jpg"
    }
  ],

  // Fallback Repositories in case GitHub REST API rate-limit (60/hr) is reached
  fallbackRepos: [
    {
      name: "phoneinfoga-tool",
      description: "Advanced OSINT phone number investigation framework with Web UI, prebuilt Windows binary, and complete user setup guide.",
      language: "Go",
      stars: 0,
      forks: 0,
      updated_at: "2025-02-15T00:00:00Z",
      html_url: "https://github.com/prinspatel8055/phoneinfoga-tool"
    },
    {
      name: "matrix-cosec-manager",
      description: "Python tool to connect, monitor live status, and export attendance logs from Matrix COSEC biometric devices.",
      language: "Python",
      stars: 0,
      forks: 0,
      updated_at: "2025-02-12T00:00:00Z",
      html_url: "https://github.com/prinspatel8055/matrix-cosec-manager"
    },
    {
      name: "BookVerse",
      description: "High-performance Robo book translator for PDF and FB2 files. Batch converts entire libraries with zero layout loss and smart diagram OCR.",
      language: "Python",
      stars: 0,
      forks: 0,
      updated_at: "2025-02-10T00:00:00Z",
      html_url: "https://github.com/prinspatel8055/BookVerse"
    },
    {
      name: "gunish-website",
      description: "Modern interactive web portal with responsive layouts, TypeScript frontend, and dynamic UI components.",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      updated_at: "2025-02-08T00:00:00Z",
      html_url: "https://github.com/prinspatel8055/gunish-website"
    },
    {
      name: "python-text-counter",
      description: "Python tool that counts words, characters, and sentences in text with clean UI for text processing.",
      language: "Python",
      stars: 0,
      forks: 0,
      updated_at: "2025-01-20T00:00:00Z",
      html_url: "https://github.com/prinspatel8055/python-text-counter"
    },
    {
      name: "GOA1",
      description: "TypeScript based interactive web project implementing responsive interface and clean code conventions.",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      updated_at: "2025-01-15T00:00:00Z",
      html_url: "https://github.com/prinspatel8055/GOA1"
    }
  ]
};

/* ============================================================================
   PORTFOLIO APPLICATION ENGINE
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Core Subsystems
  initPreloader();
  initThemeSwitcher();
  initScrollProgress();
  initStickyNavbar();
  initMobileMenu();
  initHeroTyping();
  initParticleCanvas();
  renderProjectsGrid();
  renderAntigravityProjects();
  initProjectsFilter();
  initSkillsFilter();
  init3DTiltEffects();
  initMagneticButtons();
  initButtonRipple();
  initCustomCursor();
  initAnimatedCounters();
  initGitHubSection();
  initResumeModal();
  initContactForm();
  initScrollReveal();
  initBackToTop();
  updateCurrentYear();
});

/* ----------------------------------------------------------------------------
   1. Preloader Animation
   ---------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const progressBar = document.getElementById("preloader-progress");
  if (!preloader || !progressBar) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 20) + 10;
    if (progress > 100) progress = 100;
    progressBar.style.width = `${progress}%`;

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add("preloader-hidden");
        document.body.style.overflow = "visible";
      }, 350);
    }
  }, 60);
}

/* ----------------------------------------------------------------------------
   2. Light / Dark Theme Switcher with LocalStorage Persistence
   ---------------------------------------------------------------------------- */
function initThemeSwitcher() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem("patelprince_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("patelprince_theme", newTheme);
  });
}

/* ----------------------------------------------------------------------------
   3. Scroll Progress Bar
   ---------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress-bar");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

/* ----------------------------------------------------------------------------
   4. Sticky Glass Navbar & Active Nav-Link Spy
   ---------------------------------------------------------------------------- */
function initStickyNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  if (!navbar) return;

  // Sticky background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  }, { passive: true });

  // Active Link Spy using IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -60% 0px",
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => spyObserver.observe(sec));
}

/* ----------------------------------------------------------------------------
   5. Mobile Drawer Menu
   ---------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileMenu) return;

  const toggleMenu = () => {
    const isOpen = menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-open", isOpen);
    menuBtn.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  };

  menuBtn.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("is-open")) {
        toggleMenu();
      }
    });
  });
}

/* ----------------------------------------------------------------------------
   6. Hero Dynamic Typing Effect
   ---------------------------------------------------------------------------- */
function initHeroTyping() {
  const typedEl = document.getElementById("typed-text");
  if (!typedEl) return;

  const words = CONFIG.owner.typingWords;
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeStep() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typedEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typedEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at complete word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 400;
    }

    setTimeout(typeStep, typingSpeed);
  }

  typeStep();
}

/* ----------------------------------------------------------------------------
   7. High-Performance Canvas Particles Constellation (60fps)
   ---------------------------------------------------------------------------- */
function initParticleCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 22), 65);
  const maxDistance = 120;

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 1.8 + 0.8;
      this.color = Math.random() > 0.5 ? "rgba(124, 92, 255, " : "rgba(0, 212, 255, ";
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + "0.65)";
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124, 92, 255, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }, { passive: true });
}

/* ----------------------------------------------------------------------------
   8. 3D Mouse Tilt Effect for Profile Frame & Glass Cards
   ---------------------------------------------------------------------------- */
function init3DTiltEffects() {
  if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024) return;

  const profileCard = document.getElementById("profile-card-3d");
  if (profileCard) {
    profileCard.addEventListener("mousemove", (e) => {
      const rect = profileCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -14;
      const rotateY = ((x - centerX) / centerX) * 14;

      profileCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    profileCard.addEventListener("mouseleave", () => {
      profileCard.style.transform = "";
    });
  }

  // Tilt on generic .tilt-card
  const tiltCards = document.querySelectorAll(".tilt-card");
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/* ----------------------------------------------------------------------------
   9. Magnetic Button Hover Effect
   ---------------------------------------------------------------------------- */
function initMagneticButtons() {
  if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024) return;

  const magneticBtns = document.querySelectorAll(".magnetic-btn");
  magneticBtns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) translateY(-3px) scale(1.03)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

/* ----------------------------------------------------------------------------
   10. Click Ripple Effect on Buttons
   ---------------------------------------------------------------------------- */
function initButtonRipple() {
  document.addEventListener("click", (e) => {
    const target = e.target.closest(".btn");
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    target.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
}

/* ----------------------------------------------------------------------------
   11. Smooth Trailing Custom Cursor (Desktop Only)
   ---------------------------------------------------------------------------- */
function initCustomCursor() {
  const arrow = document.getElementById("cursor-arrow");
  const aura = document.getElementById("cursor-aura");
  if (!arrow || !aura || window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024) return;

  let mouseX = -100;
  let mouseY = -100;
  let auraX = -100;
  let auraY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Arrow tip follows cursor exactly
    arrow.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  // Lerp smoothing animation loop for soft trailing aura
  function renderCursor() {
    auraX += (mouseX - auraX) * 0.16;
    auraY += (mouseY - auraY) * 0.16;
    aura.style.transform = `translate3d(${auraX}px, ${auraY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover state detection on clickable items
  const clickables = document.querySelectorAll(
    "a, button, input, textarea, .project-card, .skill-chip, .tilt-card, .social-icon-btn, .social-xl-btn, .filter-tab-btn, .proj-filter-btn"
  );
  clickables.forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

/* ----------------------------------------------------------------------------
   12. Animated Counter Numbers (About Section)
   ---------------------------------------------------------------------------- */
function initAnimatedCounters() {
  const counterCards = document.querySelectorAll(".counter-value");
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counterCards.forEach((counter) => {
          const target = +counter.getAttribute("data-target");
          const duration = 1600;
          const stepTime = Math.abs(Math.floor(duration / target));
          let current = 0;

          const timer = setInterval(() => {
            current += 1;
            counter.textContent = current;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const aboutSection = document.getElementById("about");
  if (aboutSection) observer.observe(aboutSection);
}

/* ----------------------------------------------------------------------------
   13. Skills Category Filter Tabs
   ---------------------------------------------------------------------------- */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll(".filter-tab-btn");
  const skillCards = document.querySelectorAll(".skill-category-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      skillCards.forEach((card) => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
      setTimeout(() => {
        if (window.refreshScrollReveal) window.refreshScrollReveal();
      }, 50);
    });
  });
}

/* ----------------------------------------------------------------------------
   14. Render Dynamic Live Projects & Category Filter
   ---------------------------------------------------------------------------- */
function renderProjectsGrid() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = CONFIG.projects
    .map((proj, idx) => {
      const animDir = ["converge-left", "converge-bottom", "converge-right"][idx % 3];
      const delay = `delay-${(idx % 3) + 1}`;
      return `
        <article class="project-card glass-panel tilt-card ${animDir} ${delay}" data-category="${proj.category}">
          <div class="project-thumb-box">
            <span class="project-category-badge">${proj.category}</span>
            <img 
              src="${proj.image}" 
              alt="${proj.title}" 
              class="project-img" 
              loading="lazy"
              onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'500\\' viewBox=\\'0 0 800 500\\'%3E%3Crect fill=\\'%2311172e\\' width=\\'800\\' height=\\'500\\'/ %3E%3Ctext fill=\\'%2300d4ff\\' font-family=\\'sans-serif\\' font-size=\\'28\\' x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\'%3E${encodeURIComponent(proj.title)}%3C/text%3E%3C/svg%3E';"
            >
            <!-- Hover Slide-up Overlay -->
            <div class="project-card-overlay">
              <a href="${proj.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                <span>Visit Live Site</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          <div class="project-card-info">
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${proj.description}</p>
            <div class="project-tags">
              ${proj.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
            </div>
            <div class="project-actions">
              <a href="${proj.url}" target="_blank" rel="noopener noreferrer" class="btn-visit-site" aria-label="Visit ${proj.title}">
                <span>Live Preview</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function initProjectsFilter() {
  const filterBtns = document.querySelectorAll(".proj-filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
      setTimeout(() => {
        if (window.refreshScrollReveal) window.refreshScrollReveal();
      }, 50);
    });
  });
}

function renderAntigravityProjects() {
  const grid = document.getElementById("antigravity-grid");
  if (!grid) return;

  grid.innerHTML = CONFIG.antigravityProjects
    .map((item, idx) => {
      const animDir = ["converge-left", "converge-top", "converge-bottom", "converge-right"][idx % 4];
      const delay = `delay-${(idx % 4) + 1}`;
      return `
      <div class="ag-card glass-panel tilt-card ${animDir} ${delay}">
        <div class="ag-card-icon">${item.icon}</div>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <div class="project-tags">
          ${item.tags.map((t) => `<span class="tag-chip">${t}</span>`).join("")}
        </div>
      </div>
    `;
    })
    .join("");
}

/* ----------------------------------------------------------------------------
   15. GitHub Live Integration (Profile Data, Repos, Error Handling)
   ---------------------------------------------------------------------------- */
async function initGitHubSection() {
  const username = CONFIG.owner.githubUsername;
  const bioEl = document.getElementById("gh-user-bio");
  const followersCountEl = document.getElementById("gh-followers-count");
  const followingCountEl = document.getElementById("gh-following-count");
  const reposGrid = document.getElementById("gh-repos-grid");

  // Fetch User Profile
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (userRes.ok) {
      const userData = await userRes.json();
      if (bioEl && userData.bio) bioEl.textContent = userData.bio;
      if (followersCountEl) followersCountEl.textContent = userData.followers ?? "0";
      if (followingCountEl) followingCountEl.textContent = userData.following ?? "0";
    } else {
      if (followersCountEl) followersCountEl.textContent = "12+";
      if (followingCountEl) followingCountEl.textContent = "18+";
    }
  } catch (err) {
    if (followersCountEl) followersCountEl.textContent = "12+";
    if (followingCountEl) followingCountEl.textContent = "18+";
  }

  // Fetch Public Repositories (sorted by recently updated)
  try {
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
    if (reposRes.ok) {
      const repos = await reposRes.json();
      renderRepos(repos && repos.length > 0 ? repos : CONFIG.fallbackRepos);
    } else {
      // Fallback if rate limited
      renderRepos(CONFIG.fallbackRepos);
    }
  } catch (err) {
    renderRepos(CONFIG.fallbackRepos);
  }

  function renderRepos(repos) {
    if (!reposGrid) return;

    const languageColors = {
      Python: "#3572A5",
      TypeScript: "#3178c6",
      JavaScript: "#f1e05a",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Go: "#00ADD8",
      Shell: "#89e051"
    };

    reposGrid.innerHTML = repos
      .map((repo) => {
        const lang = repo.language || "Web Stack";
        const dotColor = languageColors[lang] || "#7c5cff";
        const dateStr = repo.updated_at ? new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Active";

        return `
          <div class="repo-card glass-panel tilt-card">
            <div class="repo-card-top">
              <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-name-link">
                ${repo.name}
              </a>
              <span class="tag-chip">${lang}</span>
            </div>
            <p class="repo-desc">${repo.description || "Public software repository maintained by Prince Patel."}</p>
            <div class="repo-meta">
              <span class="repo-stat-item">
                <span class="repo-lang-dot" style="background-color: ${dotColor}"></span>
                ${lang}
              </span>
              <span class="repo-stat-item" title="Stars">
                ★ ${repo.stargazers_count ?? 0}
              </span>
              <span class="repo-stat-item" title="Forks">
                ⑂ ${repo.forks_count ?? 0}
              </span>
              <span style="margin-left: auto;">${dateStr}</span>
            </div>
            <div class="repo-card-footer">
              <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-link-btn">
                <span>View Repository &amp; Code</span>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        `;
      })
      .join("");
  }
}

/* ----------------------------------------------------------------------------
   16. Resume Modal Viewer (Interactive PDF Iframe / Object)
   ---------------------------------------------------------------------------- */
function initResumeModal() {
  const modal = document.getElementById("resume-modal");
  const openHeroBtn = document.getElementById("hero-view-resume-btn");
  const openAboutBtn = document.getElementById("about-view-resume-btn");
  const closeBtn = document.getElementById("close-modal-btn");
  const iframe = document.getElementById("pdf-viewer-iframe");

  if (!modal) return;

  const openModal = (e) => {
    if (e) e.preventDefault();
    if (iframe && !iframe.getAttribute("src")) {
      iframe.setAttribute("src", iframe.getAttribute("data-src") || "assets/resume.pdf");
    }
    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = (e) => {
    if (e) e.preventDefault();
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "visible";
    if (iframe) iframe.removeAttribute("src");
  };

  if (openHeroBtn) openHeroBtn.addEventListener("click", openModal);
  if (openAboutBtn) openAboutBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Close on backdrop click outside dialog
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(e);
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-active")) {
      closeModal(e);
    }
  });
}

/* ----------------------------------------------------------------------------
   17. Interactive Contact Form with Validation & Formspree/Mailto Handler
   ---------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const alertBox = document.getElementById("form-alert");
  const submitBtn = document.getElementById("contact-submit-btn");

  if (!form || !alertBox || !submitBtn) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Reset previous errors
    clearErrors();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showError("name-error", "Please provide your name.");
      nameInput.classList.add("is-invalid");
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showError("email-error", "Please enter a valid email address.");
      emailInput.classList.add("is-invalid");
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showError("subject-error", "Please enter a message subject.");
      subjectInput.classList.add("is-invalid");
      isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim().length < 8) {
      showError("message-error", "Please write a message with at least 8 characters.");
      messageInput.classList.add("is-invalid");
      isValid = false;
    }

    if (!isValid) return;

    // Button loading state
    const btnText = submitBtn.querySelector(".btn-text");
    const btnSpinner = submitBtn.querySelector(".btn-spinner");
    const btnArrow = submitBtn.querySelector(".btn-arrow");

    btnText.textContent = "Sending...";
    btnSpinner.style.display = "inline-block";
    btnArrow.style.display = "none";
    submitBtn.disabled = true;

    const endpoint = CONFIG.contactForm.formspreeEndpoint;

    if (endpoint && endpoint.startsWith("https://formspree.io/")) {
      // Send via Formspree API
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim()
          })
        });

        if (response.ok) {
          showAlert("Thank you! Your message was sent successfully. Prince will reply soon.", "success");
          form.reset();
        } else {
          showAlert("Oops! Form submission failed. You can email prinspatel8055@gmail.com directly.", "error");
        }
      } catch (err) {
        showAlert("Network error. Please email directly at prinspatel8055@gmail.com", "error");
      }
    } else {
      // Mailto interactive fallback
      setTimeout(() => {
        const mailtoLink = `mailto:${CONFIG.owner.email}?subject=${encodeURIComponent(
          subjectInput.value.trim()
        )}&body=${encodeURIComponent(
          `Hi Prince,\n\n${messageInput.value.trim()}\n\nFrom:\n${nameInput.value.trim()} (${emailInput.value.trim()})`
        )}`;
        window.location.href = mailtoLink;
        showAlert("Opening your email client to send this message to Prince...", "success");
      }, 500);
    }

    btnText.textContent = "Send Message";
    btnSpinner.style.display = "none";
    btnArrow.style.display = "inline-block";
    submitBtn.disabled = false;
  });

  function showError(elementId, msg) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) errorEl.textContent = msg;
  }

  function clearErrors() {
    document.querySelectorAll(".field-error").forEach((el) => (el.textContent = ""));
    document.querySelectorAll(".form-control").forEach((el) => el.classList.remove("is-invalid"));
    alertBox.style.display = "none";
  }

  function showAlert(msg, type) {
    alertBox.textContent = msg;
    alertBox.className = `form-alert alert-${type}`;
    alertBox.style.display = "block";
  }
}

/* ----------------------------------------------------------------------------
   18. Scroll Reveal & Convergence Animation System (IntersectionObserver)
   ---------------------------------------------------------------------------- */
function initScrollReveal() {
  const selector = [
    ".reveal-fade",
    ".reveal-slide-left",
    ".reveal-slide-right",
    ".anim-converge-group",
    ".section-header",
    ".project-card",
    ".skill-category-card",
    ".timeline-item",
    ".service-card",
    ".ag-card",
    ".gh-stats-card",
    ".github-profile-card",
    ".github-chart-card",
    ".profile-card-3d",
    ".about-left-card",
    ".about-right-content",
    ".contact-info-panel",
    ".contact-form-panel",
    ".hero-content"
  ].join(", ");

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const isMobile = window.innerWidth < 768;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          // Also reveal nested convergence items
          entry.target.querySelectorAll?.(".converge-left, .converge-right, .converge-top, .converge-bottom, .converge-scale, .pop-stagger").forEach((child) => {
            child.classList.add("is-revealed");
          });
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: isMobile ? 0.04 : 0.1,
      rootMargin: isMobile ? "0px 0px -20px 0px" : "0px 0px -35px 0px"
    }
  );

  elements.forEach((el) => {
    // If element is already in viewport on page load (e.g. Hero), reveal smoothly immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(() => {
        el.classList.add("is-revealed");
        el.querySelectorAll?.(".converge-left, .converge-right, .converge-top, .converge-bottom, .converge-scale, .pop-stagger").forEach((child) => {
          child.classList.add("is-revealed");
        });
      }, 60);
    } else {
      observer.observe(el);
    }
  });

  // Re-observe dynamic cards (such as after filtering)
  window.refreshScrollReveal = () => {
    document.querySelectorAll(selector).forEach((el) => {
      if (!el.classList.contains("is-revealed")) {
        observer.observe(el);
      }
    });
  };
}

/* ----------------------------------------------------------------------------
   19. Back to Top Smooth Scroll
   ---------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ----------------------------------------------------------------------------
   20. Footer Auto Copyright Year
   ---------------------------------------------------------------------------- */
function updateCurrentYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
