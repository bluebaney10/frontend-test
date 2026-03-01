class PlaimanasHeader extends HTMLElement {
  connectedCallback() {
    const hamburger = this.querySelector('.hamburger');
    const mobileMenu = this.querySelector('.mobile-menu');
    const overlay = this.querySelector('.overlay');
    const dropdownToggle = this.querySelector('.mobile-menu__dropdown-toggle');
    const dropdownSub = this.querySelector('.mobile-menu__sub');

    if (!hamburger || !mobileMenu) return;

    const closeMenu = () => {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-active');
    };

    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      hamburger.classList.toggle('is-active', isOpen);
    });

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
      }
    });

    if (dropdownToggle && dropdownSub) {
      dropdownToggle.addEventListener('click', () => {
        dropdownToggle.classList.toggle('is-active');
        dropdownSub.classList.toggle('is-open');
      });
    }
  }
}
customElements.define('plaimanas-header', PlaimanasHeader);
