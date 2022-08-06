var siteHeaderbtnEl = document.querySelector(".header_toggle");
var headerEl = document.querySelector(".header");

siteHeaderbtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("header_open");
});
