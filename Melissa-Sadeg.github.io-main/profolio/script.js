const aboutSection = document.getElementById("a-propos");
const skillsSection = document.getElementById("techniques");
const projectSection = document.getElementById("projets");
const contactSection = document.getElementById("contact");

const menuElements = document.querySelectorAll("nav ul li");
for (let i = 0; i < menuElements.length; i++) {
  menuElements[i].addEventListener("click", setMenuActive(i));
}
function setMenuActive(index) {
  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].classList.remove("active");
  }
  menuElements[index].classList.add("active");
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function switchMenu() {
  if (checkVisible(contactSection)) {
    setMenuActive(3);
  } else if (checkVisible(skillsSection)) {
    setMenuActive(2);
  } else if (checkVisible(aboutSection)) {
    setMenuActive(0);
  } else if (checkVisible(projectSection)) {
    setMenuActive(1);
  }

  // if (checkVisible(contactSection)) {
  //   setMenuActive(3);
  // } else if (checkVisible(aboutSection)) {
  //   setMenuActive(0);
  // } else if (checkVisible(skillsSection)) {
  //   setMenuActive(1);
  // } else if (checkVisible(projectSection)) {
  //   setMenuActive(2);
  // }
}

document.addEventListener("scroll", switchMenu);
