// =========================================
// STAYHUB LISTINGS
// Part 1 - Core Engine
// =========================================

// Make sure properties.js is loaded BEFORE listings.js

let filteredProperties = [...properties];

let currentPage = 1;

const propertiesPerPage = 12;

let selectedProperty = null;

let wishlist =
JSON.parse(localStorage.getItem("stayhubWishlist")) || [];


// =========================================
// FILTER STATE
// =========================================

const filters = {

    search: "",

    destination: "All",

    category: "All",

    maxPrice: Infinity,

    minRating: 0,

    guests: 0,

    amenities: []

};



// =========================================
// FORMAT PRICE
// =========================================

function formatPrice(price){

    return "KES " + price.toLocaleString();

}



// =========================================
// CREATE PROPERTY CARD
// =========================================

function createPropertyCard(property){

    const liked =
    wishlist.includes(property.id);

    return `

<div class="property-card">

<div class="property-image">

<img
src="${property.gallery[0]}"
alt="${property.name}">

${property.discount > 0 ?

`<span class="discount-badge">

-${property.discount}%

</span>`

:

""}

<button
class="wishlist-btn"
onclick="toggleWishlist(${property.id})">

<i class="${liked ?

'fa-solid'

:

'fa-regular'}

fa-heart"></i>

</button>

</div>



<div class="property-info">

<div class="property-rating">

⭐ ${property.rating}

<span>

(${property.reviews} reviews)

</span>

</div>


<h3>

${property.name}

</h3>


<p class="location">

<i class="fa-solid fa-location-dot"></i>

${property.location}, ${property.county}

</p>



<div class="property-meta">

<span>

🛏 ${property.bedrooms} Bedrooms

</span>

<span>

🛁 ${property.bathrooms} Baths

</span>

<span>

👥 ${property.guests} Guests

</span>

</div>



<div class="property-amenities">

${property.amenities

.slice(0,3)

.map(item=>`<span>${item}</span>`)

.join("")}

</div>



<div class="property-footer">

<div>

<h3>

${formatPrice(property.price)}

</h3>

<p>

per night

</p>

</div>



<div class="property-buttons">

<button

class="details-btn"

onclick="viewProperty(${property.id})">

Details

</button>

<button

class="book-btn"

onclick="bookProperty(${property.id})">

Book Now

</button>

</div>

</div>

</div>

</div>

`;

}


// MOBILE MENU
// =====================================
function toggleMobileMenu(){

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("active");

}
// =========================================
// RENDER PROPERTIES
// =========================================

function renderProperties(){

const listingGrid =

document.getElementById("listingGrid");

if(!listingGrid) return;



const start =

(currentPage-1)*propertiesPerPage;



const end =

start + propertiesPerPage;



const pageItems =

filteredProperties.slice(start,end);



listingGrid.innerHTML =

pageItems

.map(createPropertyCard)

.join("");



updateResults();

renderPagination();

}



// =========================================
// RESULTS
// =========================================

function updateResults(){

const results =

document.getElementById("resultsCount");

if(!results) return;

results.textContent =

`Showing ${filteredProperties.length} premium stays`;

}



// =========================================
// PAGINATION
// =========================================

function renderPagination(){

const container =

document.getElementById("paginationNumbers");

if(!container) return;



const totalPages =

Math.ceil(

filteredProperties.length /

propertiesPerPage

);



let html = "";



for(

let page=1;

page<=totalPages;

page++

){

html += `

<button

class="page-btn

${page===currentPage ?

'active'

:

''}"

onclick="goToPage(${page})">

${page}

</button>

`;

}



container.innerHTML = html;

}



// =========================================
// CHANGE PAGE
// =========================================

function goToPage(page){

currentPage = page;

renderProperties();

window.scrollTo({

top:0,

behavior:"smooth"

});

}



// =========================================
// PREVIOUS PAGE
// =========================================

function previousPage(){

if(currentPage>1){

currentPage--;

renderProperties();

}

}



// =========================================
// NEXT PAGE
// =========================================

function nextPage(){

const total =

Math.ceil(

filteredProperties.length /

propertiesPerPage

);

if(currentPage<total){

currentPage++;

renderProperties();

}

}
// =========================================
// APPLY FILTERS
// =========================================

