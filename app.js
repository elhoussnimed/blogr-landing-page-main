const hamburgerBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".hero header nav");
const hiddenList = document.querySelector(".hiddenList");
const showHideListBtn = document.querySelector(".hero header nav .connect");
const arrow = document.querySelector(".hero header nav .arrow");

// some styling in DOM in Mobile Screen
if (window.screen.width < 767) {
  nav.classList.add("hide");
  arrow.src = "./images/icon-arrow-dark.svg";
} else {
  arrow.src = "./images/icon-arrow-light.svg";
}

// show and hide nav in mobile screen
hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("hide");
  if (nav.classList.contains("hide")) {
    hamburgerBtn.src = "./images/icon-hamburger.svg";
  } else {
    hamburgerBtn.src = "./images/icon-close.svg";
  }
});

// show and hide hidden list in mobile screen
showHideListBtn.addEventListener("click", () => {
  hiddenList.classList.toggle("hide");
  if (hiddenList.classList.contains("hide")) {
    nav.style.gap = "25px";
    arrow.style.rotate = "0deg";
  } else {
    nav.style.gap = "190px";
    arrow.style.rotate = "180deg";
  }
});
