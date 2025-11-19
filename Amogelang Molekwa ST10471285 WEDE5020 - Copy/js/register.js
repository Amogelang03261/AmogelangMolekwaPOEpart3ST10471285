// register.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();

        const user = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            password: form.password.value.trim()
        };

        console.log("User registered:", user);

        alert("Registration successful!");
        form.reset();
    });
});
