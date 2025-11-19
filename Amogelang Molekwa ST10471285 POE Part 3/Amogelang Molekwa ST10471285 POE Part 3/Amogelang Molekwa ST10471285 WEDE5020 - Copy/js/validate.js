document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("enquiryForm");
    const feedback = document.getElementById("enq-feedback");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("enq-name").value.trim();
      const email = document.getElementById("enq-email").value.trim();
      const message = document.getElementById("enq-message").value.trim();
  
      // Simple validation
      if (name.length < 3) {
        return showFeedback("Name must be at least 3 characters.", false);
      }
  
      if (!validateEmail(email)) {
        return showFeedback("Please enter a valid email address.", false);
      }
  
      if (message.length < 10) {
        return showFeedback("Message must be at least 10 characters long.", false);
      }
  
      showFeedback("Enquiry submitted successfully! We will get back to you.", true);
  
      form.reset();
    });
  
    function showFeedback(msg, success) {
      feedback.textContent = msg;
      feedback.style.color = success ? "green" : "red";
    }
  
    function validateEmail(mail) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
  });
  