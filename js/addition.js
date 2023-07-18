let header = document.querySelector("header");
let navBar = document.querySelector(".fa");
let nav = document.querySelector("nav");
let ul = document.querySelector("header .main");
let arrows = document.querySelectorAll(".fa-angle-down");
let arrow = document.querySelector(".arrow a");
let counter = 0;
let lia = document.querySelectorAll("header .main > li > a");
let scroll = false;

window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    header.classList.remove("services-header");
  } else {
    header.classList.add("services-header");
  }
});

window.onscroll = () => {
  if (scrollY >= 130) {
    if (!scroll) {
      scroll = true;
    }
  } else {
    scroll = false;
  }
  arrowScroll(scroll);
};

function arrowScroll(scroll) {
  if (scroll === true) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
}

navBar.onclick = () => {
  counter++;
  if (counter % 2 === 1) {
    open();
  } else {
    close();
  }
};

arrow.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function open() {
  nav.classList.add("active-nav");
  ul.style.display = "flex";
  navBar.classList.remove("fa-bars");
  navBar.classList.add("fa-x");
}

function close() {
  nav.classList.remove("active-nav");
  ul.style.display = "none";
  navBar.classList.remove("fa-x");
  navBar.classList.add("fa-bars");
}

arrows.forEach((arrow) => {
  arrow.onclick = () => {
    if (window.innerWidth <= 1199) {
      let ul = arrow.parentElement.nextElementSibling;
      ul.classList.toggle("display");
      arrow.classList.toggle("active-arrow");
    }
  };
});

document
  .querySelectorAll("header .main > li:not(:nth-last-child(2)) > a")
  .forEach((a) => {
    a.onclick = () => {
      if (window.innerWidth <= 1199) {
        close();
      }
    };
  });
