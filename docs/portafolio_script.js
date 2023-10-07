let wsp = document.querySelector(".wsp");
let email = document.querySelector(".email");
let telegram = document.querySelector(".telegram");
let linkedinImg = document.querySelector(".linkedin-img");
let wspImg = document.querySelector(".wsp-img");
let emailImg = document.querySelector(".email-img");
let telegramImg = document.querySelector(".telegram-img");
let githubImg = document.querySelector(".github-img");
let myInfo = document.querySelector(".my-info");
let myTable = document.querySelector(".myTable");

//---------------------------------------------------------------------------------
linkedinImg.addEventListener("mouseenter", (event) => {
  myTable.style.setProperty("filter", "blur(2px)");
});
wspImg.addEventListener("mouseenter", (event) => {
  myTable.style.setProperty("filter", "blur( 1px)");
});
emailImg.addEventListener("mouseenter", (event) => {
  myTable.style.setProperty("filter", "blur(2px)");
});
telegramImg.addEventListener("mouseenter", (event) => {
  myTable.style.setProperty("filter", "blur(2px)");
});
githubImg.addEventListener("mouseenter", (event) => {
  myTable.style.setProperty("filter", "blur(2px)");
});

//---------------------------------------------------------------------------------
linkedinImg.addEventListener("mouseout", (event) => {
  myTable.style.setProperty("filter", "none");
});
wspImg.addEventListener("mouseout", (event) => {
  myTable.style.setProperty("filter", "none");
});
emailImg.addEventListener("mouseout", (event) => {
  myTable.style.setProperty("filter", "none");
});
telegramImg.addEventListener("mouseout", (event) => {
  myTable.style.setProperty("filter", "none");
});
githubImg.addEventListener("mouseout", (event) => {
  myTable.style.setProperty("filter", "none");
});

//---------------------------------------------------------------------------------
linkedinImg.addEventListener("click", (event) => {
  myTable.style.setProperty("filter", "blur(2px)");
});
wspImg.addEventListener("click", (event) => {
  myTable.style.setProperty("filter", "blur(2px)");
  wsp.style.setProperty("display", "block");
  email.style.setProperty("display", "none");
  telegram.style.setProperty("display", "none");
  wsp.scrollIntoView({ behavior: "smooth", block: "start" });
});
emailImg.addEventListener("click", (event) => {
  myTable.style.setProperty("filter", "blur(2px)");
  wsp.style.setProperty("display", "none");
  email.style.setProperty("display", "block");
  telegram.style.setProperty("display", "none");
  email.scrollIntoView({ behavior: "smooth", block: "start" });
});
telegramImg.addEventListener("click", (event) => {
  myTable.style.setProperty("filter", "blur(2px)");
  wsp.style.setProperty("display", "none");
  email.style.setProperty("display", "none");
  telegram.style.setProperty("display", "block");
  telegram.scrollIntoView({ behavior: "smooth", block: "start" });
});
githubImg.addEventListener("click", (event) => {
  myTable.style.setProperty("filter", "blur(2px)");
});
//---------------------------------------------------------------------------------

document.addEventListener("touchstart", (event) => {
  if (
    event.target != wspImg &&
    event.target != telegramImg &&
    event.target != emailImg
  ) {
    myTable.style.setProperty("filter", "none");
  }
});

//---------------------------------------------------------------------------------
