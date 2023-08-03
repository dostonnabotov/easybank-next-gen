const navToggleBtn = document.getElementById("mobile-nav-toggle");
const navElement = document.getElementById("primary-nav");

navToggleBtn.addEventListener("click", () => {
  const isVisible = navElement.dataset.visible;

  if (isVisible === "false") {
    navElement.setAttribute("data-visible", true);
    navToggleBtn.setAttribute("aria-expanded", true);
    // document.body.style.overflowY = "hidden";
  } else {
    navElement.setAttribute("data-visible", false);
    navToggleBtn.setAttribute("aria-expanded", false);
    // document.body.style.overflowY = "visible";
  }
});
