const {
  hamburger,
  hamburgerBlue,
  xIcon,
  mainContainer,
  rightCorner,
  leftCorner,
  homeLogoContainer,
  contentContainer,
  footer,
  menuOptions,
  aboutLink,
  contactLink,
  homeLink,
  artistsTitleMenu,
  mitchellTitleMenu,
  titleCorner,
  aboutContainer,
  contactContainer,
  copyrightContainer,
} = elementObj();

window.page = "home";

hamburger.addEventListener("click", (e) => {
  hamburger.style.display = "none";
  displayLinks(e);
});

hamburgerBlue.addEventListener("click", (e) => {
  hamburgerBlue.style.display = "none";
  displayLinks(e);
});

xIcon.addEventListener("click", (e) => {
  window.page = "home";
  goHome(e);
});

homeLink.addEventListener("click", (e) => {
  window.page = "home";
  goHome(e);
});

aboutLink.addEventListener("click", (e) => {
  window.page = "about";
  displayLinkPage(e);
});

contactLink.addEventListener("click", (e) => {
  window.page = "contact";
  displayLinkPage(e);
});

titleCorner.addEventListener("click", (e) => {
  hamburgerBlue.style.display = "none";
  window.page = "home";
  goHome(e);
});
