
// Smooth anchor scroll
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute("href").slice(1);
  const el = document.getElementById(id);
  if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
});

document.addEventListener("DOMContentLoaded", () => {
  // Capture UTM parameters into hidden fields
  const params = new URLSearchParams(location.search);
  const keys = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"];
  keys.forEach(k => { const v=params.get(k); if(v) localStorage.setItem(k, v); });

  const form = document.querySelector("#signup-form");
  const email = document.querySelector("#email");
  const status = document.querySelector("#status");
  const hidden = document.querySelector("#utm-hidden");

  if (form && hidden) {
    keys.forEach(k => {
      const v = localStorage.getItem(k) || params.get(k) || "";
      const input = document.createElement("input");
      input.type = "hidden"; input.name = k; input.value = v;
      hidden.appendChild(input);
    });
  }

  // Validate email before submit
  form?.addEventListener("submit", (e) => {
    const v = email?.value?.trim();
    if (!v || !/^\S+@\S+\.\S{2,}$/.test(v)) {
      e.preventDefault();
      status.textContent = "Please enter a valid email address.";
      status.style.color = "#FFD700";
      email?.focus();
    }
  });

  // Modal 2-step form
  const modal = document.querySelector("#modal");
  const openBtns = document.querySelectorAll("[data-open-modal]");
  const closeBtns = document.querySelectorAll("[data-close-modal]");
  openBtns.forEach(b => b.addEventListener("click", () => modal.classList.add("active")));
  closeBtns.forEach(b => b.addEventListener("click", () => modal.classList.remove("active")));
});
