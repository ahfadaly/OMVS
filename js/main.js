// start navbar ------------------------------------------
let navbarTop = document.querySelector(".header");
window.addEventListener(`scroll`, () => {
  if (this.scrollY > 50) {
    navbarTop.classList.add("navbar-fixed");
  } else {
    navbarTop.classList.remove("navbar-fixed");
  }
});

// ================================================================
let scorllTop = document.querySelector(".scroll_top");
window.addEventListener(`scroll`, () => {
  window.scrollY >= 200
    ? scorllTop.classList.add("show_scroll")
    : scorllTop.classList.remove("show_scroll");
});

// vairable ----------
let myGlass = document.querySelector("header .glass");
let mylassNav = document.querySelector("form .glass");
let closebtn = document.querySelector(".closebtn-search");

// events ------------
mylassNav.addEventListener(`click`, openSearch);
myGlass.addEventListener(`click`, openSearch);
closebtn.addEventListener(`click`, closeSearch);

// Function ------------
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

// End navbar ------------------------------------------

// start massage-fixed -----------------------------------
let massageFixed = document.querySelector(".massage-button");
let formMassage = document.querySelector(".form-massage");
massageFixed.addEventListener(`click`, () => {
  formMassage.classList.toggle("show-form");
});
// End massage-fixed -----------------------------------

/* slick  ------------------------------------------ */
$(`document`).ready(() => {
  $(".slick").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    speed: 300,
    prevArrow:
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
/* slick ------------------------------------------ */
