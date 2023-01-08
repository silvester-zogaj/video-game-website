"use-strict";

// VARIABLES
const storyInfo = document.querySelector(".story__info");
const storyInfoNext = document.querySelector(".story__more-info--next");
const storyFade = document.querySelector(".story__fade");
const exploreSpan = document.querySelector(".world__explore");
const hamburgerIcon = document.querySelector(".hamburger__icon");
const closeIcon = document.querySelector(".close__icon");
const header = document.getElementById("header");

const moreInfo = document.querySelector(".story__more-info--next");
const backInfo = document.querySelector(".story__more-info--back");
const background1 = document.querySelector(".story__background1");
const background2 = document.querySelector(".story__background2");

const animationImages = document.querySelectorAll(".world__image-animation img");
const worldImg1 = document.querySelector(".world__img--1");
const worldImg2 = document.querySelector(".world__img--2");
const closeImg1 = document.querySelector(".close__img--1");
const closeImg2 = document.querySelector(".close__img--2");

const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownTitle = document.querySelector(".dropdown-title");
const dropdownIcon = document.querySelector(".dropdown-icon");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

// MOBILE SCREEN -- NAV ICON

hamburgerIcon.addEventListener("click", function () {
  header.style.display = "flex";
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  header.style.display = "none";
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
});

//MOBILE SCREEN -- DROP-DOWN MENU

dropdownBtn.addEventListener("click", function () {
  toggleOpacity();
});

let isVisible = false;

function toggleOpacity() {
  if (isVisible) {
    dropdownMenu.style.transform = "translateY(0)";
    dropdownMenu.style.opacity = "1";
    dropdownMenu.style.visibility = "visible";
    dropdownIcon.style.color = "var(--color-secondary-2)";
    isVisible = false;
  } else {
    dropdownMenu.style.transform = "translateY(-10%)";
    dropdownMenu.style.opacity = "0";
    dropdownMenu.style.visibility = "hidden";
    dropdownIcon.style.color = "white";
    isVisible = true;
  }
}

// STORY BACKGROUND SLIDE

moreInfo.addEventListener("click", function () {
  background1.style.transform = "translateX(100%)";
  background2.style.transform = "translateX(0)";
});

backInfo.addEventListener("click", function () {
  background1.style.transform = "translateX(0)";
  background2.style.transform = "translateX(-100%)";
});

// World Explore Span - image animation

exploreSpan.addEventListener("click", function () {
  worldImages();
});

function worldImages() {
  worldImg1.style.opacity = "1";
  worldImg1.style.visibility = "visible";
  worldImg1.style.transform = "scale(1)";
  worldImg2.style.opacity = "1";
  worldImg2.style.visibility = "visible";
  worldImg2.style.transform = "scale(1)";
}

closeImg1.addEventListener("click", function () {
  worldImg1.style.opacity = "0";
  worldImg1.style.visibility = "hidden";
  worldImg1.style.transform = "scale(0.5)";
});

closeImg2.addEventListener("click", function () {
  worldImg2.style.opacity = "0";
  worldImg2.style.visibility = "hidden";
  worldImg2.style.transform = "scale(0.5)";
});

// MOBILE SCREEN -- CLOSE DROP-DOWN MENU

document.addEventListener("click", function (e) {
  if (e.target.closest(".dropdown-btn")) {
    return;
  } else {
    dropdownMenu.style.transform = "translateY(-10%)";
    dropdownMenu.style.opacity = "0";
    dropdownMenu.style.visibility = "hidden";
    dropdownIcon.style.color = "white";
    isVisible = true;
  }
});

// MOBILE SCREEN -- DROP-DOWN BUTTON TEXT CHANGE

// No longer being used, but keeping it as a possible future idea.

// for (let i=0; i < dropdownLinks.length; i++) {
//   dropdownLinks[i].addEventListener('click', function () {
//     dropdownTitle.innerHTML = dropdownLinks[i].innerHTML
//   })
// }

// SCROLL FUNCTIONS

window.addEventListener("scroll", storyScrollFunction);
// transition of story section happens when we scroll to a certain point.

function storyScrollFunction() {
  const y = window.scrollY;
  if (y > 350) {
    storyInfo.style.opacity = "1";
    storyInfo.style.transform = "translateX(0)";
    storyInfoNext.style.opacity = "1";
    storyInfoNext.style.transform = "translateX(0)";
    storyFade.style.opacity = "0";
    storyFade.style.zIndex = "-10";
  } else {
    return;
  }
}

window.addEventListener("scroll", exploreScrollFunction);

function exploreScrollFunction() {
  const y = window.scrollY;
  if (y > 1600) {
    exploreSpan.style.opacity = "1";
    exploreSpan.style.transform = "translateY(0)";
  } else {
    return;
  }
}

window.addEventListener("scroll", scrollDropdown);
// change name of dropdown title depending on where the scrollY is.
function scrollDropdown() {
  const y = window.scrollY;
  if (y >= 0) {
    dropdownTitle.innerHTML = dropdownLinks[0].innerHTML;
  }
  if (y > 725) {
    dropdownTitle.innerHTML = dropdownLinks[1].innerHTML;
  }
  if (y > 1500) {
    dropdownTitle.innerHTML = dropdownLinks[2].innerHTML;
  }
  if (y > 2300) {
    dropdownTitle.innerHTML = dropdownLinks[3].innerHTML;
    if (y > 2600) {
      dropdownTitle.innerHTML = dropdownLinks[4].innerHTML;
    } else {
      return;
    }
  }
}

// MEDIA QUERIES
function screenFunction(screen) {
  if (screen.matches) {
    // If media query matches
    document.querySelector(".hero__video--title").innerHTML = "Death & Beyond"; // If screen is 750px or smaller change 'and' to &
    header.style.display = "none";
    hamburgerIcon.style.display = "block";
  } else {
    document.querySelector(".hero__video--title").innerHTML = "Death and Beyond";
    header.style.display = "flex";
    closeIcon.style.display = "none";
    worldImg1.style.animation = "none";
    worldImg2.style.animation = "none";
  }
}

if (window.innerWidth > 750) {
  // On load while screen is below 750px, immediately load title as 'Death & Beyond', without the initial mini pause
  document.querySelector(".hero__video--title").innerHTML = "Death & Beyond";
} else {
  document.querySelector(".hero__video--title").innerHTML = "Death and Beyond";
}

const screen = window.matchMedia("(max-width: 750px)");
screenFunction(screen);
screen.addListener(screenFunction);
