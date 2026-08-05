const progress=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const height=document.documentElement.scrollHeight-window.innerHeight;

const scrolled=(window.scrollY/height)*100;

progress.style.width=scrolled+"%";

});

const cards=document.querySelectorAll(".card,.feature");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:800,

fill:"forwards"

});

}

});

});

cards.forEach(card=>observer.observe(card));