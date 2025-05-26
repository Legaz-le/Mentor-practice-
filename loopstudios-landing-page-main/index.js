document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector(".mobile-menu-toggle");
  const closeBtn= document.querySelector(".close-menu");
  const overlay = document.querySelector(".overlay");
  const menuBody= document.querySelector(".menu-mobile");
  const header_title = document.querySelector(".title-header");
  
  menu.addEventListener("click", ()=>{
    menuBody.classList.toggle('active')
    overlay.classList.toggle("active")
    header_title.style.color = "black";
    header_title.style.border = "black";
  })
closeBtn.addEventListener("click",()=>{
    menuBody.classList.remove('active')
    overlay.classList.remove("active")
    header_title.style.color = "white";
    header_title.style.border = "2px solid white";
    console.log("sdsdsds")
})

});