function applyFilters() {

    filteredProperties = properties.filter(property => {

        const matchesSearch =
            property.name.toLowerCase().includes(filters.search) ||
            property.location.toLowerCase().includes(filters.search) ||
            property.county.toLowerCase().includes(filters.search);

        const matchesDestination =
            filters.destination === "All" ||
            property.location === filters.destination;

        const matchesCategory =
            filters.category === "All" ||
            property.category === filters.category;

        const matchesPrice =
            property.price <= filters.maxPrice;

        const matchesRating =
            property.rating >= filters.minRating;

        const matchesGuests =
            property.guests >= filters.guests;

        const matchesAmenities =
            filters.amenities.every(item =>
                property.amenities.includes(item)
            );

        return (
            matchesSearch &&
            matchesDestination &&
            matchesCategory &&
            matchesPrice &&
            matchesRating &&
            matchesGuests &&
            matchesAmenities
        );

    });

    currentPage = 1;

    renderProperties();

}



// =========================================
// LIVE SEARCH
// =========================================

function searchListings() {

    const input =
        document.getElementById("destinationSearch");

    if (!input) return;

    filters.search =
        input.value.toLowerCase().trim();

    applyFilters();

}



// =========================================
// DESTINATION FILTER
// =========================================

function filterDestination(destination) {

    filters.destination = destination;

    applyFilters();

}



// =========================================
// CATEGORY FILTER
// =========================================

function filterCategory(category) {

    filters.category = category;

    applyFilters();

}



// =========================================
// PRICE FILTER
// =========================================

function filterPrice(price) {

    filters.maxPrice = price;

    applyFilters();

}



// =========================================
// RATING FILTER
// =========================================

function filterRating(rating) {

    filters.minRating = rating;

    applyFilters();

}



// =========================================
// GUEST FILTER
// =========================================

function filterGuests(guests) {

    filters.guests = guests;

    applyFilters();

}



// =========================================
// AMENITY FILTER
// =========================================

function toggleAmenity(amenity) {

    if (filters.amenities.includes(amenity)) {

        filters.amenities =
            filters.amenities.filter(item => item !== amenity);

    } else {

        filters.amenities.push(amenity);

    }

    applyFilters();

}



// =========================================
// RESET FILTERS
// =========================================

function resetFilters() {

    filters.search = "";

    filters.destination = "All";

    filters.category = "All";

    filters.maxPrice = Infinity;

    filters.minRating = 0;

    filters.guests = 0;

    filters.amenities = [];

    const search =
        document.getElementById("destinationSearch");

    if (search) {

        search.value = "";

    }

    applyFilters();

}



// =========================================
// SORTING
// =========================================

function sortListings() {

    const sort =
        document.getElementById("sortListings").value;

    switch (sort) {

        case "priceLow":

            filteredProperties.sort((a, b) => a.price - b.price);

            break;

        case "priceHigh":

            filteredProperties.sort((a, b) => b.price - a.price);

            break;

        case "rating":

            filteredProperties.sort((a, b) => b.rating - a.rating);

            break;

        case "newest":

            filteredProperties.sort((a, b) => b.id - a.id);

            break;

        default:

            filteredProperties.sort((a, b) => {

                if (a.featured && !b.featured) return -1;

                if (!a.featured && b.featured) return 1;

                return b.rating - a.rating;

            });

    }

    renderProperties();

}



// =========================================
// WISHLIST
// =========================================

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist = wishlist.filter(item => item !== id);

        showToast("Removed from wishlist ❤️");

    } else {

        wishlist.push(id);

        showToast("Added to wishlist ❤️");

    }

    localStorage.setItem(

        "stayhubWishlist",

        JSON.stringify(wishlist)

    );

    renderProperties();

}

// =========================================
// VIEW PROPERTY
// =========================================

