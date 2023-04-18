 // OPEN & CLOSE TOGGLE

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

//CHANGE THEME
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})
 
//CHANGE THEME
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variable');
})