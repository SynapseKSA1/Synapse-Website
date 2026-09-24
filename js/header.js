(function () {
  var header = document.querySelector("header");
  var menuButton = document.querySelector(".mobile-menu-btn");
  var nav = document.querySelector("nav");
  if (!header || !menuButton || !nav) return;

  var icon = menuButton.querySelector("i");
  var ticking = false;

  function setMenu(open) {
    nav.classList.toggle("show", open);
    if (icon) {
      icon.classList.toggle("fa-times", open);
      icon.classList.toggle("fa-bars", !open);
    }
    menuButton.setAttribute("aria-expanded", String(open));
  }

  function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 30);
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateHeader);
      }
    },
    { passive: true }
  );
  updateHeader();

  menuButton.setAttribute("aria-label", "القائمة");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.addEventListener("click", function () {
    setMenu(!nav.classList.contains("show"));
  });

  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !menuButton.contains(e.target)) setMenu(false);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });
})();
