// 1. Navigating through the page

function handleClick(e) {
  e.preventDefault();
  const sectionRef = document.querySelector(this.getAttribute("href"));
  const secYaxis = sectionRef.getBoundingClientreact().y;
  const scrollY = window.scrollY + secYaxis;
  const finalPosition = scrollY - 350;
  window.scroll(0, finalPosition);
}

// 2. Burger Menu button

const brgBtn = document.getElementById("burger");
const clsBtn = document.getElementById("closeBtn");
const mobNav = document.querySelector(".mobile-nav");
const body = document.getElementById("body");
function toggleMobNav() {
  if (
    !mobNav.style.display ||
    mobNav.style.display === "none"
    //body.style.overflow === "none"
  ) {
    mobNav.style.display = "flex";
    //body.style.overflow = "hidden";
  } else {
    mobNav.style.display = "none";
    //body.style.overflow = "none";
  }
}

// 3. Mobile version Navigation

const features = document.getElementById("m-features");
const pricing = document.getElementById("m-pricing");
const resources = document.getElementById("m-contact");

function hideMenu() {
  if (!mobNav.style.display || mobNav.style.display === "flex") {
    mobNav.style.display = "none";
  } else {
    mobNav.style.display = "flex";
  }
}
// 4. Burger Button Functions
brgBtn.addEventListener("click", toggleMobNav);
clsBtn.addEventListener("click", toggleMobNav);
features.addEventListener("click", hideMenu);
pricing.addEventListener("click", hideMenu);
resources.addEventListener("click", hideMenu);
