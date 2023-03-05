// Login Pop Window
function openLoginPage() {
  document.querySelector(".hidden").style.display = "flex";
  console.log("Login Window Opened");
}

function closeLoginPage() {
  document.querySelector(".hidden").style.display = "none";
  console.log("Login Window Closed");
}

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector("nav");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

// Price Info
function changeYearlyPay() {
  document.querySelector(".yearly-payment").style.backgroundColor = "#f700ff";
  document.querySelector(".yearly-payment").style.Color = "white";
  document.querySelector(".monthly-payment").style.backgroundColor = "white";
  document.querySelector(".monthly-payment").style.Color = "black";
  document.querySelector(".basic-pack").textContent = "$200";
  document.querySelector(".pro-pack").textContent = "$300";
  document.querySelector(".bus-pack").textContent = "$400";
}

function changeMonthlyPay() {
  document.querySelector(".yearly-payment").style.backgroundColor = "white";
  document.querySelector(".yearly-payment").style.Color = "white";
  document.querySelector(".monthly-payment").style.backgroundColor = "#f700ff";
  document.querySelector(".monthly-payment").style.Color = "black";
  document.querySelector(".basic-pack").textContent = "$20.00";
  document.querySelector(".pro-pack").textContent = "$30.00";
  document.querySelector(".bus-pack").textContent = "$40.00";
}
