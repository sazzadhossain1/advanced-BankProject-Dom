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

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

// Non-Standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("designer"));

const link = document.querySelector(".nav__link__btn");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c"); // not includes

// Never use like this
logo.className = "jonas";

//-------------------------------

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  console.log("clicked");

  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

//------------------------------------------//

const h1 = document.querySelector("h1");

const alerH1 = function (e) {
  alert("addEventListener: Great ! You are reading the heading :D");
};

h1.addEventListener("mouseenter", alerH1);

setTimeout(() => h1.removeEventListener("mouseenter", alerH1, 3000));

// h1.onmouseenter = function (e) {
//   alert("addEventListener: Great ! You are reading the heading :D");
// };
