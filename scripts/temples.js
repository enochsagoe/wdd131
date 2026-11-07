document.addEventListener('DOMContentLoaded', () => {
  // Footer: copyright year and last modified date
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('modified').textContent = document.lastModified;

  // Hamburger menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    toggle.innerHTML = isOpen ? '&#10005;' : '&#9776;'; // X when open, hamburger when closed
  });
});