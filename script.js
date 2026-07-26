const experienceData = [
  {
    company: 'ASELSAN',
    role: 'Software Engineer in Test',
    location: 'Ankara, Türkiye',
    duration: 'November 2024 – Present',
    achievements: [
      'Designed and automated more than 1300 functional test cases.',
      'Reduced manual testing effort by 55%.',
      'Built an internal Test Management Web Application with reporting and analytics.',
      'Developed and integrated a Langflow + RAG powered AI assistant into the testing platform.',
      'Developed a configurable multi-user WebSocket load testing tool.',
      'Built a Kubernetes log monitoring tool for automated test execution.',
      'Developed a Service Simulator for distributed systems integration testing.',
      'Performed functional, API, integration, and mobile application testing in containerized microservices environments.'
    ]
  },
  {
    company: 'HEY Technology',
    role: 'Machine Learning Intern',
    location: 'ODTÜ Teknokent, Ankara, Türkiye',
    duration: 'June 2023 – July 2023',
    achievements: [
      'Explored machine learning workflows and practical AI integration concepts.',
      'Gained experience in research-oriented product development and modern software thinking.'
    ]
  },
  {
    company: 'KONNEKA',
    role: 'Software Engineer Intern',
    location: 'Bilkent Cyberpark, Ankara, Türkiye',
    duration: 'August 2022 – September 2022',
    achievements: [
      'Contributed to software engineering tasks in a fast-paced product environment.',
      'Strengthened understanding of real-world development and testing workflows.'
    ]
  }
];

const skillCategories = [
  {
    title: 'AI & Smart Testing',
    items: ['RAG Architecture', 'Langflow', 'LLM Integration', 'Text-to-SQL Automation', 'AI Driven QA', 'Prompt Engineering']
  },
  {
    title: 'Automation & Testing',
    items: ['Selenium', 'TestNG', 'Postman', 'API Testing', 'Functional Testing', 'Regression Testing', 'Test Planning', 'Test Execution', 'Test Case Design']
  },
  {
    title: 'Programming',
    items: ['Java', 'Python', 'C#', '.NET', 'JavaScript']
  },
  {
    title: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'Azure DevOps']
  },
  {
    title: 'Databases',
    items: ['SQL', 'PostgreSQL', 'Oracle Database']
  },
  {
    title: 'Tools',
    items: ['Jira', 'Confluence']
  }
];

const achievementData = [
  'Investment offer under the TÜBİTAK BİGG Program',
  'First Place in "İlk Yatırımım" Entrepreneurship Competition',
  '2020 High Honour Student at Bilkent University'
];

const certificationData = [
  { title: 'ISTQB Certified Tester – Foundation Level', description: '' },
  { title: 'IELTS Academic: 7.5/9', description: '' },
  { title: 'Object Oriented Design and Design Patterns', description: '' }
];

const educationData = [
  {
    school: 'Bilkent University',
    degree: 'Bachelor of Science in Computer Science',
    period: '2019 – 2024',
    location: 'Ankara, Türkiye'
  }
];

const languageData = [
  { name: 'Turkish', level: 'Native', value: 100 },
  { name: 'English', level: 'Highly Proficient', value: 90 },
  { name: 'German', level: 'Beginner', value: 35 }
];

const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const sections = Array.from(document.querySelectorAll('main section[id]'));
const header = document.querySelector('.site-header');
const progressBar = document.querySelector('.scroll-progress');
const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.type = 'button';
backToTop.innerHTML = '↑';
backToTop.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTop);

function renderExperience() {
  const container = document.getElementById('experience-list');
  container.innerHTML = experienceData.map(item => `
    <article class="timeline-item reveal">
      <div class="timeline-item__header">
        <div>
          <h3>${item.company}</h3>
          <p>${item.role}</p>
        </div>
        <div class="timeline-item__meta">
          <p>${item.location}</p>
          <p>${item.duration}</p>
        </div>
      </div>
      <ul>
        ${item.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-grid');
  container.innerHTML = skillCategories.map(category => `
    <article class="skill-card reveal">
      <h3>${category.title}</h3>
      <ul>
        ${category.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}

function renderCards(containerId, data, renderer) {
  const container = document.getElementById(containerId);
  container.innerHTML = data.map(renderer).join('');
}

function renderAchievements() {
  renderCards('achievements-grid', achievementData, achievement => `
    <article class="achievement-card reveal">
      <h3>${achievement}</h3>
    </article>
  `);
}

function renderCertifications() {
  renderCards('certifications-grid', certificationData, cert => `
    <article class="cert-card reveal">
      <h3>${cert.title}</h3>
    </article>
  `);
}

function renderEducation() {
  const container = document.getElementById('education-list');
  container.innerHTML = educationData.map(item => `
    <article class="education-item reveal">
      <h3>${item.school}</h3>
      <p>${item.degree}</p>
      <p class="project-card__meta">${item.period} • ${item.location}</p>
    </article>
  `).join('');
}

function renderLanguages() {
  const container = document.getElementById('languages-grid');
  container.innerHTML = languageData.map(language => `
    <article class="language-card reveal">
      <h3>${language.name}</h3>
      <p>${language.level}</p>
      <div class="language-progress" aria-label="${language.name} proficiency">
        <span style="width: ${language.value}%"></span>
      </div>
    </article>
  `).join('');
}

function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
    document.body.classList.add('light');
  }
  const button = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-toggle__icon');
  if (button && icon) {
    button.addEventListener('click', () => {
      document.body.classList.toggle('light');
      const isLight = document.body.classList.contains('light');
      localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
      icon.textContent = isLight ? '☾' : '☀';
    });
    icon.textContent = document.body.classList.contains('light') ? '☾' : '☀';
  }
}

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

function setActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        const target = link.getAttribute('href').slice(1);
        link.classList.toggle('active', target === section.id);
      });
    }
  });
}

function initReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealElements.forEach(element => observer.observe(element));
}

function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.target);
      let current = 0;
      const duration = 1200;
      const stepTime = 16;
      const increment = target / (duration / stepTime);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          entry.target.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          entry.target.textContent = Math.floor(current).toLocaleString();
        }
      }, stepTime);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.7 });

  counters.forEach(counter => observer.observe(counter));
}

function initScrollProgress() {
  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.transform = `scaleX(${percent / 100})`;
    backToTop.classList.toggle('is-visible', scrollTop > 500);
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function initBackToTop() {
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initCursorGlow() {
  const glow = document.querySelector('.cursor-glow');
  window.addEventListener('pointermove', (event) => {
    glow.animate({
      left: `${event.clientX}px`,
      top: `${event.clientY}px`
    }, { duration: 400, fill: 'forwards' });
  });
}

function initButtons() {
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (event) => {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const rect = button.getBoundingClientRect();
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || 'there';
    const email = formData.get('email')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';
    window.location.href = `mailto:ilkerozgen152@gmail.com?subject=Portfolio%20contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    form.reset();
  });
}

function init() {
  renderExperience();
  renderSkills();
  renderAchievements();
  renderCertifications();
  renderEducation();
  renderLanguages();
  initTheme();
  initNav();
  setActiveNav();
  initReveal();
  animateCounters();
  initScrollProgress();
  initBackToTop();
  initCursorGlow();
  initButtons();
  initContactForm();
  document.getElementById('year').textContent = new Date().getFullYear();

  window.addEventListener('scroll', setActiveNav, { passive: true });
  window.addEventListener('resize', setActiveNav);

  const loader = document.querySelector('.loader');
  window.setTimeout(() => loader.classList.add('is-hidden'), 800);
}

document.addEventListener('DOMContentLoaded', init);
