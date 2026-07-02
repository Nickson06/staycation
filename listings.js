/*=========================================================
                STAYHUB PRO V6
                 LISTINGS.JS
=========================================================*/

/*=========================================================
                    PROPERTY DATABASE
=========================================================*/

const listings = [

{
    id:1,
    name:"Coral Bay Resort",
    location:"Watamu",
    county:"Kilifi",
    category:"Hotel",
    price:8500,
    rating:4.9,
    reviews:241,
    guests:4,
    beds:2,
    bathrooms:2,
    favourite:true,
    verified:true,
    instantBook:true,
    image:"https://images.unsplash.com/photo-1501117716987-c8e1ecb2106e?auto=format&fit=crop&w=1200&q=80",
    amenities:["WiFi","Pool","Parking","Breakfast"],
    description:"Luxury beachfront resort overlooking Watamu Beach."
},

{
    id:2,
    name:"Diani Ocean Villa",
    location:"Diani",
    county:"Kwale",
    category:"Villa",
    price:12000,
    rating:4.8,
    reviews:183,
    guests:6,
    beds:3,
    bathrooms:3,
    favourite:true,
    verified:true,
    instantBook:true,
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    amenities:["WiFi","Pool","Kitchen","Ocean View"],
    description:"Private luxury villa a few steps from Diani Beach."
},

{
    id:3,
    name:"Nairobi City Suites",
    location:"Nairobi",
    county:"Nairobi",
    category:"Hotel",
    price:7200,
    rating:4.7,
    reviews:390,
    guests:2,
    beds:1,
    bathrooms:1,
    favourite:false,
    verified:true,
    instantBook:true,
    image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    amenities:["WiFi","Gym","Restaurant","Parking"],
    description:"Modern hotel located in Nairobi CBD."
},

{
    id:4,
    name:"Kisumu Sunset Apartment",
    location:"Kisumu",
    county:"Kisumu",
    category:"Apartment",
    price:6200,
    rating:4.8,
    reviews:165,
    guests:4,
    beds:2,
    bathrooms:2,
    favourite:true,
    verified:true,
    instantBook:true,
    image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    amenities:["WiFi","Kitchen","Parking","Lake View"],
    description:"Beautiful apartment overlooking Lake Victoria."
},

{
    id:5,
    name:"Naivasha Safari Lodge",
    location:"Naivasha",
    county:"Nakuru",
    category:"Safari Lodge",
    price:5600,
    rating:4.9,
    reviews:142,
    guests:4,
    beds:2,
    bathrooms:2,
    favourite:false,
    verified:true,
    instantBook:true,
    image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    amenities:["Pool","Restaurant","Parking","Game Drives"],
    description:"Relaxing lodge near Lake Naivasha."
},

{
    id:6,
    name:"Maasai Mara Luxury Camp",
    location:"Maasai Mara",
    county:"Narok",
    category:"Luxury Camp",
    price:18500,
    rating:5.0,
    reviews:281,
    guests:2,
    beds:1,
    bathrooms:1,
    favourite:true,
    verified:true,
    instantBook:false,
    image:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    amenities:["Safari","Campfire","Guide","Restaurant"],
    description:"Luxury tented camp inside Maasai Mara."
},

{
    id:7,
    name:"Mombasa Beach Hotel",
    location:"Mombasa",
    county:"Mombasa",
    category:"Hotel",
    price:9100,
    rating:4.6,
    reviews:174,
    guests:4,
    beds:2,
    bathrooms:2,
    favourite:false,
    verified:true,
    instantBook:true,
    image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    amenities:["Beach","Restaurant","Pool","WiFi"],
    description:"Luxury beachfront hotel."
},

{
    id:8,
    name:"Lamu Heritage Villa",
    location:"Lamu",
    county:"Lamu",
    category:"Villa",
    price:14500,
    rating:4.9,
    reviews:111,
    guests:8,
    beds:4,
    bathrooms:4,
    favourite:true,
    verified:true,
    instantBook:true,
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    amenities:["Chef","Pool","Kitchen","Ocean View"],
    description:"Traditional Swahili villa with modern luxury."
}

];

/*=========================================================
                GLOBAL VARIABLES
=========================================================*/

let filteredListings = [...listings];

let currentPage = 1;

let currentCategory = "All";

let currentDestination = "All";

let currentProperty = null;

const listingsPerPage = 9;

/*=========================================================
                INITIALIZATION
=========================================================*/


/* ===========================================================
   PAGINATION
=========================================================== */

function renderPagination() {

    const section = document.querySelector(".pagination-section");

    if (!section) return;

    const totalPages = Math.ceil(filteredListings.length / listingsPerPage);

    let html = "";

    html += `
        <button
            onclick="changePage(${currentPage - 1})"
            ${currentPage === 1 ? "disabled" : ""}>
            <i class="fa-solid fa-chevron-left"></i>
        </button>
    `;

    for (let i = 1; i <= totalPages; i++) {

        html += `
            <button
                class="${i === currentPage ? "active" : ""}"
                onclick="changePage(${i})">
                ${i}
            </button>
        `;

    }

    html += `
        <button
            onclick="changePage(${currentPage + 1})"
            ${currentPage === totalPages ? "disabled" : ""}>
            <i class="fa-solid fa-chevron-right"></i>
        </button>
    `;

    section.innerHTML = html;

}

