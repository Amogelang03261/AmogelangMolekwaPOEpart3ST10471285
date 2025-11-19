// modals.js

document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll("[data-modal-open]");
    const closeButtons = document.querySelectorAll("[data-modal-close]");

    openButtons.forEach(btn => {
        const modal = document.getElementById(btn.dataset.modalOpen);
        btn.addEventListener("click", () => modal.classList.add("show"));
    });

    closeButtons.forEach(btn => {
        const modal = btn.closest(".modal");
        btn.addEventListener("click", () => modal.classList.remove("show"));
    });
});
