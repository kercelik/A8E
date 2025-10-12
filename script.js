
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#signup-form");
  const email = document.querySelector("#email");
  const status = document.querySelector("#status");
  form?.addEventListener("submit", (e) => {
    if (!email.value || !/^\S+@\S+\.\S{2,}$/.test(email.value)) {
      e.preventDefault();
      status.textContent = "Please enter a valid email address.";
      status.setAttribute("role","alert");
      status.style.color = "#FFD700";
      email.focus();
    } else if (form.action === "#" || form.action.includes("YOUR_EMAIL_SERVICE_URL")) {
      e.preventDefault();
      status.textContent = "Thanks! Replace the form action with your email service URL to start collecting signups.";
      status.setAttribute("role","status");
      status.style.color = "#a7a7a7";
    }
  });
});
