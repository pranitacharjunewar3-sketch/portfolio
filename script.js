const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const toggleText = document.querySelector('.toggle-text');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectGrid = document.querySelector('#projectGrid');
const copyButtons = document.querySelectorAll('[data-copy]');

const modal = document.querySelector('#caseModal');
const modalTitle = document.querySelector('#modalTitle');
const modalProblem = document.querySelector('#modalProblem');
const modalSolution = document.querySelector('#modalSolution');
const modalFeatures = document.querySelector('#modalFeatures');
const modalStack = document.querySelector('#modalStack');
const modalDelivered = document.querySelector('#modalDelivered');
const modalImpact = document.querySelector('#modalImpact');

function showProtectionNotice() {
  const existing = document.querySelector('.protect-toast');
  if (existing) return;
  const toast = document.createElement('div');
  toast.className = 'protect-toast';
  toast.textContent = 'This content has been protected.';
  const custom = document.body.getAttribute('data-protect-message');
  if (custom) {
    toast.textContent = custom;
  }
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 200);
  }, 2200);
}

const projectsData = [
  {
    id: 'marksheet',
    title: 'Student Marksheet Management System',
    category: ['systems'],
    isConfidential: false,
    description: 'Secure web system to manage student records, marksheets, and results with accurate workflows.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    image: 'assets/project-marksheet.png',
    alt: 'Student marksheet management system web app preview',
    links: { demo: '#', github: '#' },
    caseStudy: {
      problem: 'Schools needed a reliable way to store student records, generate results, and reduce errors from manual handling.',
      solution: 'A centralized web system that standardizes workflows, validates inputs, and generates marksheets quickly.',
      features: ['Admin dashboard', 'Student record management', 'Secure data handling', 'Result generation flows'],
      delivered: ['UI screens and core flows', 'Validation logic', 'Results formatting and export-ready data'],
      impact: 'Improved accuracy and speed of result preparation with a clean admin experience.'
    }
  },
  {
    id: 'coupon',
    title: 'Coupon Management System for Cooperative Banks',
    category: ['systems'],
    isConfidential: false,
    description: 'Manage, validate, and track coupons with admin controls and error-safe logic.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    image: 'assets/project-coupon.png',
    alt: 'Coupon management system for cooperative banks dashboard preview',
    links: { demo: '#', github: '#' },
    caseStudy: {
      problem: 'Manual coupon validation created delays and risk in cooperative banking workflows.',
      solution: 'A structured system to create, validate, and track coupons with clear admin controls.',
      features: ['Coupon creation and tracking', 'Validation workflows', 'Admin controls', 'Error-safe logic'],
      delivered: ['Workflow mapping', 'Admin UI and validation states', 'Audit-friendly tracking'],
      impact: 'Reduced manual errors and improved reliability of coupon operations.'
    }
  },
  {
    id: 'logos',
    title: 'Logo Design for IT Companies in Nepal & Local Brands',
    category: ['branding'],
    isConfidential: false,
    description: 'Minimal, professional logo designs for IT companies plus fancy stores, clothing brands, grocery stores, hotels, restaurants, and more.',
    stack: ['Illustrator', 'Wordmark', 'Pictorial Marks', 'Abstract Logo Marks', 'Mascot Logos', 'Combination Marks', 'Emblems'],
    image: 'assets/project-logos.png',
    alt: 'Logo design and branding project preview for IT and local brands',
    links: { demo: '#', github: '' },
    caseStudy: {
      problem: 'Brands across IT and local businesses needed clear, professional identities to build trust fast.',
      solution: 'Delivered clean logo systems and usage guidance aligned to each brand type and audience.',
      features: ['Minimal mark exploration', 'Typography pairing', 'Color system guidance'],
      delivered: ['Logo concepts', 'Final logo assets', 'Usage guidelines'],
      impact: 'Helped brands present a confident, consistent identity across platforms.'
    }
  },
  {
    id: 'news',
    title: 'News Website',
    category: ['web-apps'],
    isConfidential: false,
    description: 'Responsive news site with categories, trending section, and clean reading experience.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    image: 'assets/project-news.png',
    alt: 'News website developer project preview with clean reading layout',
    links: { demo: '#', github: '#' },
    caseStudy: {
      problem: 'Readers needed a fast, structured way to browse headlines and trending stories on any device.',
      solution: 'A responsive layout with clear hierarchy for categories, trending content, and article reading.',
      features: ['Category sections', 'Trending highlights', 'Readable article layouts'],
      delivered: ['Responsive UI', 'Navigation and layout system', 'Reusable card components'],
      impact: 'Improved readability and engagement with a clean, modern news experience.'
    }
  },
  {
    id: 'support',
    title: 'Support Ticket System (Web App)',
    category: ['web-apps', 'systems'],
    isConfidential: false,
    description: 'Ticketing dashboard to create, assign, track status, and resolve support requests efficiently.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    image: 'assets/project-support.png',
    alt: 'Support ticket system web app dashboard preview',
    links: { demo: '#', github: '#' },
    caseStudy: {
      problem: 'Support teams struggled to track issues and ownership across multiple channels.',
      solution: 'A centralized ticketing dashboard with status tracking and assignment workflows.',
      features: ['Ticket creation and assignment', 'Status tracking', 'Priority tagging'],
      delivered: ['Dashboard layout', 'Ticket flow UI', 'Status visibility improvements'],
      impact: 'Simplified support workflows and reduced missed requests.'
    }
  },
  {
    id: 'clinic',
    title: 'Medical Clinic Management System (Confidential)',
    category: ['systems', 'confidential'],
    isConfidential: true,
    description: 'Client project under NDA. Clinic workflow system for appointments, patients, and records. I can share a private walkthrough and architecture overview on request.',
    stack: ['Web App', 'Java', 'SQL'],
    image: 'assets/project-clinic.png',
    alt: 'Medical clinic management system preview (confidential)',
    links: { demo: '', github: '' },
    caseStudy: {
      problem: 'Clinics needed a secure way to manage appointments and patient records without manual errors.',
      solution: 'Built a streamlined workflow system focused on reliability, scheduling, and record access.',
      features: ['Appointments workflow', 'Patient record management', 'Role-based access'],
      delivered: ['End-to-end workflow design', 'UI screens and admin controls', 'Data validation patterns'],
      impact: 'Improved appointment handling and reduced administrative overhead.'
    }
  },
  {
    id: 'food',
    title: 'Food Delivery App + Website (Confidential)',
    category: ['web-apps', 'confidential'],
    isConfidential: true,
    description: 'Client project under NDA. Ordering flow, menus, checkout, and admin management. I can share a private walkthrough and architecture overview on request.',
    stack: ['Web App', 'Java', 'SQL'],
    image: 'assets/project-food.png',
    alt: 'Food delivery app and website preview (confidential)',
    links: { demo: '', github: '' },
    caseStudy: {
      problem: 'The client needed a fast ordering experience with a smooth admin workflow.',
      solution: 'Designed a multi-step ordering system and an admin layer for menu and order tracking.',
      features: ['Menu browsing', 'Checkout flow', 'Admin order management'],
      delivered: ['Customer UI flow', 'Admin dashboard layout', 'Order status UX'],
      impact: 'Streamlined ordering and improved operational visibility.'
    }
  },
  {
    id: 'rideshare',
    title: 'Rideshare App + Website (Confidential)',
    category: ['web-apps', 'confidential'],
    isConfidential: true,
    description: 'Client project under NDA. Booking flow, driver/rider dashboards, and route workflows. I can share a private walkthrough and architecture overview on request.',
    stack: ['Web App', 'Java', 'SQL'],
    image: 'assets/project-rideshare.png',
    alt: 'Rideshare app and website preview (confidential)',
    links: { demo: '', github: '' },
    caseStudy: {
      problem: 'The platform required a smooth booking flow and role-based dashboards for riders and drivers.',
      solution: 'Built clear UX for booking, dashboards, and workflow states without exposing client data.',
      features: ['Booking flow', 'Driver and rider dashboards', 'Route workflow states'],
      delivered: ['Flow mapping', 'Dashboard UI', 'Core interaction logic'],
      impact: 'Clearer workflows and faster task completion for both roles.'
    }
  }
];

