// toggle navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//scroll sections
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    console.log("Section visible:", id);

    if (top >= offset && top <= offset + height) {
      // on active la barre link
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });

  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // supprimer l'icone de menu chaque fois qu'on clique sur une lien (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
//Add Dark mode or white mode on my website

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "fichier/lightmode.png ";
    // icon.style.border = "2px solid #ECECBB";
    // icon.style.borderRadius = "45%";
  } else {
    icon.src = "fichier/darkmode.png";
  }
};
