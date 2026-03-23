// ===== PORTFOLIO INTERACTIVE FEATURES =====

// Typing animation for hero section
const typingTexts = [
  'AI/ML Engineer',
  'Gen AI Developer',
  'Multi-Agent Architect',
  'Full-Stack Developer'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeText() {
  const typedTextElement = document.querySelector('.typed-text');

  if (!typedTextElement) return;

  const currentText = typingTexts[textIndex];

  if (isDeleting) {
    typedTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 50;
  } else {
    typedTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingDelay = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
  }

  setTimeout(typeText, typingDelay);
}

// Mobile navigation toggle
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on nav links
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe cards, projects, and skill items
  const animatedElements = document.querySelectorAll('.card, .project-card, .skill-card, .achievement-card, .contact-card, .experience-card');
  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

// Crazy scroll animation for hero name (CENTER → LEFT)
function initHeroNameAnimation() {
  const heroName = document.querySelector('.name');

  if (heroName) {
    let ticking = false;

    // Ensure initial state is visible and centered
    heroName.style.transform = 'translateX(0) scale(1) rotate(0deg)';
    heroName.style.opacity = '1';

    function updateNameAnimation() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / 500, 1); // Normalize 0-500px scroll to 0-1

      // Animation: Center → Left
      // As you scroll down (progress 0 → 1), move left and go crazy

      if (scrollY > 10) {
        const translateX = -(scrollProgress * 250); // Move left up to -250px
        const rotate = -(scrollProgress * 10); // Rotate slightly -10deg
        const scale = 1 - (scrollProgress * 0.3); // Scale down to 0.7
        const blur = scrollProgress * 3; // Blur up to 3px
        const opacity = 1 - (scrollProgress * 0.5); // Fade to 0.5

        // Crazy pulse effect when scrolling fast or deep
        const pulse = Math.sin(scrollY * 0.1) * (scrollProgress * 10);

        heroName.style.transform = `translateX(${translateX}px) scale(${scale}) rotate(${rotate}deg) translateY(${pulse}px)`;
        heroName.style.filter = `blur(${blur}px)`;
        heroName.style.opacity = opacity;
      } else {
        // Reset to center when at top
        heroName.style.transform = 'translateX(0) scale(1) rotate(0deg)';
        heroName.style.filter = 'blur(0)';
        heroName.style.opacity = '1';
      }

      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        window.requestAnimationFrame(updateNameAnimation);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick);
    // Force initial update to ensure visibility
    updateNameAnimation();
  }
}

// Contact form handling with EmailJS
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject')?.value || '',
        message: document.getElementById('message').value
      };

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      try {
        // Send email using EmailJS
        const response = await emailjs.send(
          'service_portfolio', // Service ID
          'template_contact',  // Template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'ishanp141@gmail.com'
          }
        );

        // Success message
        if (formStatus) {
          formStatus.className = 'form-status success';
          formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
        }

        // Reset form
        contactForm.reset();

        console.log('Email sent successfully:', response);
      } catch (error) {
        // Error message
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.textContent = '✗ Failed to send message. Please email me directly at ishanp141@gmail.com';
        }
        console.error('Email sending failed:', error);
      } finally {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        // Hide status after 5 seconds
        setTimeout(() => {
          if (formStatus) {
            formStatus.className = 'form-status';
          }
        }, 5000);
      }
    });
  }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Add hover effect to skill cards
function initSkillCards() {
  const skillCards = document.querySelectorAll('.skill-card');

  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Particle background effect (optional enhancement)
function createParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 5 + 2}px;
      height: ${Math.random() * 5 + 2}px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 10 + 15}s infinite ease-in-out;
      animation-delay: ${Math.random() * 5}s;
    `;
    hero.appendChild(particle);
  }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Portfolio loaded successfully!');

  // Initialize features
  typeText();
  initMobileNav();
  initScrollAnimations();
  initNavbarScroll();
  initHeroNameAnimation(); // Crazy scroll animation for name
  initContactForm();
  initSmoothScroll();
  initSkillCards();

  // Optional: Uncomment to add particle effect
  // createParticles();

  // Log page views (for analytics)
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  console.log(`📄 Current page: ${currentPage}`);
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';

  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Console easter egg
console.log('%c👋 Hey there!', 'color: #2563eb; font-size: 24px; font-weight: bold;');
console.log('%cLooking at the console? I like your style! 🚀', 'color: #8b5cf6; font-size: 14px;');
console.log('%cFeel free to reach out: ishanp141@gmail.com', 'color: #10b981; font-size: 12px;');