const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  root.setAttribute('data-theme', storedTheme);
  themeToggle.setAttribute('aria-pressed', storedTheme === 'dark');
  toggleText.textContent = storedTheme === 'dark' ? 'Dark' : 'Light';
}

function toggleTheme() {
  const current = root.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.setAttribute('aria-pressed', next === 'dark');
  toggleText.textContent = next === 'dark' ? 'Dark' : 'Light';
}

themeToggle?.addEventListener('click', toggleTheme);

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

function renderProjects() {
  if (!projectGrid) return;
  projectGrid.innerHTML = projectsData
    .map((project) => {
      const categories = project.category.join(' ');
      const techBadges = project.stack.map((tag) => `<span>${tag}</span>`).join('');
      const caseButton = `<button class="btn btn-ghost case-btn" data-id="${project.id}">Case Study</button>`;
      const demoButton = project.links.demo
        ? `<button class="btn btn-ghost is-disabled" type="button" disabled data-tooltip="Live Demo is available to authorized personnel only">Live Demo</button>`
        : '';
      const githubButton = project.links.github
        ? `<button class="btn btn-ghost is-disabled" type="button" disabled data-tooltip="GitHub is available to authorized personnel only">GitHub</button>`
        : '';
      const privateButton = project.isConfidential
        ? `<button class="btn btn-ghost is-disabled nda-btn" type="button" data-nda="Don't touch. This is a private NDA project.">Private (NDA)</button>`
        : '';

      return `
        <article class="project card reveal" data-category="${categories}">
          <img src="${project.image}" alt="${project.alt}" loading="lazy" width="640" height="360" />
          <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-badges">${techBadges}</div>
            <div class="project-actions">
              ${caseButton}
              ${project.isConfidential ? privateButton : `${demoButton}${githubButton}`}
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  document.querySelectorAll('.case-btn').forEach((btn) => {
    btn.addEventListener('click', () => openCaseStudy(btn.dataset.id));
  });
}

function setCardVisibility(card, show) {
  if (show) {
    card.style.display = 'block';
    requestAnimationFrame(() => {
      card.classList.remove('is-hidden');
    });
  } else {
    card.classList.add('is-hidden');
    setTimeout(() => {
      if (card.classList.contains('is-hidden')) {
        card.style.display = 'none';
      }
    }, 220);
  }
}

function applyFilter(filter) {
  document.querySelectorAll('.project').forEach((project) => {
    const categories = project.dataset.category.split(' ');
    const matches = filter === 'all' || categories.includes(filter);
    setCardVisibility(project, matches);
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    const filter = btn.dataset.filter;
    applyFilter(filter);
  });
});

function openCaseStudy(id) {
  const project = projectsData.find((item) => item.id === id);
  if (!project || !modal) return;

  modalTitle.textContent = project.title;
  modalProblem.textContent = project.caseStudy.problem;
  modalSolution.textContent = project.caseStudy.solution;
  modalFeatures.innerHTML = project.caseStudy.features.map((item) => `<li>${item}</li>`).join('');
  modalDelivered.innerHTML = project.caseStudy.delivered.map((item) => `<li>${item}</li>`).join('');
  modalStack.innerHTML = project.stack.map((tag) => `<span>${tag}</span>`).join('');
  modalImpact.textContent = project.caseStudy.impact;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudy() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modal?.addEventListener('click', (event) => {
  if (event.target.matches('[data-close]')) {
    closeCaseStudy();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeCaseStudy();
  }
});

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  showProtectionNotice();
});

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  const isF12 = event.key === 'F12';
  const isCtrlShiftI = event.ctrlKey && event.shiftKey && key === 'i';
  const isCtrlShiftJ = event.ctrlKey && event.shiftKey && key === 'j';
  const isCtrlShiftC = event.ctrlKey && event.shiftKey && key === 'c';
  if (isF12 || isCtrlShiftI || isCtrlShiftJ || isCtrlShiftC) {
    event.preventDefault();
    showProtectionNotice();
  }
});

document.addEventListener('copy', (event) => {
  event.preventDefault();
  showProtectionNotice();
});

document.addEventListener('selectstart', (event) => {
  event.preventDefault();
  showProtectionNotice();
});

document.addEventListener('click', (event) => {
  const ndaBtn = event.target.closest('.nda-btn');
  if (ndaBtn) {
    document.body.setAttribute('data-protect-message', ndaBtn.dataset.nda || "Don't touch. This is a private NDA project.");
    showProtectionNotice();
    setTimeout(() => document.body.removeAttribute('data-protect-message'), 50);
  }
});

renderProjects();
applyFilter('all');

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

copyButtons.forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied! Paste on Upwork';
      setTimeout(() => {
        btn.textContent = 'Copy My Upwork Intro';
      }, 2000);
    } catch (error) {
      btn.textContent = 'Copy failed';
      setTimeout(() => {
        btn.textContent = 'Copy My Upwork Intro';
      }, 2000);
    }
  });
});
