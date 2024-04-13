function showNavbar(){
    let navbar = document.getElementById("mobile");
    if (navbar.className === "hidden-mobile") {
      navbar.className += " responsive";
    } else {
      navbar.className = "hidden-mobile";
    }
};