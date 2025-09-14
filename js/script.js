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

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", formsend);
  async function formsend(e) {
    e.preventDefault();
    let formData = new FormData(form);
    let response = await fetch("sendemail.php", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
    } else {
      alert("Ошибка");
    }
  }
}
