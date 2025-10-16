// Update current time
function updateTime() {
  const timeElement = document.getElementById("currentTime");
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Initial time update
updateTime();

// Update time every second
setInterval(updateTime, 1000);

// Ensure accessibility for keyboard navigation
document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach((link) => {
    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        link.click();
      }
    });
  });
});
