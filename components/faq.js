class PlaimanasFaq extends HTMLElement {
  connectedCallback() {
    const tabs = this.querySelectorAll('.tab');
    const panels = this.querySelectorAll('[data-panel]');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('tab--active'));
        tab.classList.add('tab--active');

        const target = tab.dataset.tab;
        panels.forEach((panel) => {
          panel.hidden = panel.dataset.panel !== target;
        });
      });
    });
  }
}
customElements.define('plaimanas-faq', PlaimanasFaq);
