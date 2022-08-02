const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// When hamburger menu is clicked
navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visibility");

  if (visibility === "false") {
    // if it's closed, open it
    nav.setAttribute("data-visibility", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    // if it's open, close it
    nav.setAttribute("data-visibility", false);
    navToggle.setAttribute("aria-expanded", false);
  }

  console.log(visibility);
});
