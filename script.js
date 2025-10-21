/* ===================================
   GLOBAL SCRIPTS
   =================================== */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // ===================================
  // NAVIGATION - Keyboard Enhancement
  // ===================================
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        link.click();
      }
    });
  });

  // ===================================
  // PROFILE PAGE - Time Display
  // ===================================
  const timeElement = document.getElementById("currentTime");

  if (timeElement) {
    // Update current time
    function updateTime() {
      timeElement.textContent = Date.now();
    }

    // Initial time update
    updateTime();

    // Update time every second
    setInterval(updateTime, 1000);
  }

  // ===================================
  // PROFILE PAGE - Social Links Keyboard
  // ===================================
  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach((link) => {
    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        link.click();
      }
    });
  });

  // ===================================
  // CONTACT PAGE - Form Validation
  // ===================================
  const form = document.getElementById("contactForm");

  if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const successMessage = document.getElementById("successMessage");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate individual field
    function validateField(input, errorElement, validationFn) {
      const isValid = validationFn(input.value);

      if (!isValid) {
        input.classList.add("error");
        errorElement.classList.add("show");
        return false;
      } else {
        input.classList.remove("error");
        errorElement.classList.remove("show");
        return true;
      }
    }

    // Validation functions
    function validateName(value) {
      return value.trim().length > 0;
    }

    function validateEmail(value) {
      return emailRegex.test(value.trim());
    }

    function validateSubject(value) {
      return value.trim().length > 0;
    }

    function validateMessage(value) {
      return value.trim().length >= 10;
    }

    // Real-time validation on blur
    nameInput.addEventListener("blur", () => {
      validateField(nameInput, nameError, validateName);
    });

    emailInput.addEventListener("blur", () => {
      validateField(emailInput, emailError, validateEmail);
    });

    subjectInput.addEventListener("blur", () => {
      validateField(subjectInput, subjectError, validateSubject);
    });

    messageInput.addEventListener("blur", () => {
      validateField(messageInput, messageError, validateMessage);
    });

    // Clear error on input
    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      input.addEventListener("input", () => {
        if (input.classList.contains("error")) {
          input.classList.remove("error");
          const errorId = input.getAttribute("aria-describedby");
          const errorElement = document.getElementById(errorId);
          errorElement.classList.remove("show");
        }
      });
    });

    // Form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Hide success message
      successMessage.classList.remove("show");

      // Validate all fields
      const isNameValid = validateField(nameInput, nameError, validateName);
      const isEmailValid = validateField(emailInput, emailError, validateEmail);
      const isSubjectValid = validateField(
        subjectInput,
        subjectError,
        validateSubject
      );
      const isMessageValid = validateField(
        messageInput,
        messageError,
        validateMessage
      );

      // If all valid, show success message
      if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        successMessage.classList.add("show");
        form.reset();

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });

        // Hide success message after 5 seconds
        setTimeout(() => {
          successMessage.classList.remove("show");
        }, 5000);
      } else {
        // Focus on first invalid field
        if (!isNameValid) nameInput.focus();
        else if (!isEmailValid) emailInput.focus();
        else if (!isSubjectValid) subjectInput.focus();
        else if (!isMessageValid) messageInput.focus();
      }
    });
  }

  // ===================================
  // ABOUT PAGE - Smooth Scroll
  // ===================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
