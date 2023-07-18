let header = document.querySelector("#header");
let a = document.querySelector("#header > a");
let lia = document.querySelectorAll("#header .main > li > a");
let navBar = document.querySelector("#header .fa");
let nav = document.querySelector("nav");
let ul = document.querySelector("#header .main");
let arrows = document.querySelectorAll("#header .fa-angle-down");
let arrow = document.querySelector(".arrow a");
let liArrow = document.querySelectorAll(".price .lists li > div");
let liParent = document.querySelector(".price .lists .parent > li");
let counter = 0;
let scroll = false;

window.onscroll = () => {
  if (scrollY >= 130) {
    if (!scroll) {
      scroll = true;
    }
  } else {
    scroll = false;
  }
  activeHead(scroll);
};

navBar.onclick = () => {
  counter++;
  if (counter % 2 === 1) {
    open();
  } else {
    close();
  }
};

arrows.forEach((arrow) => {
  arrow.onclick = () => {
    if (window.innerWidth <= 1199) {
      let ul = arrow.parentElement.nextElementSibling;
      arrow.parentElement.style.marginBottom = "15px";
      ul.classList.toggle("display");
      arrow.classList.toggle("active-arrow");
    }
  };
});

arrow.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.querySelector("input[type='submit']").onclick = (e) => {
  e.preventDefault();
};

function open() {
  nav.classList.add("active-nav");
  ul.style.display = "flex";
  navBar.classList.remove("fa-bars");
  navBar.classList.add("fa-x");
}

function close() {
  nav.classList.remove("active-nav");
  navBar.classList.remove("fa-x");
  navBar.classList.add("fa-bars");
  ul.style.display = "none";
}

function activeHead(scroll) {
  if (window.innerWidth > 1199) {
    if (scroll === true) {
      header.classList.add("active-header");
      header.classList.remove("normal-header");
      arrow.style.display = "block";
      lia.style.color = "var(--nav-color)";
    } else {
      header.classList.remove("active-header");
      header.classList.add("normal-header");
      arrow.style.display = "none";
    }
  } else {
    if (scroll === true) {
      header.classList.add("active-header");
      arrow.style.display = "block";
    } else {
      header.classList.remove("active-header");
      arrow.style.display = "none";
    }
  }
}

document
  .querySelectorAll("#header .main > li:not(:nth-last-child(2)) > a")
  .forEach((a) => {
    a.onclick = () => {
      if (window.innerWidth <= 1199) {
        close();
      }
    };
  });

liArrow.forEach((liArrow) => {
  liArrow.onclick = () => {
    liArrow.parentNode.classList.toggle("active-list");
  };
});

let nums = document.querySelectorAll(".stats .nbs h2");
let stats = document.querySelector(".stats");
let started = false; // Function Started ? No

window.addEventListener("scroll", function () {
  if (window.scrollY >= stats.offsetTop - 500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

let portImgs = document.querySelectorAll("#portfolio .imgs > div");
let titles = document.querySelectorAll("#portfolio .titles > span");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    titles.forEach((title) => {
      title.classList.remove("active-title");
    });
    title.classList.add("active-title");
    portImgs.forEach((img) => {
      let id = img.dataset.id;
      if (!id.includes(title.textContent.toLowerCase())) {
        img.style.display = "none";
      } else {
        img.style.display = "inherit";
        if (title.textContent.toLowerCase() == "all") {
          img.style.position = "relative";
        } else {
          img.style.position = "inherit";
        }
      }
    });
  });
});

let posts = document.querySelectorAll(".test .post");
let swipers = document.querySelectorAll(".test .swiper > span");

setInterval(() => {
  swipe();
  nextClass();
}, 5000);

posts.forEach((post) => {
  post.addEventListener("mousedown", () => {
    swipe();
    nextClass();
  });
});

let currentIndex = -1;

function swipe() {
  posts.forEach((post, index) => {
    post.classList.remove("active-post");
    if (post.classList.contains("next")) {
      post.classList.remove("next");
      post.classList.add("active-post");
      swipers.forEach((swipe) => {
        swipe.classList.remove("active-swiper");
      });
      document
        .querySelector(`.test .swiper .${post.id}`)
        .classList.add("active-swiper");
      currentIndex = index;
      return;
    }
  });
}

function nextClass() {
  if (currentIndex === 4) {
    currentIndex = -1;
  }
  posts[currentIndex + 1].classList.add("next");
}

swipers.forEach((swipe, index) => {
  swipe.addEventListener("click", () => {
    swipers.forEach((swipe) => {
      swipe.classList.remove("active-swiper");
    });
    swipe.classList.add("active-swiper");
    posts.forEach((post) => {
      post.classList.remove("active-post");
      post.classList.remove("next");
    });
    document
      .querySelector(`.test div#${swipe.classList[0]}`)
      .classList.add("active-post");
    currentIndex = index;
    nextClass();
    return;
  });
});

let sections = document.querySelectorAll("section:not(#landing-page)");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 100) {
      let ele = section.querySelectorAll(
        "[data-animation='up'], [data-animation='fade']"
      );
      ele.forEach((ele) => {
        ele.style.animationName = ele.dataset.animation;
      });
    }
  });
});

let elements = document.querySelectorAll(
  "[data-animation='up'], [data-animation='fade']"
);

window.addEventListener("scroll", () => {
  elements.forEach((element) => {
    if (scrollY >= element.offsetTop - 500) {
      element.style.animationName = element.dataset.animation;
    }
  });
});

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 100) {
      lia.forEach((a) => {
        a.classList.remove("active-section");
        if (section.id === a.textContent.toLowerCase()) {
          a.classList.add("active-section");
        }
      });
    }
  });
});
