function goHome(e) {
  e.preventDefault();
  mainContainer.style.backgroundColor = "#072256";
  contentContainer.style.justifyContent = "center";
  hamburger.style.display = "block";
  homeLogoContainer.style.display = "block";
  xIcon.style.display = "none";
  rightCorner.style.visibility = "hidden";
  leftCorner.style.visibility = "hidden";
  footer.style.visibility = "hidden";
  menuOptions.style.display = "none";
  mitchellTitleMenu.style.visibility = "hidden";
  artistsTitleMenu.style.visibility = "hidden";
}

function displayLinkPage(e) {
  e.preventDefault();
  mainContainer.style.backgroundColor = "white";
  contentContainer.style.justifyContent = "flex-start";
  xIcon.style.display = "none";
  hamburgerBlue.style.display = "block";
  rightCorner.style.visibility = "visible";
  leftCorner.style.visibility = "visible";
  footer.style.visibility = "visible";
  menuOptions.style.display = "none";
  mitchellTitleMenu.style.visibility = "visible";
  artistsTitleMenu.style.visibility = "visible";
}

function displayLinks(e) {
  e.preventDefault();
  mainContainer.style.backgroundColor = "white";
  contentContainer.style.justifyContent = "flex-start";
  homeLogoContainer.style.display = "none";
  xIcon.style.display = "block";
  rightCorner.style.visibility = "visible";
  leftCorner.style.visibility = "visible";
  footer.style.visibility = "visible";
  menuOptions.style.display = "flex";
  mitchellTitleMenu.style.visibility = "hidden";
  artistsTitleMenu.style.visibility = "hidden";
}
