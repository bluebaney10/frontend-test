document.addEventListener("DOMContentLoaded", () => {
  const faq = document.querySelector(".faq");
  const tabs = faq.querySelectorAll(".tab");
  const panels = faq.querySelectorAll("[data-panel]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("tab--active"));
      tab.classList.add("tab--active");

      const target = tab.dataset.tab;
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.panel !== target;
      });
    });
  });
});
