function openMenu(el){
  el.classList.toggle("change");
  let navbar = document.getElementById("mobile");
  if (navbar.className === "hidden-mobile") {
    navbar.className = "show-mobile";
  } else {
    navbar.className = "hidden-mobile";
  }
}