// Alert welcome message when site loads
window.addEventListener("load", () => {
    alert("Welcome to Chirag's Portfolio! 🎉");
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Dark mode toggle (optional feature)
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle Dark Mode";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.bottom = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.padding = "10px";
  toggleBtn.style.backgroundColor = "#0a3d62";
  toggleBtn.style.color = "white";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "5px";
  document.body.appendChild(toggleBtn);
  
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  