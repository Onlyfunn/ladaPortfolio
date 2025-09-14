"use strict";

if (document.documentElement.clientWidth > 1028) {
  const examplesButtons = document.querySelector(".info__buttons");
  if (examplesButtons) {
    examplesButtons.children[1].addEventListener("mouseenter", function (e) {
      examplesButtons.children[0].classList.remove("button_blue");
    });
    examplesButtons.children[1].addEventListener("mouseleave", function (e) {
      examplesButtons.children[0].classList.add("button_blue");
    });
  }
}
