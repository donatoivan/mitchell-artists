const {
  hamburger,
  xIcon,
  mainContainer,
  rightCorner,
  leftCorner,
  homeLogoContainer,
  contentContainer,
} = elementObj();

hamburger.addEventListener("click", (e) => {
  mainContainer.style.backgroundColor = "white";
  hamburger.style.display = "none";
  homeLogoContainer.style.display = "none";
  xIcon.style.display = "block";
  rightCorner.style.visibility = "visible";
  leftCorner.style.visibility = "visible";
  contentContainer.style.backgroundColor = "red";
});
