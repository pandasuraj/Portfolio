let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener('click',()=>{
    banner.classList.toggle('night');
})

let typingEffect = new Typed("#text",{
    strings:["Hi I am Suraj","Welcome to My World","Stay Tunned to know more about me","Launching Soon"],
    loop:true,
    typeSpeed: 90,
    backSpeed: 50,
    backDelay: 1000,
});
