//============================================================
//creating a responsive navbar  componen
//============================================================
const mobile_nav= document.querySelector("mobile-navbar-btn");
const navbar_Elem =document.querySelector(".navbar");

const togglenav =() =>{
    navbar_Elem.classList.toggle("active");
};

mobile_nav.addEventListener("click",()=> toggleNav());