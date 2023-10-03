var linkedin = document.querySelector(".linkedin");
var wsp = document.querySelector(".wsp");
var email = document.querySelector(".email");
var telegram = document.querySelector(".telegram");
var github = document.querySelector(".github");

var linkedinImg = document.querySelector(".linkedin-img");
var wspImg = document.querySelector(".wsp-img");
var emailImg = document.querySelector(".email-img");
var telegramImg = document.querySelector(".telegram-img");
var githubImg = document.querySelector(".github-img");
var myInfo = document.querySelector(".my-info");

//---------------------------------------------------------------------------------
linkedinImg.addEventListener("mouseenter", (event) => {
    linkedin.style.setProperty("display", "block");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "blur(10px)")

})
wspImg.addEventListener("mouseenter", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "block");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "blur(10px)")
})
emailImg.addEventListener("mouseenter", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "block");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "blur(10px)")
})
telegramImg.addEventListener("mouseenter", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "block");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "blur(10px)")
})
githubImg.addEventListener("mouseenter", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "block");
    myInfo.style.setProperty("filter", "blur(10px)")
})

//---------------------------------------------------------------------------------
linkedinImg.addEventListener("mouseout", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "none")
})
wspImg.addEventListener("mouseout", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "none")
})
emailImg.addEventListener("mouseout", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "none")
})
telegramImg.addEventListener("mouseout", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "none")
})
githubImg.addEventListener("mouseout", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "none")
})

//---------------------------------------------------------------------------------
linkedinImg.addEventListener("click", (event) => {
    linkedin.style.setProperty("display", "block");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "blur(10px)")
})
wspImg.addEventListener("click", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "block");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "blur(10px)")
})
emailImg.addEventListener("click", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "block");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "blur(10px)")
})
telegramImg.addEventListener("click", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "block");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "blur(10px)")
})
githubImg.addEventListener("click", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "block");
    myInfo.style.setProperty("filter", "blur(10px)")
})
//---------------------------------------------------------------------------------
linkedinImg.addEventListener("mouseup", (event) => {
    linkedin.style.setProperty("display", "block");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "none")
})
wspImg.addEventListener("mouseup", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "block");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "none")
})
emailImg.addEventListener("mouseup", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "block");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "none")
})
telegramImg.addEventListener("mouseup", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "block");
    github.style.setProperty("display", "none");
    myInfo.style.setProperty("filter", "none")
})
githubImg.addEventListener("mouseup", (event) => {
    linkedin.style.setProperty("display", "none");
    wsp.style.setProperty("display", "none");
    email.style.setProperty("display", "none");
    telegram.style.setProperty("display", "none");
    github.style.setProperty("display", "block");
    myInfo.style.setProperty("filter", "none")
})
//--------------------------------------------------------------------------------------