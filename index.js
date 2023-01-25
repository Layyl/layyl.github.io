window.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector(".hamburger-menu");
  const blocker = document.querySelector(".blocker");
  const mobileMenu = document.querySelector(".mobile-menu");

  const hideMobileMenu = () => {
    blocker.style.display = "none";
    mobileMenu.classList.remove("show-mobile-menu");
  };

  hamMenu.addEventListener("click", () => {
    blocker.style.display = "block";
    mobileMenu.classList.add("show-mobile-menu");
  });

  blocker.addEventListener("click", hideMobileMenu);

  window.addEventListener("resize", () => {
    const desktop = window.matchMedia("(min-width: 993px)");
    if (desktop.matches) {
      hideMobileMenu();
    }
  });
});

function scrollValue() {
  const navbar = document.querySelector(".navigation");
  let scroll = window.scrollY;

  if (scroll < 10) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}

window.addEventListener("scroll", scrollValue);
