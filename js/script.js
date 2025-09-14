"use strict";

if (document.documentElement.clientWidth > 798) {
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

const links = document.querySelectorAll("a.anchor");
console.log(links);
if (links) {
  links.forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(
        document.querySelector(`#${element.href.toString().split("#")[1]}`)
      );
      document
        .querySelector(`#${element.href.toString().split("#")[1]}`)
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}
