// ===============================
// DAILY HUB INDIA
// SCRIPT.JS
// PART - 1
// ===============================

console.log("AI MASTER HUB Loaded Successfully");

// Current Year
const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = "© " + new Date().getFullYear() + " AI MASTER HUB";
}

// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to AI MASTER HUB");
});

// Smooth Scroll
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

const searchBtn = document.getElementById("searchBtn");

if(searchBtn){

searchBtn.onclick=function(){

const value=document.getElementById("searchBox").value;

if(value===""){

alert("Please enter a keyword.");

}else{

alert("Searching for : "+value);

}

}

}
const news = [
{
title:"Latest ChatGPT Updates",
desc:"Discover new ChatGPT features, tips and productivity tricks."
},
{
title:"Best AI Tools",
desc:"Explore powerful AI tools for writing, coding and business."
},
{
title:"Prompt Engineering",
desc:"Learn professional prompts for ChatGPT, Gemini and Claude."
},
{
title:"AI Automation",
desc:"Automate repetitive tasks using modern AI workflows."
},
{
title:"AI Business Ideas",
desc:"Find practical ways to earn money with AI services."
},
{
title:"Digital Marketing with AI",
desc:"Improve SEO, ads and content creation using AI."
}
];

const newsContainer=document.getElementById("newsContainer");

if(newsContainer){

news.forEach(item=>{

newsContainer.innerHTML+=`

<div class="news-card">

<h3>${item.title}</h3>

<p>${item.desc}</p>

</div>

`;

});

}
// Welcome Notification
setTimeout(() => {
    console.log("Welcome to AI MASTER HUB 🚀");
}, 1000);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
function searchNews(){

let input=document.getElementById("searchInput").value.toLowerCase();

let cards=document.querySelectorAll(".news-card,.trend-card,.story-card,.featured-card");

cards.forEach(function(card){

if(card.innerText.toLowerCase().includes(input)){

card.style.display="block";

}else{

card.style.display="none";

}

});

}
    
let slideIndex=0;

showSlides();

function showSlides(){

let slides=document.getElementsByClassName("slides");

for(let i=0;i<slides.length;i++){

slides[i].style.display="none";

}

slideIndex++;

if(slideIndex>slides.length){

slideIndex=1;

}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,3000);

}
const darkBtn=document.getElementById("darkModeBtn");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

}
function toggleMenu(){

document.querySelector("nav").classList.toggle("active");

}

let topButton=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>200 || document.documentElement.scrollTop>200){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
function updateClock(){

const now=new Date();

let h=String(now.getHours()).padStart(2,'0');

let m=String(now.getMinutes()).padStart(2,'0');

let s=String(now.getSeconds()).padStart(2,'0');

const clock=document.getElementById("liveClock");

if(clock){

clock.innerHTML=h+":"+m+":"+s;

}

}

setInterval(updateClock,1000);

updateClock();




