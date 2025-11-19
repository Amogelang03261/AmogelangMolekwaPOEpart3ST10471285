document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("enquireForm");
    const successDiv = document.getElementById("formSuccess");
  
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
  
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
          successDiv.style.display = "block";
        } else {
          alert("❌ Something went wrong submitting your form.");
        }
      } catch (error) {
        alert("⚠️ Network error. Please try again later.");
      }
    });
  
  });
  