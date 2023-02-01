"use strict";

// navbar에 scrollY에 따라서 glassmorhism 달아줌
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  let scrollY = this.scrollY;
  // console.log(`navbarHeight:${navbarHeight}`); //103px
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--glassmorphism");
  } else {
    navbar.classList.remove("navbar--glassmorphism");
  }
});

// navbar el 선택했을 때 -> 해당 section으로 scroll 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (ev) => {
  // dataset에 변수가 할당됨
  const target = ev.target;
  const link = target.dataset.link;
  // navbar에 다른 영역 click되는 것 방지
  if (link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
});
// homeContact btn 클릭시 contact로 이동
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", (ev) => {
  const scrollToContact = document.querySelector("#contact");
  scrollToContact.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
});

// fade 주기
const homeContents = document.querySelector(".home__Container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  homeContents.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrowBTN클릭시 toTop 이동
const arrowIcon = document.querySelector(".arrow__icon");

arrowIcon.addEventListener("click", (ev) => {
  const scrollToContact = document.querySelector("#home");
  scrollToContact.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
});

//top영역 밑에서 classList.add("show__arrowIcon")
// 위에 homeHeight 상수 있음
window.addEventListener("scroll", () => {
  let scrollY = this.scrollY;
  // console.log(`homeHeight:${homeHeight}`); // 715px
  if (window.scrollY > homeHeight / 3) {
    arrowIcon.classList.add("show__arrowIcon");
  } else {
    arrowIcon.classList.remove("show__arrowIcon");
  }
});

// filtering
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (ev) => {
  // span으로 감싸진 숫자 태그가 click시 disabled라 or 넣어줌
  const filter =
    ev.target.dataset.filter || ev.target.parentNode.dataset.filter;
  // console.log(filter);
  if (filter == null) {
    return;
  }
  console.log(filter);
  projectContainer.classList.add("anim-out");
  projects.forEach((project) => {
    // console.log(project.dataset.type);
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
  setTimeout(() => {
    projectContainer.classList.remove("anim-out");
  }, 200);
});
