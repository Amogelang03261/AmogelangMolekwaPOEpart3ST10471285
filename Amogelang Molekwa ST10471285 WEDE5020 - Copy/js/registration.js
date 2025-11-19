// registration.js

document.addEventListener("DOMContentLoaded", () => {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const message = document.getElementById("passwordMessage");

    if (!password || !confirmPassword) return;

    confirmPassword.addEventListener("input", () => {
        if (password.value !== confirmPassword.value) {
            message.textContent = "Passwords do not match";
            message.style.color = "red";
        } else {
            message.textContent = "Passwords match";
            message.style.color = "green";
        }
    });
});
