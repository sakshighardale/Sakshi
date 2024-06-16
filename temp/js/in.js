document.addEventListener("DOMContentLoaded", function () {
  nav_autoHide = document.querySelector(".autohide");

  navbar_height = document.querySelector(".navbar").offsetHeight;
  // document.body.style.paddingTop = navbar_height + "px";

  if (nav_autoHide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = this.window.scrollY;
      if (scroll_top < last_scroll_top) {
        nav_autoHide.classList.remove("scrolled-down");
        nav_autoHide.classList.add("scrolled-up");
      } else {
        nav_autoHide.classList.remove("scrolled-up");
        nav_autoHide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
  }
});
