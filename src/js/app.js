import './menu';

document.addEventListener('DOMContentLoaded', () => {

  /**
   * Initialize aria visibility toggles.
   *
   * Usage:
   *    <button aria-expanded="false" aria-controls="myDropdown">Toggle</button>
   *    <div id="myDropdown" aria-hidden="true">Dropdown</div>
   */
  document.querySelectorAll('[aria-controls]').forEach(el => {
    el.addEventListener('click', e => {
      const id = el.getAttribute('aria-controls');
      const controlled = document.getElementById(id);
      const open = controlled.getAttribute('aria-hidden') !== 'false';

      controlled.setAttribute('aria-hidden', open ? 'false' : 'true');

      document.querySelectorAll(`[aria-controls="${id}"]`).forEach(el => {
        el.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      e.preventDefault();
    });
  });

});
