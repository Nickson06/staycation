// ======================================
// STAYHUB WISHLIST
// ======================================

let wishlist = JSON.parse(

    localStorage.getItem("stayhubWishlist")

) || [];

let filteredWishlist = [...wishlist];

let currentFilter = "All";
// ======================================
// FORMAT PRICE
// ======================================

function formatPrice(price){

    return "KES " +

    Number(price).toLocaleString();

}
// ======================================
// LOAD WISHLIST
// ======================================

document.addEventListener(

"DOMContentLoaded",

()=>{

    renderWishlist();

    updateSummary();

    loadRecommendations();

    loadRecentlyViewed();

});
// ======================================
// RENDER WISHLIST
// ======================================

function renderWishlist(){

    const grid=document.getElementById(

        "wishlistGrid"

    );

    const empty=document.getElementById(

        "emptyWishlist"

    );

    if(!grid) return;

    if(filteredWishlist.length===0){

        grid.style.display="none";

        empty.style.display="block";

        return;

    }

    grid.style.display="grid";

    empty.style.display="none";

    grid.innerHTML=

    filteredWishlist

    .map(createWishlistCard)

    .join("");

}
// ======================================
// CREATE CARD
// ======================================

function createWishlistCard(item){

return `

<div class="wishlist-card">

<div class="wishlist-image">

<img

src="${item.image}"

alt="${item.name || item.title}">

<button

class="wishlist-heart"

onclick="removeWishlist(${item.id})">

<i class="fa-solid fa-heart"></i>

</button>

${item.featured ?

`<span class="featured-badge">

Featured

</span>`

:""}

<span class="rating-badge">

⭐ ${item.rating}

</span>

</div>

<div class="wishlist-content">

<h3>

${item.name || item.title}

</h3>

<p class="location">

<i class="fa-solid fa-location-dot"></i>

${item.location}

</p>

<div class="card-meta">

<span>

<i class="fa-solid fa-star"></i>

${item.reviews} Reviews

</span>

<span>

${item.category}

</span>

</div>

<div class="card-price">

<div>

<h2>

${formatPrice(item.price)}

</h2>

<small>

per night

</small>

</div>

</div>

<div class="card-buttons">

<button

class="details-btn"

onclick="viewItem(${item.id})">

Details

</button>

<button

class="book-btn"

onclick="bookItem(${item.id})">

Book Now

</button>

</div>

</div>

</div>

`;

}
// ======================================
// SUMMARY
// ======================================

function updateSummary(){

const listings=

wishlist.filter(

i=>i.type==="Stay"

).length;

const experiences=

wishlist.filter(

i=>i.type==="Experience"

).length;

const destinations=

new Set(

wishlist.map(

i=>i.location

)

).size;

const total=

wishlist.reduce(

(sum,item)=>

sum+item.price,

0

);

document.getElementById(

"savedListings"

).textContent=listings;

document.getElementById(

"savedExperiences"

).textContent=experiences;

document.getElementById(

"savedDestinations"

).textContent=destinations;

document.getElementById(

"wishlistValue"

).textContent=

formatPrice(total);

}
// ======================================
// REMOVE FROM WISHLIST
// ======================================

function removeWishlist(id){

wishlist = wishlist.filter(

item => item.id !== id

);

saveWishlist();

renderWishlist();

updateSummary();

showToast("Removed from wishlist");

}
// ======================================
// CLEAR ALL
// ======================================

function clearWishlist(){

if(!confirm("Clear entire wishlist?")) return;

wishlist = [];

saveWishlist();

renderWishlist();

updateSummary();

showToast("Wishlist cleared");

}
// ======================================
// SAVE
// ======================================

function saveWishlist(){

localStorage.setItem(

"stayhubWishlist",

JSON.stringify(wishlist)

);

}
// ======================================
// SEARCH WISHLIST
// ======================================

document.getElementById(

"wishlistSearch"

).addEventListener(

"input",

function(e){

const value = e.target.value.toLowerCase();

filteredWishlist = wishlist.filter(

item =>

(item.name || item.title)

.toLowerCase()

.includes(value)

);

renderWishlist();

}

);
// ======================================
// FILTER
// ======================================

