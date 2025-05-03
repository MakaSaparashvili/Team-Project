
// burger menu 1240px
// This code toggles the "active" class on the dropmenu element when the burger element is clicked
const burger = document.getElementById("burger");
const dropmenu = document.getElementById("dropmenu");

burger.addEventListener ("click", function() {
    dropmenu.classList.toggle("active");
    
});

// burger menu 1024px and 360px

const menu = document.getElementById("menu");
const dropmenu2 = document.getElementById("dropmenu2");

menu.addEventListener ("click", function() {
    dropmenu2.classList.toggle("active");
    
});