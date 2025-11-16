// Portfolio JavaScript - Vanilla Implementation
// Projects data is loaded from projects-config.js

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initThemeToggle();
  initIntersectionObserver();
  initHeroCanvas();
  initSmoothScrolling();
  initProjects(); // Add projects initialization
  initTypingEffect(); // Add typing effect initialization
});

// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = themeToggle.querySelector('.sun-icon');
  const moonIcon = themeToggle.querySelector('.moon-icon');

  // Check system preference or localStorage
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldBeDark = stored === 'dark' || (!stored && prefersDark);

  if (shouldBeDark) {
    document.documentElement.classList.add('dark');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }

  themeToggle.addEventListener('click', function() {
    const isDark = document.documentElement.classList.contains('dark');
    const newDark = !isDark;

    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  });
}

// Intersection Observer for Reveal Animations
function initIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a slight delay for projects to create a staggered effect
        if (entry.target.classList.contains('project')) {
          setTimeout(() => {
            entry.target.classList.add('reveal-visible');
          }, index * 100);
        } else {
          entry.target.classList.add('reveal-visible');
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with the 'reveal' class
  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
}

// Projects-specific intersection observer
function initProjectsObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a slight delay for projects to create a staggered effect
        setTimeout(() => {
          entry.target.classList.add('reveal-visible');
        }, index * 100);
        projectObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all project elements
  document.querySelectorAll('.project').forEach((el) => {
    projectObserver.observe(el);
  });
}

// Hero Canvas Particle System
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Set canvas size
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);

  // Particle system
  const particles = [];
  const particleCount = 30;

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.3 + 0.1,
    });
  }

  // Get color based on theme
  function getParticleColor() {
    const isDark = document.documentElement.classList.contains('dark');
    return isDark ? 'rgba(255, 255, 255,' : 'rgba(0, 0, 0,';
  }

  // Animation loop
  let animationId;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const color = getParticleColor();

    particles.forEach((particle) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `${color}${particle.opacity})`;
      ctx.fill();

      // Draw connections
      particles.forEach((other) => {
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          const lineOpacity = (1 - distance / 150) * 0.15;
          ctx.strokeStyle = `${color}${lineOpacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    animationId = requestAnimationFrame(animate);
  }

  animate();

  // Cleanup
  return () => {
    window.removeEventListener('resize', setCanvasSize);
    cancelAnimationFrame(animationId);
  };
}

// Smooth Scrolling Navigation
function initSmoothScrolling() {
  // Handle navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Handle logo click to scroll to top
  document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Projects Initialization
function initProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) {
    console.error('Projects grid not found');
    return;
  }

  // Check if projectsData exists
  if (typeof projectsData === 'undefined' || !projectsData || projectsData.length === 0) {
    console.error('Projects data not found or empty');
    return;
  }

  console.log('Initializing projects with', projectsData.length, 'projects');

  // Clear existing content
  projectsGrid.innerHTML = '';

  // Generate projects HTML
  projectsData.forEach((project, index) => {
    const projectElement = createProjectElement(project, index);
    projectsGrid.appendChild(projectElement);
  });

  console.log('Projects created, initializing observer');

  // Re-initialize intersection observer for new projects
  initProjectsObserver();
}

// Create individual project element
function createProjectElement(project, index) {
  const article = document.createElement('article');
  const slideDirection = index % 2 === 0 ? 'slide-left' : 'slide-right';
  article.className = `project reveal ${slideDirection}${project.reverse ? ' project-reverse' : ''}`;

  const imageDiv = document.createElement('div');
  imageDiv.className = 'project-image';

  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.imageAlt;
  imageDiv.appendChild(img);

  const contentDiv = document.createElement('div');
  contentDiv.className = 'project-content';

  const title = document.createElement('h3');
  title.className = 'project-title';
  title.textContent = project.title;
  contentDiv.appendChild(title);

  const description = document.createElement('p');
  description.className = 'project-description';
  description.textContent = project.description;
  contentDiv.appendChild(description);

  const tagsDiv = document.createElement('div');
  tagsDiv.className = 'project-tags';

  project.tags.forEach(tag => {
    const tagSpan = document.createElement('span');
    tagSpan.className = 'tag';
    tagSpan.textContent = tag;
    tagsDiv.appendChild(tagSpan);
  });

  contentDiv.appendChild(tagsDiv);

  const linksDiv = document.createElement('div');
  linksDiv.className = 'project-links';

  // Visit link (if exists)
  if (project.links.visit) {
    const visitLink = createProjectLink('Visit', project.links.visit, 'external');
    linksDiv.appendChild(visitLink);
  }

  // Code link (if exists)
  if (project.links.code) {
    const codeLink = createProjectLink('Code', project.links.code, 'github');
    linksDiv.appendChild(codeLink);
  }

  contentDiv.appendChild(linksDiv);

  article.appendChild(imageDiv);
  article.appendChild(contentDiv);

  return article;
}

// Create project link element
function createProjectLink(text, url, type) {
  const link = document.createElement('a');
  link.href = url;
  link.className = 'project-link';

  if (type === 'external') {
    link.innerHTML = `${text} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15,3 21,3 21,9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
  } else if (type === 'github') {
    link.innerHTML = `${text} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;
  }

  return link;
}

// Typing Effect Initialization
function initTypingEffect() {
  const typingText = document.getElementById('typing-text');
  if (!typingText) return;

  const text = "Software Engineer";
  let index = 0;
  let isDeleting = false;
  let typingSpeed = 120; // milliseconds per character

  function typeWriter() {
    if (!isDeleting) {
      // Typing phase
      typingText.textContent = text.substring(0, index + 1);
      index++;

      if (index === text.length) {
        // Finished typing, start deleting after a pause
        isDeleting = true;
        setTimeout(typeWriter, 2500); // Pause before deleting
        return;
      }
    } else {
      // Deleting phase
      typingText.textContent = text.substring(0, index - 1);
      index--;

      if (index === 0) {
        // Finished deleting, start typing again after a pause
        isDeleting = false;
        setTimeout(typeWriter, 800); // Pause before typing again
        return;
      }
    }

    // Continue the animation - delete faster than type
    const nextSpeed = isDeleting ? typingSpeed / 3 : typingSpeed;
    setTimeout(typeWriter, nextSpeed);
  }

  // Start the typing effect after the hero content reveals
  const heroContent = document.querySelector('.hero-content');
  if (heroContent && heroContent.classList.contains('reveal-visible')) {
    setTimeout(typeWriter, 500);
  } else {
    // Wait for reveal animation to complete
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(typeWriter, 500);
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(heroContent);
  }
}

// Utility functions for responsive behavior
function handleResize() {
  // Update canvas size if needed
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

window.addEventListener('resize', handleResize);

// Performance optimization: Debounce resize events
let resizeTimeout;
function debounceResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleResize, 100);
}

window.addEventListener('resize', debounceResize);
