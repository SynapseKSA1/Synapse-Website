// ================== عناصر تطفو ==================
const floatItems = document.querySelectorAll('.float-item');
floatItems.forEach((item, index) => {
  const speed = item.getAttribute('data-speed') || 1.5;
  let position = index * 0.2 * Math.PI;

  function floatAnimation() {
    position += speed * 0.02;
    const y = Math.sin(position) * 20;
    const x = Math.cos(position) * 10;
    item.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(floatAnimation);
  }

  floatAnimation();
});

// ================== تأثيرات التسجيل ==================
const registerBtn = document.querySelector('.register-btn');
if (registerBtn) {
  registerBtn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < 20; i++) {
      createParticle(x + rect.left, y + rect.top);
    }
  });
}

function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  document.body.appendChild(particle);

  const destinationX = (Math.random() - 0.5) * 200;
  const destinationY = (Math.random() - 0.5) * 200;
  const rotation = Math.random() * 520;

  particle.style.setProperty('--destX', `${destinationX}px`);
  particle.style.setProperty('--destY', `${destinationY}px`);
  particle.style.setProperty('--rot', `${rotation}deg`);

  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  setTimeout(() => {
    particle.remove();
  }, 1000);
}

// ================== العداد المتحرك ==================
const counters = document.querySelectorAll(".count");
const speed = 200;

function animateCounter(counter) {
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const increment = target / speed;

  function update() {
    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count);
      setTimeout(update, 1);
    } else {
      counter.innerText = target;
    }
  }

  update();
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

// ================== تأثير عناصر ورشة الأطفال ==================
const decorationDots = document.querySelectorAll('.ai-camp-decoration-dot');
decorationDots.forEach((dot, index) => {
  const speed = dot.getAttribute('data-speed');
  let position = index * 0.2 * Math.PI;

  function floatAnimation() {
    position += speed * 0.02;
    const y = Math.sin(position) * 20;
    const x = Math.cos(position) * 10;
    dot.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(floatAnimation);
  }

  floatAnimation();
});

const ctaButton = document.querySelector('.ai-camp-cta');
if (ctaButton) {
  ctaButton.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < 20; i++) {
      createSparkle(x + rect.left, y + rect.top);
    }
  });
}

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.className = 'ai-camp-sparkle';
  document.body.appendChild(sparkle);

  const destinationX = (Math.random() - 0.5) * 200;
  const destinationY = (Math.random() - 0.5) * 200;
  const rotation = Math.random() * 520;

  sparkle.style.setProperty('--destX', `${destinationX}px`);
  sparkle.style.setProperty('--destY', `${destinationY}px`);
  sparkle.style.setProperty('--rot', `${rotation}deg`);

  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}

const observerAi = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.ai-camp-topic').forEach(topic => {
  observerAi.observe(topic);
});

//----------------------------------------------------------------------------------------------




    const cards = document.querySelectorAll('.track-card');
    
    const observerbootcamp = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach((card) => {
        observerbootcamp.observe(card);
    });

