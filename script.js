const featuredStays = [
{
id:1,
name:"Coral Bay Resort",
location:"Watamu",
price:8500,
rating:4.9,
image:"https://images.unsplash.com/photo-1501117716987-c8e1ecb2106e",
type:"Hotel"
},

{
id:2,
name:"Diani Ocean Villa",
location:"Diani",
price:12000,
rating:4.8,
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
type:"Villa"
},

{
id:3,
name:"Nairobi City Suites",
location:"Nairobi",
price:7200,
rating:4.7,
image:"https://images.unsplash.com/photo-1566073771259-6a8506099945",
type:"Hotel"
},

{
id:4,
name:"Naivasha Safari Lodge",
location:"Naivasha",
price:5600,
rating:4.9,
image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
type:"Safari Lodge"
},

{
id:5,
name:"Kisumu Sunset Apartment",
location:"Kisumu",
price:6200,
rating:4.8,
image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
type:"Apartment"
},

{
id:6,
name:"Maasai Mara Luxury Camp",
location:"Maasai Mara",
price:18500,
rating:5.0,
image:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
type:"Luxury Camp"
}
];
const experiences=[

{
id:1,
title:"Marine Park Tour",
location:"Watamu",
price:50,
currency:"USD",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
},

{
id:2,
title:"Deep Sea Diving",
location:"Watamu",
price:100,
currency:"USD",
image:"https://images.unsplash.com/photo-1544551763-46a013bb70d5"
},

{
id:3,
title:"Private Tour Guide",
location:"Watamu",
price:70,
currency:"USD",
image:"https://images.unsplash.com/photo-1527631746610-bca00a040d60"
},

{
id:4,
title:"Hippo Boat Ride",
location:"Kisumu",
price:40,
currency:"USD",
image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
},

{
id:5,
title:"Lake Victoria Sunset Cruise",
location:"Kisumu",
price:60,
currency:"USD",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
},

{
id:6,
title:"Game Drive",
location:"Maasai Mara",
price:120,
currency:"USD",
image:"https://images.unsplash.com/photo-1516426122078-c23e76319801"
}

];
function renderExperiences(){

const container=document.getElementById("experienceContainer");

if(!container) return;

container.innerHTML=experiences.map(exp=>`

<div class="experience-card">

<img src="${exp.image}">

<div class="experience-info">

<h3>${exp.title}</h3>

<p>${exp.location}</p>

<strong>${exp.currency} ${exp.price}</strong>

<button onclick="bookExperience(${exp.id})">

Explore

</button>

</div>

</div>

`).join("");

}
function goToListings(){

const destination=document.getElementById("destinationInput").value;

const checkIn=document.getElementById("checkIn").value;

const checkOut=document.getElementById("checkOut").value;

const guests=document.getElementById("guests").value;

localStorage.setItem("search",JSON.stringify({

destination,
checkIn,
checkOut,
guests

}));

window.location="listings.html";

}

/*==================================
MOBILE MENU
==================================*/

function toggleMenu(){

const nav=document.querySelector(".navbar nav");

nav.classList.toggle("show-menu");

}
/*==================================
NAVBAR SCROLL
==================================*/

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>80){

navbar.classList.add("navbar-scroll");

}

else{

navbar.classList.remove("navbar-scroll");

}

});


/*==================================
DESTINATION SEARCH
==================================*/

function searchDestination(destination){

localStorage.setItem("search",JSON.stringify({

destination

}));

window.location="listings.html";

}

function viewStay(id){

localStorage.setItem("selectedStay",id);

window.location="listing-details.html";

}
function bookExperience(id){

localStorage.setItem("selectedExperience",id);

window.location="experience.html";

}
function subscribeNewsletter(){

const email=document.getElementById("newsletterEmail");

if(!email.value){

alert("Enter your email");

return;

}

alert("Thanks for subscribing!");

email.value="";

}
window.addEventListener("load",()=>{

const loader =
document.getElementById("loader");

if(!loader) return;

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},400);

},700);

});
const travelTips = [

{
title:"Watamu",
text:"Best time to visit is July to October."
},

{
title:"Kisumu",
text:"Enjoy sunset cruises on Lake Victoria."
},

{
title:"Maasai Mara",
text:"Witness the Great Migration from July."
},

{
title:"Naivasha",
text:"Boat rides are best early in the morning."
}

];

let currentTip = 0;

function rotateTips(){

const title = document.getElementById("tipTitle");
const text = document.getElementById("tipText");

if(!title) return;

currentTip++;

if(currentTip>=travelTips.length){

currentTip=0;

}

title.innerText=travelTips[currentTip].title;

text.innerText=travelTips[currentTip].text;

}

setInterval(rotateTips,4000);

function searchDestination(destination){

    localStorage.setItem(
        "searchDestination",
        destination
    );

    window.location.href =
        "listings.html";

}

function viewDeals(){

    localStorage.setItem(
        "showDeals",
        true
    );

    window.location.href =
        "listings.html";

}
function openProperty(id){

    localStorage.setItem(
        "selectedProperty",
        id
    );

    window.location.href =
        "property.html";

}
function openExperience(id){

    localStorage.setItem(
        "selectedExperience",
        id
    );

    window.location.href =
        "experience.html";

}
function subscribeNewsletter(){

const email =
document.getElementById("newsletterEmail");

if(!email) return;

if(email.value.trim() === ""){

alert("Please enter your email");

return;

}

alert("Thank you for subscribing!");

email.value = "";

}
function filterCategory(category){

    localStorage.setItem(
        "selectedCategory",
        category
    );
    let filtered = allListings;

if(selectedCategory){

    filtered = filtered.filter(item =>
        item.type === selectedCategory
    );

}

    window.location.href =
        "listings.html";

}
function renderFeaturedStays(){

const container =
document.getElementById("featuredContainer");

if(!container) return;

container.innerHTML = featuredStays.map(stay => `

<div class="featured-card">

<img src="${stay.image}" alt="${stay.name}">

<div class="featured-info">

<span class="tag">${stay.type}</span>

<h3>${stay.name}</h3>

<p>${stay.location}</p>

<div class="featured-bottom">

<strong>KES ${stay.price.toLocaleString()}/night</strong>

<span>⭐ ${stay.rating}</span>

</div>

<button onclick="viewStay(${stay.id})">

View Stay

</button>

</div>

</div>

`).join("");

}

document.addEventListener("DOMContentLoaded",()=>{

renderFeaturedStays();

renderExperiences();

});
/* ==========================
   DARK MODE
========================== */

const themeBtn =
document.getElementById("themeToggle");

if(themeBtn){

const savedTheme =
localStorage.getItem("stayhubTheme");

if(savedTheme === "dark"){

document.body.classList.add("dark-mode");

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem(
"stayhubTheme",
"dark"
);

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem(
"stayhubTheme",
"light"
);

themeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';

}

});

}