function viewProperty(id) {

    selectedProperty = properties.find(property => property.id === id);

    if (!selectedProperty) return;

    const modal = document.getElementById("propertyModal");
    const content = document.getElementById("propertyContent");

    content.innerHTML = `

    <div class="property-details">

        <img
        class="property-hero"
        src="${selectedProperty.gallery[0]}"
        alt="${selectedProperty.name}">

        <div class="property-gallery">

            ${selectedProperty.gallery.map(image => `

                <img src="${image}" alt="Gallery">

            `).join("")}

        </div>

        <h2>${selectedProperty.name}</h2>

        <p class="property-location">

            <i class="fa-solid fa-location-dot"></i>

            ${selectedProperty.location}, ${selectedProperty.county}

        </p>

        <div class="property-rating">

            ⭐ ${selectedProperty.rating}

            (${selectedProperty.reviews} Reviews)

        </div>

        <div class="property-price">

            <strong>${formatPrice(selectedProperty.price)}</strong>

            / night

        </div>

        <p class="property-description">

            ${selectedProperty.description}

        </p>

        <h3>Amenities</h3>

        <div class="amenity-list">

            ${selectedProperty.amenities.map(item => `

                <span>${item}</span>

            `).join("")}

        </div>

        <div class="host-card">

            <h3>Hosted by ${selectedProperty.host.name}</h3>

            <p>

                Host since ${selectedProperty.host.joined}

            </p>

            <p>

                ⭐ ${selectedProperty.host.rating} Super Host

            </p>

        </div>

        <button
        class="book-large-btn"
        onclick="bookProperty(${selectedProperty.id})">

            Book Now

        </button>

    </div>

    `;

    modal.style.display = "flex";

}



// =========================================
// CLOSE PROPERTY
// =========================================

function closeProperty() {

    document.getElementById("propertyModal").style.display = "none";

}



// =========================================
// BOOK PROPERTY
// =========================================

function bookProperty(id){

    selectedProperty =

    properties.find(property=>property.id===id);

    if(!selectedProperty) return;

    document.getElementById("bookingModal").style.display="flex";

}



// =========================================
// CLOSE BOOKING
// =========================================

function closeBooking(){

    document.getElementById("bookingModal").style.display="none";

}



// =========================================
// BOOKING FORM
// =========================================

const bookingForm =

document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit",function(e){

    e.preventDefault();

    if(!selectedProperty) return;

    const checkIn =

    document.getElementById("bookingCheckIn").value;

    const checkOut =

    document.getElementById("bookingCheckOut").value;

    if(checkIn==="" || checkOut===""){

        alert("Please select check-in and check-out dates.");

        return;

    }

    const start = new Date(checkIn);

    const end = new Date(checkOut);

    const nights =

    Math.ceil((end-start)/(1000*60*60*24));

    if(nights<=0){

        alert("Invalid booking dates.");

        return;

    }

    const total =

    nights * selectedProperty.price;

    const bookingRef =

    "SH" +

    Math.floor(Math.random()*900000+100000);

    showToast(

        "Booking Confirmed ✔"

    );

    alert(

`Booking Successful!

Reference:

${bookingRef}

Property:

${selectedProperty.name}

Nights:

${nights}

Total:

${formatPrice(total)}

Thank you for choosing StayHub.`

    );

    closeBooking();

    bookingForm.reset();

});

}



// =========================================
// RECENTLY VIEWED
// =========================================

function saveRecentlyViewed(id){

    let recent =

    JSON.parse(

    localStorage.getItem("stayhubRecent")

    ) || [];

    recent = recent.filter(item=>item!==id);

    recent.unshift(id);

    recent = recent.slice(0,6);

    localStorage.setItem(

    "stayhubRecent",

    JSON.stringify(recent)

    );

}



function loadRecentlyViewed(){

    const container =

    document.getElementById("recentGrid");

    if(!container) return;

    const recent =

    JSON.parse(

    localStorage.getItem("stayhubRecent")

    ) || [];

    const data =

    recent

    .map(id=>properties.find(p=>p.id===id))

    .filter(Boolean);

    container.innerHTML =

    data

    .map(createPropertyCard)

    .join("");

}



// =========================================
// UPDATE RECENTLY VIEWED
// =========================================

const originalViewProperty = viewProperty;

viewProperty = function(id){

    saveRecentlyViewed(id);

    loadRecentlyViewed();

    originalViewProperty(id);

};
// =========================================
// TOAST NOTIFICATIONS
// =========================================

