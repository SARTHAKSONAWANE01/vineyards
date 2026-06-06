(function() {
  const currentYearEl = document.getElementById('year');
  if (currentYearEl) {
    currentYearEl.textContent = String(new Date().getFullYear());
  }

  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-cubic',
      offset: 60
    });
  }

  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href') || '';
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', targetId);
      }
    });
  });
})();