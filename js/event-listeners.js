const {
  hamburger,
  xIcon,
  mainContainer,
  rightCorner,
  leftCorner,
  homeLogoContainer,
  contentContainer,
  maskLeft,
  footer,
} = elementObj();

hamburger.addEventListener("click", (e) => {
  mainContainer.style.backgroundColor = "white";
  hamburger.style.display = "none";
  homeLogoContainer.style.display = "none";
  xIcon.style.display = "block";
  rightCorner.style.visibility = "visible";
  leftCorner.style.visibility = "visible";
  footer.style.visibility = "visible";
});

xIcon.addEventListener("click", (e) => {
  mainContainer.style.backgroundColor = "#072256";
  hamburger.style.display = "block";
  homeLogoContainer.style.display = "block";
  xIcon.style.display = "none";
  rightCorner.style.visibility = "hidden";
  leftCorner.style.visibility = "hidden";
  footer.style.visibility = "hidden";
});