function showToast(message){

    const toast = document.getElementById("toast");

    const text = document.getElementById("toastText");

    if(!toast || !text) return;

    text.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}



// =========================================
// MAP
// =========================================

function openMap(){

    const modal = document.getElementById("mapModal");

    if(modal){

        modal.style.display = "flex";

    }

}



function closeMap(){

    const modal = document.getElementById("mapModal");

    if(modal){

        modal.style.display = "none";

    }

}



// =========================================
// COMPARE DRAWER
// =========================================

let compareList = [];



function openCompare(){

    document

    .getElementById("compareDrawer")

    .classList.add("open");

}



function closeCompare(){

    document

    .getElementById("compareDrawer")

    .classList.remove("open");

}



function addToCompare(id){

    if(compareList.includes(id)){

        showToast("Already added");

        return;

    }

    if(compareList.length>=3){

        showToast("Maximum 3 properties");

        return;

    }

    compareList.push(id);

    renderCompare();

}



function renderCompare(){

    const container =

    document.getElementById("compareItems");

    if(!container) return;

    container.innerHTML =

    compareList.map(id=>{

        const p = properties.find(x=>x.id===id);

        if(!p) return "";

        return `

        <div class="compare-card">

            <img src="${p.gallery[0]}">

            <h4>${p.name}</h4>

            <p>${formatPrice(p.price)}</p>

            <p>⭐ ${p.rating}</p>

        </div>

        `;

    }).join("");

}



// =========================================
// AI CHAT
// =========================================

function toggleAssistant(){

    const widget =

    document.getElementById("chatWidget");

    if(!widget) return;

    widget.classList.toggle("show");

}



function sendMessage(){

    const input =

    document.getElementById("chatInput");

    const body =

    document.getElementById("chatMessages");

    if(!input || !body) return;

    if(input.value.trim()==="") return;

    body.innerHTML += `

    <div class="user-message">

        ${input.value}

    </div>

    `;

    setTimeout(()=>{

        body.innerHTML += `

        <div class="bot-message">

        Thanks for your question.

        Our AI booking assistant will be connected soon.

        </div>

        `;

        body.scrollTop = body.scrollHeight;

    },600);

    input.value="";

}



// =========================================
// COOKIE BANNER
// =========================================

function acceptCookies(){

    localStorage.setItem(

        "cookiesAccepted",

        "yes"

    );

    document.getElementById("cookieBanner").style.display="none";

}



function declineCookies(){

    document.getElementById("cookieBanner").style.display="none";

}



// =========================================
// BACK TO TOP
// =========================================

function scrollTopPage(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



window.addEventListener("scroll",()=>{

    const button =

    document.getElementById("backTop");

    if(!button) return;

    if(window.scrollY>500){

        button.classList.add("show");

    }

    else{

        button.classList.remove("show");

    }

});



// =========================================
// VIEW DEALS
// =========================================

function viewDeals(){

    filters.maxPrice = 10000;

    applyFilters();

    showToast("Showing today's best deals");

}



// =========================================
// THEME
// =========================================

const themeToggle =

document.getElementById("themeToggle");

if(themeToggle){

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    localStorage.setItem(

        "stayhubTheme",

        document.body.classList.contains("dark")

        ? "dark"

        : "light"

    );

});

}



const savedTheme =

localStorage.getItem("stayhubTheme");

if(savedTheme==="dark"){

    document.body.classList.add("dark");

}



// =========================================
// MOBILE MENU
// =========================================

function toggleMenu(){

    const nav =

    document.querySelector("nav");

    if(nav){

        nav.classList.toggle("show");

    }

}



// =========================================
// INITIALIZE
// =========================================

document.addEventListener("DOMContentLoaded",()=>{

    renderProperties();

    loadRecentlyViewed();

    const search =

    document.getElementById("destinationSearch");

    if(search){

        search.addEventListener("keyup",searchListings);

    }

    if(localStorage.getItem("cookiesAccepted")==="yes"){

        const banner =

        document.getElementById("cookieBanner");

        if(banner){

            banner.style.display="none";

        }

    }

    console.log("✅ StayHub Listings Loaded");

});
