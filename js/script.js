"use strict";

if (document.documentElement.clientWidth >= 1022) {
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

emailjs.init("X0ywkiXLz5gT5ZUvz");
const form = document.getElementById("contact-form");
const message = document.querySelector(".message");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  form.classList.add("_active");
  emailjs.sendForm("service_9ksdmzg", "template_wakndhn", this).then(
    function () {
      // alert("Сообщение отправлено!");
      form.classList.remove("_active");
      form.reset();
      message.innerHTML = `Данные успешно отправлены!`;
      message.classList.add("_active");
      setTimeout(() => {
        message.classList.remove("_active");
      }, 4000);
    },
    function (error) {
      // alert("Ошибка: " + JSON.stringify(error));
      form.classList.remove("_active");
      message.innerHTML = `Ошибка: ${JSON.stringify(error)}`;

      message.classList.add("_active");
      setTimeout(() => {
        message.classList.remove("_active");
      }, 4000);
    }
  );
});
