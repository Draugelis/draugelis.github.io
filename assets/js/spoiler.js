document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".spoiler").forEach(el => {
    el.addEventListener("click", () => el.classList.toggle("revealed"));
    el.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.classList.toggle("revealed"); }
    });
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "0"); // keyboard focus
  });
});