function changePage(page) {

    const totalPages = Math.ceil(filteredListings.length / listingsPerPage);

    if (page < 1 || page > totalPages) return;

    currentPage = page;

    renderListings();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

/* ===========================================================
   SEARCH
=========================================================== */

function searchListings() {

    const destination =
        document.getElementById("destinationSearch")?.value
        .trim()
        .toLowerCase() || "";

    filteredListings = listings.filter(property => {

        return (
            property.name.toLowerCase().includes(destination) ||
            property.location.toLowerCase().includes(destination) ||
            property.county.toLowerCase().includes(destination) ||
            property.category.toLowerCase().includes(destination)
        );

    });

    currentPage = 1;

    renderListings();

}

/* ===========================================================
   LIVE SEARCH
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("destinationSearch");

    if (!input) return;

    input.addEventListener("input", searchListings);

});
/* ===========================================================
   DESTINATION FILTER
=========================================================== */

function filterDestination(destination) {

    currentDestination = destination;

    document.querySelectorAll(".chip").forEach(chip => {

        chip.classList.remove("active");

        if (chip.textContent.toLowerCase().includes(destination.toLowerCase())) {

            chip.classList.add("active");

        }

    });

    applyFilters();

}

/* ===========================================================
   CATEGORY FILTER
=========================================================== */

function filterCategory(category) {

    currentCategory = category;

    document.querySelectorAll(".filter-btn").forEach(button => {

        button.classList.remove("active");

        if (button.textContent.toLowerCase().includes(category.toLowerCase())) {

            button.classList.add("active");

        }

    });

    applyFilters();

}

/* ===========================================================
   APPLY FILTERS
=========================================================== */

function applyFilters() {

    filteredListings = listings.filter(property => {

        const destinationMatch =

            currentDestination === "All" ||

            property.location === currentDestination;

        const categoryMatch =

            currentCategory === "All" ||

            property.category === currentCategory;

        return destinationMatch && categoryMatch;

    });

    currentPage = 1;

    renderListings();

}

/* ===========================================================
   SORT LISTINGS
=========================================================== */

function sortListings() {

    const value = document.getElementById("sortListings").value;

    switch (value) {

        case "priceLow":

            filteredListings.sort((a, b) => a.price - b.price);

            break;

        case "priceHigh":

            filteredListings.sort((a, b) => b.price - a.price);

            break;

        case "rating":

            filteredListings.sort((a, b) => b.rating - a.rating);

            break;

        case "newest":

            filteredListings.sort((a, b) => b.id - a.id);

            break;

        default:

            filteredListings.sort((a, b) => b.rating - a.rating);

            break;

    }

    renderListings();

}

/* ===========================================================
   LOAD SEARCH FROM HOMEPAGE
=========================================================== */

function loadHomepageSearch() {

    const saved = JSON.parse(localStorage.getItem("search"));

    if (!saved) return;

    if (saved.destination) {

        document.getElementById("destinationSearch").value = saved.destination;

        filteredListings = listings.filter(property =>

            property.location.toLowerCase().includes(saved.destination.toLowerCase()) ||

            property.name.toLowerCase().includes(saved.destination.toLowerCase()) ||

            property.county.toLowerCase().includes(saved.destination.toLowerCase())

        );

    }

    renderListings();

}

/* ===========================================================
   INITIALISE SEARCH
=========================================================== */

function initialiseSearch() {

    const input = document.getElementById("destinationSearch");

    if (!input) return;

    input.addEventListener("keyup", searchListings);

}

/* ===========================================================
   PROPERTY DETAILS
=========================================================== */

function viewProperty(id) {

    const property = listings.find(item => item.id === id);

    if (!property) return;

    currentProperty = property;

    const modal = document.getElementById("propertyModal");
    const content = document.getElementById("propertyContent");

    if (!modal || !content) return;

    content.innerHTML = `

        <img
            src="${property.image}"
            class="property-modal-image">

        <h2>${property.name}</h2>

        <p>
            <i class="fa-solid fa-location-dot"></i>
            ${property.location}, ${property.county}
        </p>

        <div class="modal-rating">

            ⭐ ${property.rating}

            (${property.reviews} reviews)

        </div>

        <div class="modal-features">

            <span>${property.guests} Guests</span>

            <span>${property.beds} Beds</span>

            <span>${property.bathrooms} Bathrooms</span>

        </div>

        <h3>KES ${property.price.toLocaleString()}</h3>

        <p>${property.description}</p>

        <div class="modal-amenities">

            ${property.amenities.map(item => `
                <span>${item}</span>
            `).join("")}

        </div>

        <button
            class="book-btn"
            onclick="bookProperty(${property.id})">

            Book This Stay

        </button>

    `;

    modal.style.display = "flex";

}

function closeProperty() {

    document.getElementById("propertyModal").style.display = "none";

}

/* ===========================================================
   BOOK PROPERTY
=========================================================== */

function bookProperty(id) {

    currentProperty = listings.find(item => item.id === id);

    if (!currentProperty) return;

    document.getElementById("bookingModal").style.display = "flex";

}

function closeBooking() {

    document.getElementById("bookingModal").style.display = "none";

}

/* ===========================================================
   BOOKING FORM
=========================================================== */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        const booking = {

            property: currentProperty,

            date: new Date().toLocaleString()

        };

        let bookings =
            JSON.parse(localStorage.getItem("bookings")) || [];

        bookings.push(booking);

        localStorage.setItem(
            "bookings",
            JSON.stringify(bookings)
        );

        alert("Booking Successful!");

        closeBooking();

    });

}

/* ===========================================================
   WISHLIST
=========================================================== */

function toggleWishlist(id) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(item => item !== id);

        showToast("Removed from wishlist");

    } else {

        wishlist.push(id);

        showToast("Added to wishlist");

    }

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

}

/* ===========================================================
   NEWSLETTER
=========================================================== */

function subscribeNewsletter() {

    const email =
        document.getElementById("newsletterEmail");

    if (!email || email.value.trim() === "") {

        alert("Please enter your email.");

        return;

    }

    alert("Thanks for subscribing!");

    email.value = "";

}