// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", currentTheme);
updateThemeIcon(currentTheme);

// Update navbar background on page load
window.addEventListener('load', () => {
  updateNavbarBackground(currentTheme);
});

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
  updateNavbarBackground(newTheme);
});

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector(".theme-icon");
  icon.textContent = theme === "dark" ? "☀️" : "🌙";
}

function updateNavbarBackground(theme) {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const isScrolled = window.scrollY > 50;
    navbar.style.background =
      theme === "dark"
        ? isScrolled ? "rgba(26, 18, 20, 0.98)" : "rgba(26, 18, 20, 0.95)"
        : isScrolled ? "rgba(245, 241, 232, 0.98)" : "rgba(245, 241, 232, 0.95)";
  }
}

// Mobile Navigation
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Active Navigation Link
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function updateActiveLink() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// Navbar Background on Scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background =
      html.getAttribute("data-theme") === "dark"
        ? "rgba(26, 18, 20, 0.98)"
        : "rgba(245, 241, 232, 0.98)";
  } else {
    navbar.style.background =
      html.getAttribute("data-theme") === "dark"
        ? "rgba(26, 18, 20, 0.95)"
        : "rgba(245, 241, 232, 0.95)";
  }
});

// Typing Animation
const typingText = document.getElementById("typing-text");
const phrases = [
  "Backend Developer",
  "Node.js Expert",
  "Cloud Architect",
  "API Developer",
  "Microservices Engineer",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeAnimation, 500);
      return;
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeAnimation, 2000);
      return;
    }
  }

  setTimeout(typeAnimation, isDeleting ? 50 : 100);
}

// Start typing animation
typeAnimation();

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Enhanced Intersection Observer for Smooth Section Reveals
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
      // Animate child elements with stagger
      const children = entry.target.querySelectorAll('.skill-category, .project-card, .timeline-item, .blog-card, .highlight');
      children.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('element-visible');
        }, index * 100);
      });
    }
  });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll("section").forEach((section) => {
  section.classList.add('section-hidden');
  observer.observe(section);
});

// Enhanced Skill Progress Animation with Loading Effect
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".skill-progress");
      progressBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-width') || bar.style.width;
        bar.style.width = "0%";
        
        // Stagger the animation for each skill bar
        setTimeout(() => {
          bar.style.width = targetWidth;
          
          // Add a pulse effect when animation completes
          setTimeout(() => {
            bar.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
              bar.style.animation = '';
            }, 500);
          }, 1000);
        }, index * 150);
      });
      
      // Only animate once
      skillObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".skill-category").forEach((category) => {
  // Store original widths
  category.querySelectorAll(".skill-progress").forEach((bar) => {
    const width = bar.style.width;
    bar.setAttribute('data-width', width);
  });
  skillObserver.observe(category);
});



// Parallax Effect for Hero Section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  const heroHeight = hero.offsetHeight;

  if (scrolled < heroHeight) {
    const parallaxRate = scrolled * 0.5;
    hero.style.transform = `translateY(${parallaxRate}px)`;
  }
});

// Easter Egg - Konami Code
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up, Up, Down, Down, Left, Right, Left, Right, B, A
let konamiIndex = 0;

document.addEventListener("keydown", (e) => {
  if (e.keyCode === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      activateEasterEgg();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activateEasterEgg() {
  // Add some fun effects
  document.body.style.animation = "rainbow 2s ease-in-out";

  // Add rainbow animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            25% { filter: hue-rotate(90deg); }
            50% { filter: hue-rotate(180deg); }
            75% { filter: hue-rotate(270deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
  document.head.appendChild(style);

  setTimeout(() => {
    document.body.style.animation = "";
    document.head.removeChild(style);
  }, 2000);
}

// Performance Monitoring
window.addEventListener("load", () => {
  // Lazy load images if any
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
});

// Accessibility Improvements
document.addEventListener("keydown", (e) => {
  // Skip to main content with Alt+S
  if (e.altKey && e.key === "s") {
    e.preventDefault();
    document.getElementById("home").focus();
  }
});

// Add focus indicators for keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("keyboard-nav");
  }
});

document.addEventListener("mousedown", () => {
  document.body.classList.remove("keyboard-nav");
});

// Add focus styles for keyboard navigation
const focusStyles = `
    .keyboard-nav *:focus {
        outline: 2px solid var(--accent-primary);
        outline-offset: 2px;
    }
`;

const focusStyleSheet = document.createElement("style");
focusStyleSheet.textContent = focusStyles;
document.head.appendChild(focusStyleSheet);

// Add ripple effect to buttons
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.classList.add('ripple-effect');

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Add smooth hover effects to cards
function addCardHoverEffects() {
  const cards = document.querySelectorAll('.skill-category, .project-card, .blog-card, .timeline-content');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Reduced tilt effect - divided by 80 instead of 20 for subtler movement
      const rotateX = (y - centerY) / 80;
      const rotateY = (centerX - x) / 80;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set initial theme based on system preference if no saved preference
  if (!localStorage.getItem("theme")) {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = prefersDark ? "dark" : "light";
    html.setAttribute("data-theme", theme);
    updateThemeIcon(theme);
  }

  // Update active nav link on page load
  updateActiveLink();

  // Add animation delay to elements
  const animatedElements = document.querySelectorAll(
    ".skill-category, .project-card, .timeline-item"
  );
  animatedElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
  });

  // Add ripple effect to all buttons
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', createRipple);
  });

  // Add card hover effects
  addCardHoverEffects();
});
