"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
//////////////////////////////////////////////
//-----------------------------------------//
/////////////////////////////////////////////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// creating and inserting elements
// .insertAdjacentHTML

const massage = document.createElement("div");
massage.classList.add("cookie-message");
// massage.textContent = "We use cookied for improved functionality and analytics";
massage.innerHTML = `We use cookied for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>`;
// header.prepend(massage);
header.append(massage);
// header.append(massage.cloneNode(true));

// header.before(massage);
// header.after(massage);

// Delete Elements
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  // massage.remove();
  massage.parentElement.removeChild(massage);
});

// Apply Css Style
massage.style.backgroundColor = "black";
massage.style.width = "103%";

console.log(massage.style.color);
console.log(massage.style.backgroundColor);

console.log(getComputedStyle(massage).color);
console.log(getComputedStyle(massage).height);

massage.style.height =
  Number.parseFloat(getComputedStyle(massage).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");
