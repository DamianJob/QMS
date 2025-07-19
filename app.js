/* app.js */

// Simulated login logic
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Replace this block with a real login API call
      if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // You can create this page
      } else {
        alert("Invalid username or password");
      }
    });
  }
});
