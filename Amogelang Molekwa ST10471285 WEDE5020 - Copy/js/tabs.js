// tabs.js

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("[data-tab]");
    const panels = document.querySelectorAll(".tab-panel");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.getElementById(tab.dataset.tab);

            // Remove active states
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            // Activate selected tab + panel
            tab.classList.add("active");
            target.classList.add("active");
        });
    });
});
