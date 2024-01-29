document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();  
        
      alert("Form submitted!");
    
      contactForm.reset();
    });
  });
  