const homeSection = document.querySelector(".home-section");
const hamburgerEl = document.querySelector(".hamburger");
const navText = document.querySelector(".nav-texts");

const tabs = document.querySelector(".btns-div");
const btns = document.querySelectorAll(".tab-btn");
const itemEl = document.querySelectorAll(".items");

hamburgerEl.addEventListener("click", function () {
  this.classList.toggle("open");
  navText.classList.toggle("open");
});

tabs.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");
    itemEl.forEach((item) => {
      item.classList.add("not-active");
    });
    const element = document.getElementById(id);
    element.classList.remove("not-active");
  }
});

const swiperContainer = new Swiper(".container", {
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});
