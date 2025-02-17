// CONSTANTS
const menuPath = document.querySelector(".menu_path");
const menuIcon = document.querySelector(".menu_icon");
const menuLinks = document.querySelector(".menu_links");
const menuTransition = document.querySelector(".menu_transition");
const menuWrapper = document.querySelector(".menu_wrapper");
const navbar = document.getElementById("navbar");

// VARIABLES
let toggle = false;

let y = 100; // y-axis
let c = 100; // curve

// FUNCTIONS
function linearInterpol(start, end, time) {
  return start * (1 - time) + end * time;
}

function animate() {
  if (toggle) {
    y = linearInterpol(y, 0, 0.035).toFixed(2);
    c = linearInterpol(c, 0, 0.065).toFixed(2);
    menuTransition.classList.add("active");
    menuWrapper.classList.add("active");
    navbar.classList.add("active");
    menuPath.setAttribute("stroke-width", "5px");
    menuPath.setAttribute("fill", "#061ba8");
    menuPath.setAttribute(
      "d",
      `M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`,
    );
  } else {
    y = linearInterpol(y, 105, 0.025).toFixed(2);
    c = linearInterpol(c, 105, 0.045).toFixed(2);
    menuPath.setAttribute(
      "d",
      `M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`,
    );
    menuPath.setAttribute("stroke-width", "0px");
    setTimeout(() => {
      menuPath.setAttribute("fill", "#faf4e6");
      menuTransition.classList.remove("active");
      menuWrapper.classList.remove("active");
      navbar.classList.remove("active");
    }, 2000);
  }

  requestAnimationFrame(animate);
}

// EVENTLISTENERS
menuIcon.addEventListener("click", () => {
  setTimeout(() => {
    toggle = !toggle;
  }, 300);

  if (toggle) {
    menuLinks.classList.remove("active");
  } else {
    setTimeout(() => {
      menuLinks.classList.add("active");
    }, 1000);
  }
  menuIcon.classList.toggle("active");
});

// SCRIPT
animate();
