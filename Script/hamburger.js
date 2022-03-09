const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click" , () => {
    hamburger.classList.toggle("active1");
    navMenu.classList.toggle("active1");
})

document.querySelectorAll(".menu__item").forEach(n => n. 
addEventListener("click", () => {
    hamburger.classList.remove("active1");
    navMenu.classList.remove("active1");
}))
