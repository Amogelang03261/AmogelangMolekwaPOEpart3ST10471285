// contact.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("contactSuccess");
    const errorMsg = document.getElementById("contactError");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Run validation first
        if (!validateContactForm()) return;

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                form.reset();
                form.style.display = "none";
                successMsg.style.display = "block";
                errorMsg.style.display = "none";
            } else {
                successMsg.style.display = "none";
                errorMsg.style.display = "block";
            }
        } catch (err) {
            successMsg.style.display = "none";
            errorMsg.style.display = "block";
        }
    });
});
