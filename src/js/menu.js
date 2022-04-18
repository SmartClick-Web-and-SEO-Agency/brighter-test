document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const menuButton = document.querySelector('[aria-controls=menu]');

  // Hide menu when pressing escape key
  document.addEventListener('keydown', e => {
    if (menuButton.getAttribute('aria-expanded') === 'true' && e.key === 'Escape') {
      menuButton.click();
    }
  });

  // Hide menu when clicking overlay background
  menu.addEventListener('click', e => {
    if (e.target === menu) {
      menuButton.click();
    }
  });
});
