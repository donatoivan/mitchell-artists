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
} = elementObj();

hamburger.addEventListener("click", (e) => {
  hamburger.style.display = "none";
  displayLinks(e);
});

hamburgerBlue.addEventListener("click", (e) => {
  hamburgerBlue.style.display = "none";
  displayLinks(e);
});

xIcon.addEventListener("click", (e) => {
  goHome(e);
});

homeLink.addEventListener("click", (e) => {
  goHome(e);
});

aboutLink.addEventListener("click", (e) => {
  displayLinkPage(e);
});

contactLink.addEventListener("click", (e) => {
  displayLinkPage(e);
});

titleCorner.addEventListener("click", (e) => {
  hamburgerBlue.style.display = "none";
  goHome(e);
});
