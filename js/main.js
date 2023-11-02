const category = document.querySelectorAll(".works li"),
  works = document.querySelectorAll(".our-works > div"),
  scrollTop = document.querySelector(".scroll-top"),
  links = document.querySelectorAll("nav ul a");

/* ========== Start links ==========  */
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((el) => {
      el.classList.remove("active");
    });
    link.classList.add("active");
  });
});
/* ========== End links ==========  */

/* ========== Start Works ==========  */
category.forEach((li) => {
  li.addEventListener("click", () => {
    category.forEach((el) => {
      el.classList.remove("active");
    });
    li.classList.add("active");
    li.classList.add("rounded-pill");

    works.forEach((work) => {
      work.style.display = "none";
      work.classList.forEach((e) => {
        if (e == li.dataset.cat) {
          work.style.display = "block";
        }
      });
    });
  });
});
/* ========== End Works ==========  */

/* ========== Start Scroll Top ==========  */
window.onscroll = () => {
  if (scrollY >= 600) {
    scrollTop.style.display = "flex";
  } else {
    scrollTop.style.display = "none";
  }
};
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
/* ========== End Scroll Top ==========  */
