// lightbox.js

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".lightbox-img");

    const modal = document.createElement("div");
    modal.className = "lightbox-modal";
    modal.innerHTML = `<span class="close">&times;</span><img class="lightbox-content">`;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector(".lightbox-content");
    const closeBtn = modal.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => modal.style.display = "none");
});
