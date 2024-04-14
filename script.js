function showNavbar(){
    let navbar = document.getElementById("mobile");
    if (navbar.className === "hidden-mobile") {
      navbar.className = "show-mobile";
    } else {
      navbar.className = "hidden-mobile";
    }
};