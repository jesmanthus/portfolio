const menu = document.querySelector(".menu")
const experienceTitle = document.querySelector('.experience-title')
const angleDown = document.querySelector(".fa-angle-down");
const burgerButton = document.getElementById("burger-menu");
const phone = window.matchMedia("screen and (max-width: 767px)");
const projectsLink = document.getElementById("link-projects");
const experienceLink = document.getElementById("link-experience");
const contactLink = document.getElementById("link-contact");

experienceTitle.addEventListener("click", (e) => {
  const experienceDetails = e.target.nextElementSibling;
  experienceDetails.classList.toggle('show-experience-details')
});

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

function hideExperienceDetails(e) {
  const experienceDetails = e.target.nextElementSibling;
  experienceDetails.toggle('show-experience-details')
}
