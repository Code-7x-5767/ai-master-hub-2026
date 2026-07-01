// ===============================
// DAILY HUB INDIA
// SCRIPT.JS
// PART - 1
// ===============================

console.log("Daily Hub India Loaded Successfully");

// Current Year
const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = "© " + new Date().getFullYear() + " Daily Hub India";
}

// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to Daily Hub India");
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
title:"AI is Changing the World",
desc:"Artificial Intelligence is growing rapidly across every industry."
},
{
title:"India Tech News",
desc:"Latest technology updates from India."
},
{
title:"Government Jobs",
desc:"New recruitment notifications available."
},
{
title:"Cricket Updates",
desc:"Latest cricket scores and match updates."
},
{
title:"Finance",
desc:"Market and business news."
},
{
title:"Movies",
desc:"OTT and Bollywood latest updates."
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
    console.log("Welcome to Daily Hub India 🚀");
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

