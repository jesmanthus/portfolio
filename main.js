const menu = document.querySelector(".menu")
const angleDown = document.querySelector(".fa-angle-down");
const experienceDetails = document.querySelector(".experience-details");
const burgerButton = document.getElementById("burger-menu");
const phone = window.matchMedia("screen and (max-width: 767px)");
const projectsLink = document.getElementById("link-projects");
const experienceLink = document.getElementById("link-experience");
const contactLink = document.getElementById("link-contact");

angleDown.addEventListener("click", hideExperienceDetails);

if (phone.matches) {
  burgerButton.addEventListener("click", hideShow)
  projectsLink.addEventListener("click", hideShow)
  experienceLink.addEventListener("click", hideShow)
  contactLink.addEventListener("click", hideShow)
}

phone.addListener(validation)

function validation() {
  if (phone.matches) {
    burgerButton.addEventListener("click", hideShow)
    projectsLink.addEventListener("click", hideShow)
    experienceLink.addEventListener("click", hideShow)
    contactLink.addEventListener("click", hideShow)
  } else {
    burgerButton.removeEventListener("click", hideShow)
    projectsLink.addEventListener("click", hideShow)
    experienceLink.addEventListener("click", hideShow)
    contactLink.addEventListener("click", hideShow)
  }
}

function hideShow() {
  menu.classList.toggle("is-active")
}

function hideExperienceDetails() {
  experienceDetails.classList.toggle('show-experience-details')
}
