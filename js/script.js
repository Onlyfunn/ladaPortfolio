"use strict";

if (typeof WOW === "function" && document.documentElement.clientWidth >= 1022) {
  new WOW().init();
}

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
if (links) {
  links.forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(`#${element.href.toString().split("#")[1]}`)
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}

emailjs.init("X0ywkiXLz5gT5ZUvz");
const form = document.getElementById("contact-form");

if (form) {
  const message = document.querySelector(".message");
  const inputName = document.getElementById("name");
  const inputEmail = document.getElementById("email");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (formValidate(form)) {
      form.classList.add("_active");
      emailjs.sendForm("service_9ksdmzg", "template_wakndhn", this).then(
        function () {
          form.classList.remove("_active");
          form.reset();
          message.innerHTML = `Данные успешно отправлены!`;
          message.classList.add("_active");
          setTimeout(() => {
            message.classList.remove("_active");
          }, 4000);
        },
        function (error) {
          form.classList.remove("_active");
          message.innerHTML = `Ошибка: ${JSON.stringify(error)}`;

          message.classList.add("_active");
          setTimeout(() => {
            message.classList.remove("_active");
          }, 4000);
        }
      );
    }
  });
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");
    formReq.forEach((item) => {
      item.addEventListener("focus", function (e) {
        console.log(1);
        item.parentElement.classList.remove("_error");
      });
      console.log(item);
      formRemoveError(item);
      if (item.classList.contains("_email")) {
        if (emailTest(item)) {
          formAddError(item);
          error++;
        }
      } else if (
        item.getAttribute("type") === "checkbox" &&
        item.checked === false
      ) {
        formAddError(item);
        error++;
      } else {
        if (item.value === "") {
          formAddError(item);
          error++;
        }
      }
    });
    return !error;
  }
  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  function emailTest(input) {
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
  }
}
