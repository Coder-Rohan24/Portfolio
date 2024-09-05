(function () {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using vanilla JavaScript
    document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach(function (link) {
      link.addEventListener('click', function (event) {
        const locationPath = window.location.pathname.replace(/^\//, '');
        const linkPath = this.pathname.replace(/^\//, '');
        if (locationPath === linkPath && window.location.hostname === this.hostname) {
          let target = document.querySelector(this.hash);
          if (target) {
            event.preventDefault();
            const offsetTop = target.getBoundingClientRect().top + window.scrollY - 54;
  
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    document.querySelectorAll('.js-scroll-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && typeof bootstrap !== 'undefined') {
          bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
      });
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    function activateScrollSpy() {
      const mainNav = document.querySelector('#mainNav');
      const sections = document.querySelectorAll('section[id]');
  
      function scrollSpy() {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
        sections.forEach((section) => {
          if (section.offsetTop - 54 <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            mainNav.querySelectorAll('a').forEach((a) => {
              a.classList.remove('active');
              if (section.getAttribute('id') === a.getAttribute('href').substring(1)) {
                a.classList.add('active');
              }
            });
          }
        });
      }
  
      window.addEventListener('scroll', scrollSpy);
    }
    activateScrollSpy();
  
    // Collapse Navbar
    function navbarCollapse() {
      const mainNav = document.querySelector("#mainNav");
      if (window.scrollY > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    }
  
    // Collapse the navbar when the page is scrolled
    window.addEventListener('scroll', navbarCollapse);
  
    // Run navbar collapse on page load
    navbarCollapse();
  
    // Hide navbar when modals trigger
    document.querySelectorAll('.portfolio-modal').forEach(function (modal) {
      modal.addEventListener('show.bs.modal', function () {
        document.querySelector(".navbar").classList.add("d-none");
      });
      modal.addEventListener('hidden.bs.modal', function () {
        document.querySelector(".navbar").classList.remove("d-none");
      });
    });
  
  })(); // End of use strict
  