function filterWishlist(type){

currentFilter = type;

document.querySelectorAll(

".filter-chip"

).forEach(btn=>{

btn.classList.remove("active");

});

event.target.classList.add("active");

if(type==="All"){

filteredWishlist = [...wishlist];

}else{

filteredWishlist = wishlist.filter(

item => item.type === type

);

}

renderWishlist();

}
// ======================================
// SORT
// ======================================

function sortWishlist(){

filteredWishlist.sort(

(a,b)=> b.price - a.price

);

renderWishlist();

showToast("Sorted by price");

}
// ======================================
// SHARE FUNCTIONS
// ======================================

function copyWishlist(){

navigator.clipboard.writeText(

window.location.href

);

showToast("Link copied!");

}

function shareWhatsApp(){

window.open(

`https://wa.me/?text=

Check my StayHub wishlist: ${window.location.href}`

);

}

function shareFacebook(){

window.open(

`https://facebook.com/sharer/sharer.php?u=

${window.location.href}`

);

}
// ======================================
// VIEW & BOOK
// ======================================

function viewItem(id){

console.log("Viewing item",id);

}

function bookItem(id){

console.log("Booking item",id);

}
// ======================================
// TOAST
// ======================================

function showToast(message){

const toast=document.getElementById("toast");

const text=document.getElementById("toastText");

text.textContent=message;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2500);

}
// ======================================
// MOBILE MENU TOGGLE
// ======================================

function toggleMobileMenu(){

const nav = document.querySelector(".nav-links");

nav.classList.toggle("show");

}

// ======================================
// HERO NAVIGATION
// ======================================

function exploreListings(){
    window.location.href = "listings.html";
}

function exploreExperiences(){
    window.location.href = "experiences.html";
}
// ======================================
// WISHLIST TOOLS
// ======================================

function selectAllWishlist(){

const items = document.querySelectorAll(".wishlist-card");

items.forEach(card => {

card.style.border = "2px solid #0ea5e9";

});

showToast("All items selected");

}

function compareWishlist(){

if(wishlist.length < 2){

showToast("Add more items to compare");

return;

}

showToast("Compare mode coming soon");

}

function downloadWishlist(){

const printWindow = window.open("", "_blank");

let content = `

<html>

<head>

<title>StayHub Wishlist</title>

<style>

body{

font-family: Arial;

padding:20px;

}

h1{

color:#0ea5e9;

}

.item{

border-bottom:1px solid #ddd;

padding:10px 0;

}

.price{

color:#0ea5e9;

font-weight:bold;

}

</style>

</head>

<body>

<h1>My StayHub Wishlist</h1>

`;

wishlist.forEach(item=>{

content += `

<div class="item">

<h3>${item.name || item.title}</h3>

<p>${item.location}</p>

<p class="price">KES ${item.price}</p>

</div>

`;

});

content += `</body></html>`;

printWindow.document.write(content);

printWindow.document.close();

printWindow.print();

showToast("Opening print view...");

}
function compareWishlist(){

if(wishlist.length < 2){

showToast("Add at least 2 items to compare");

return;

}

let compareHTML = `

<div style="display:flex;gap:20px;font-family:Arial;padding:20px;">

`;

wishlist.slice(0,3).forEach(item=>{

compareHTML += `

<div style="border:1px solid #ddd;padding:15px;width:100%;border-radius:10px;">

<h3>${item.name || item.title}</h3>

<p>📍 ${item.location}</p>

<p>⭐ ${item.rating}</p>

<p>💰 KES ${item.price}</p>

<p>🏷️ ${item.category}</p>

</div>

`;

});

compareHTML += `</div>`;

const win = window.open("", "_blank");

win.document.write(compareHTML);

win.document.close();

}

function selectAllWishlist(){

selectedItems = [...wishlist];

showToast(`${selectedItems.length} items selected`);

console.log("Selected:", selectedItems);

}
function bulkDelete(){

if(selectedItems.length === 0){

showToast("No items selected");

return;

}

wishlist = wishlist.filter(

item => !selectedItems.includes(item)

);

selectedItems = [];

saveWishlist();

renderWishlist();

updateSummary();

showToast("Items deleted");

}
function exploreListings(){
window.location.href="listings.html";
}

function exploreExperiences(){
window.location.href="experiences.html";
}
function toggleAssistant(){

showToast(

"StayHub AI Assistant is coming soon!"

);

}