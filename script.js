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
