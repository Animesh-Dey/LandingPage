

const menuBtn=document.querySelector(".menu-icon span");
const searchBtn=document.querySelector(".search-icon");
const cancelBtn=document.querySelector(".cancel-icon");
const items=document.querySelector(".nav-items");
const form=document.querySelector("form");











/*For Navbar*/
menuBtn.addEventListener("click",()=>{
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
});
cancelBtn.addEventListener("click",()=>{
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
});
searchBtn.addEventListener("click",()=>{
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
});