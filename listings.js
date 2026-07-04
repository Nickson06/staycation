/*==================================================
    STAYHUB LISTINGS
    MODULE 1 - INITIALIZATION
==================================================*/

"use strict";

/*==================================================
    GLOBAL STATE
==================================================*/

let filteredProperties = [...properties];

let currentPage = 1;

const propertiesPerPage = 12;

let selectedProperty = null;

let wishlist =
JSON.parse(localStorage.getItem("stayhubWishlist")) || [];

const filters = {

    search: "",

    destination: "All Destinations",

    propertyTypes: [],

    maxPrice: 50000,

    minRating: 0,

    guests: 0,

    amenities: []

};


/*==================================================
    DOM ELEMENTS
==================================================*/

const listingGrid =
document.getElementById("listingGrid");

const resultsCount =
document.getElementById("resultsCount");

const destinationSearch =
document.getElementById("destinationSearch");

const destinationFilter =
document.getElementById("destinationFilter");

const sortListingsSelect =
document.getElementById("sortListings");

const themeToggle =
document.getElementById("themeToggle");

const bookingModal =
document.getElementById("bookingModal");

const propertyModal =
document.getElementById("propertyModal");


/*==================================================
    INITIALIZE APPLICATION
==================================================*/

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp(){

    console.log("🚀 StayHub Listings Loaded");

    loadTheme();

    attachEventListeners();

    renderProperties();

}


/*==================================================
    ATTACH EVENT LISTENERS
==================================================*/

function attachEventListeners(){

    /* Search */

    if(destinationSearch){

        destinationSearch.addEventListener(

            "input",

            searchListings

        );

    }
    const mobileButton =

document.getElementById(

"mobileMenuButton"

);

if(mobileButton){

    mobileButton.addEventListener(

        "click",

        toggleMobileMenu

    );

}


    /* Destination Filter */

    if(destinationFilter){

        destinationFilter.addEventListener(

            "change",

            function(){

                filterDestination(this.value);

            }

        );

    }


    /* Sorting */

    if(sortListingsSelect){

        sortListingsSelect.addEventListener(

            "change",

            sortListings

        );

    }


    /* Theme */

    if(themeToggle){

        themeToggle.addEventListener(

            "click",

            toggleTheme

        );

    }


    /* Reset Filters */

    const resetButton =

    document.querySelector(".reset-btn");

    if(resetButton){

        resetButton.addEventListener(

            "click",

            resetFilters

        );

    }


    /* Property Details Modal */

    document.querySelectorAll(

        "#propertyModal .close"

    ).forEach(button=>{

        button.addEventListener(

            "click",

            closeProperty

        );

    });


    /* Booking Modal */

    document.querySelectorAll(

        "#bookingModal .close"

    ).forEach(button=>{

        button.addEventListener(

            "click",

            closeBooking

        );

    });


    /* Close modal when clicking outside */

    window.addEventListener(

        "click",

        function(event){

            if(event.target===propertyModal){

                closeProperty();

            }

            if(event.target===bookingModal){

                closeBooking();

            }

        }

    );

}


/*==================================================
    MOBILE MENU
==================================================*/

function toggleMobileMenu(){

    const nav =

    document.querySelector(".nav-links");

    if(nav){

        nav.classList.toggle("show");

    }

}


/*==================================================
    PRICE FORMATTER
==================================================*/

function formatPrice(price){
/*==================================================
    MODULE 2 - PROPERTY RENDERING
==================================================*/


/*==================================================
    RENDER ALL PROPERTIES
==================================================*/

function renderProperties(){

    if(!listingGrid) return;

    const start =
    (currentPage - 1) * propertiesPerPage;

    const end =
    start + propertiesPerPage;

    const pageProperties =
    filteredProperties.slice(start,end);

    if(pageProperties.length===0){

        listingGrid.innerHTML = emptyState();

        updateResults();

        renderPagination();

        return;

    }

    listingGrid.innerHTML =

        pageProperties

        .map(createPropertyCard)

        .join("");

    updateResults();

    renderPagination();

}



/*==================================================
    CREATE PROPERTY CARD
==================================================*/

function createPropertyCard(property){

    const liked =
    wishlist.includes(property.id);

    return `

<div class="property-card">

    <div class="property-image">

        <img
        src="${property.gallery[0]}"
        alt="${property.name}">

        ${property.discount>0 ?

        `<div class="discount-badge">

            -${property.discount}%

        </div>`

        :

        ""}

        ${property.featured ?

        `<div class="favorite-badge">

            Guest Favourite

        </div>`

        :

        ""}

        <button
        class="wishlist-btn"
        onclick="toggleWishlist(${property.id})">

            <i class="fa-${liked ? "solid" : "regular"} fa-heart"></i>

        </button>

    </div>

    <div class="property-info">

        <div class="property-rating">

            <span>

                ⭐ ${property.rating}

            </span>

            <small>

                ${property.reviews} reviews

            </small>

        </div>

        <h3 class="property-title">

            ${property.name}

        </h3>

        <div class="property-location">

            <i class="fa-solid fa-location-dot"></i>

            ${property.location} • ${property.county}

        </div>

        <div class="property-features">

            <span>

                👥 ${property.guests} Guests

            </span>

            <span>

                🛏 ${property.bedrooms} Bedrooms

            </span>

            <span>

                🛁 ${property.bathrooms} Baths

            </span>

        </div>

        <div class="property-features">

            ${property.amenities
            .slice(0,4)
            .map(item=>`<span>${item}</span>`)
            .join("")}

        </div>

        <div class="property-bottom">

            <div class="property-price">

                <h3>

                    ${formatPrice(property.price)}

                </h3>

                <span>

                    per night

                </span>

            </div>

            <div class="card-buttons">

                <button
                class="details-btn"
                onclick="viewProperty(${property.id})">

                    Details

                </button>

                <button
                class="book-btn"
                onclick="bookProperty(${property.id})">

                    Book

                </button>

            </div>

        </div>

    </div>

</div>

`;

}



/*==================================================
    UPDATE RESULTS COUNT
==================================================*/

function updateResults(){

    if(!resultsCount) return;

    resultsCount.textContent =

    `Showing ${filteredProperties.length} premium stays`;

}



/*==================================================
    EMPTY STATE
==================================================*/

function emptyState(){

return `

<div class="empty-results">

    <i class="fa-solid fa-bed"></i>

    <h2>

        No properties found

    </h2>

    <p>

        Try adjusting your filters or search terms.

    </p>

    <button
    class="reset-btn"
    onclick="resetFilters()">

        Reset Filters

    </button>

</div>

`;

}
    return "KES " + Number(price).toLocaleString();

}
/*==================================================
    MODULE 3 - SEARCH & FILTERS
==================================================*/


/*==================================================
    APPLY ALL FILTERS
==================================================*/

function applyFilters(){

    filteredProperties = properties.filter(property=>{

        /*------------------------------
        Search
        ------------------------------*/

        const matchesSearch =

            filters.search === "" ||

            property.name.toLowerCase().includes(filters.search) ||

            property.location.toLowerCase().includes(filters.search) ||

            property.county.toLowerCase().includes(filters.search);


        /*------------------------------
        Destination
        ------------------------------*/

        const matchesDestination =

            filters.destination === "All Destinations" ||

            property.location === filters.destination;


        /*------------------------------
        Category
        ------------------------------*/

        const matchesCategory =

            filters.categories.length === 0 ||

            filters.categories.includes(property.category);


        /*------------------------------
        Price
        ------------------------------*/

        const matchesPrice =

            property.price <= filters.maxPrice;


        /*------------------------------
        Rating
        ------------------------------*/

        const matchesRating =

            property.rating >= filters.minRating;


        /*------------------------------
        Guests
        ------------------------------*/

        const matchesGuests =

            property.guests >= filters.guests;


        /*------------------------------
        Amenities
        ------------------------------*/

        const matchesAmenities =

            filters.amenities.every(item=>

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


/*==================================================
    HERO SEARCH
==================================================*/

function searchListings(){

    if(!destinationSearch) return;

    filters.search =

    destinationSearch.value

    .trim()

    .toLowerCase();

    applyFilters();

}


/*==================================================
    DESTINATION FILTER
==================================================*/

function filterDestination(destination){

    filters.destination = destination;

    applyFilters();

}


/*==================================================
    CATEGORY FILTER
==================================================*/

function filterCategory(category){

    if(filters.categories.includes(category)){

        filters.categories =

        filters.categories.filter(item=>item!==category);

    }

    else{

        filters.categories.push(category);

    }

    applyFilters();

}


/*==================================================
    PRICE FILTER
==================================================*/

function filterPrice(price){

    filters.maxPrice = Number(price);

    applyFilters();

}


/*==================================================
    RATING FILTER
==================================================*/

function filterRating(rating){

    filters.minRating = Number(rating);

    applyFilters();

}


/*==================================================
    GUEST FILTER
==================================================*/

function filterGuests(guests){

    filters.guests = Number(guests);

    applyFilters();

}


/*==================================================
    AMENITY FILTER
==================================================*/

function toggleAmenity(amenity){

    if(filters.amenities.includes(amenity)){

        filters.amenities =

        filters.amenities.filter(item=>item!==amenity);

    }

    else{

        filters.amenities.push(amenity);

    }

    applyFilters();

}


/*==================================================
    RESET FILTERS
==================================================*/

function resetFilters(){

    filters.search = "";

    filters.destination = "All Destinations";

    filters.categories = [];

    filters.maxPrice = 50000;

    filters.minRating = 0;

    filters.guests = 0;

    filters.amenities = [];



    /* Search */

    if(destinationSearch){

        destinationSearch.value = "";

    }


    /* Destination */

    if(destinationFilter){

        destinationFilter.selectedIndex = 0;

    }


    /* Price */

    const priceSlider =

    document.getElementById("priceRange");

    if(priceSlider){

        priceSlider.value = 50000;

    }


    /* Checkboxes */

    document

    .querySelectorAll(

        '.filters input[type="checkbox"]'

    )

    .forEach(box=>box.checked=false);


    /* Radios */

    document

    .querySelectorAll(

        '.filters input[type="radio"]'

    )

    .forEach(radio=>radio.checked=false);


    applyFilters();

}


/*==================================================
    CONNECT SIDEBAR FILTERS
==================================================*/

function initializeFilters(){


    /* Category */

    document

    .querySelectorAll(

        '.filters input[type="checkbox"][data-category]'

    )

    .forEach(box=>{

        box.addEventListener("change",()=>{

            filterCategory(

                box.dataset.category

            );

        });

    });


    /* Amenities */

    document

    .querySelectorAll(

        '.filters input[type="checkbox"][data-amenity]'

    )

    .forEach(box=>{

        box.addEventListener("change",()=>{

            toggleAmenity(

                box.dataset.amenity

            );

        });

    });


    /* Rating */

    document

    .querySelectorAll(

        'input[name="rating"]'

    )

    .forEach(radio=>{

        radio.addEventListener("change",()=>{

            filterRating(

                radio.value

            );

        });

    });


    /* Guests */

    document

    .querySelectorAll(

        'input[name="guests"]'

    )

    .forEach(radio=>{

        radio.addEventListener("change",()=>{

            filterGuests(

                radio.value

            );

        });

    });


    /* Price */

    const priceSlider =

    document.getElementById("priceRange");

    if(priceSlider){

        priceSlider.addEventListener("input",()=>{

            filterPrice(priceSlider.value);

        });

    }

}
function initializeApp(){

    console.log("🚀 StayHub Listings Loaded");

    loadTheme();

    loadWishlist();

    attachEventListeners();

    initializeFilters();

    initializePagination();

    renderProperties();

    initializeBookingForm();

    initializeMobileMenu();

}
/*==================================================
    MODULE 4 - SORTING
==================================================*/


/*==================================================
    SORT PROPERTIES
==================================================*/

function sortListings(){

    if(!sortListingsSelect) return;

    const sortBy =

    sortListingsSelect.value;


    switch(sortBy){

        /*------------------------------
        Recommended
        ------------------------------*/

        case "recommended":

            filteredProperties.sort((a,b)=>{

                if(a.featured && !b.featured) return -1;

                if(!a.featured && b.featured) return 1;

                return b.rating - a.rating;

            });

            break;


        /*------------------------------
        Lowest Price
        ------------------------------*/

        case "priceLow":

            filteredProperties.sort(

                (a,b)=>a.price-b.price

            );

            break;


        /*------------------------------
        Highest Price
        ------------------------------*/

        case "priceHigh":

            filteredProperties.sort(

                (a,b)=>b.price-a.price

            );

            break;


        /*------------------------------
        Highest Rating
        ------------------------------*/

        case "rating":

            filteredProperties.sort((a,b)=>{

                if(b.rating!==a.rating){

                    return b.rating-a.rating;

                }

                return b.reviews-a.reviews;

            });

            break;


        /*------------------------------
        Newest Listings
        ------------------------------*/

        case "newest":

            filteredProperties.sort(

                (a,b)=>b.id-a.id

            );

            break;


        /*------------------------------
        Most Booked
        ------------------------------*/

        case "popular":

            filteredProperties.sort((a,b)=>{

                return b.reviews-a.reviews;

            });

            break;

    }


    currentPage = 1;

    renderProperties();

}
/*==================================================
    MODULE 4 - SORTING
==================================================*/


/*==================================================
    SORT PROPERTIES
==================================================*/

function sortListings(){

    if(!sortListingsSelect) return;

    const sortBy =

    sortListingsSelect.value;


    switch(sortBy){

        /*------------------------------
        Recommended
        ------------------------------*/

        case "recommended":

            filteredProperties.sort((a,b)=>{

                if(a.featured && !b.featured) return -1;

                if(!a.featured && b.featured) return 1;

                return b.rating - a.rating;

            });

            break;


        /*------------------------------
        Lowest Price
        ------------------------------*/

        case "priceLow":

            filteredProperties.sort(

                (a,b)=>a.price-b.price

            );

            break;


        /*------------------------------
        Highest Price
        ------------------------------*/

        case "priceHigh":

            filteredProperties.sort(

                (a,b)=>b.price-a.price

            );

            break;


        /*------------------------------
        Highest Rating
        ------------------------------*/

        case "rating":

            filteredProperties.sort((a,b)=>{

                if(b.rating!==a.rating){

                    return b.rating-a.rating;

                }

                return b.reviews-a.reviews;

            });

            break;


        /*------------------------------
        Newest Listings
        ------------------------------*/

        case "newest":

            filteredProperties.sort(

                (a,b)=>b.id-a.id

            );

            break;


        /*------------------------------
        Most Booked
        ------------------------------*/

        case "popular":

            filteredProperties.sort((a,b)=>{

                return b.reviews-a.reviews;

            });

            break;

    }


    currentPage = 1;

    renderProperties();

}
/*==================================================
    MODULE 5 - PAGINATION
==================================================*/


/*==================================================
    RENDER PAGINATION
==================================================*/

function renderPagination(){

    const container =

    document.getElementById("paginationNumbers");

    if(!container) return;

    const totalPages =

    Math.ceil(

        filteredProperties.length /

        propertiesPerPage

    );

    container.innerHTML = "";

    if(totalPages <= 1){

        updatePaginationButtons(totalPages);

        return;

    }

    for(

        let page = 1;

        page <= totalPages;

        page++

    ){

        const button =

        document.createElement("button");

        button.className =

        "page-btn";

        if(page === currentPage){

            button.classList.add("active");

        }

        button.textContent = page;

        button.addEventListener(

            "click",

            ()=>{

                goToPage(page);

            }

        );

        container.appendChild(button);

    }

    updatePaginationButtons(totalPages);

}



/*==================================================
    GO TO PAGE
==================================================*/

function goToPage(page){

    const totalPages =

    Math.ceil(

        filteredProperties.length /

        propertiesPerPage

    );

    if(

        page < 1 ||

        page > totalPages

    ){

        return;

    }

    currentPage = page;

    renderProperties();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



/*==================================================
    NEXT PAGE
==================================================*/

function nextPage(){

    const totalPages =

    Math.ceil(

        filteredProperties.length /

        propertiesPerPage

    );

    if(currentPage < totalPages){

        currentPage++;

        renderProperties();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

}



/*==================================================
    PREVIOUS PAGE
==================================================*/

function previousPage(){

    if(currentPage > 1){

        currentPage--;

        renderProperties();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

}



/*==================================================
    UPDATE BUTTON STATES
==================================================*/

function updatePaginationButtons(totalPages){

    const prev =

    document.getElementById("prevPage");

    const next =

    document.getElementById("nextPage");

    if(prev){

        prev.disabled =

        currentPage === 1;

    }

    if(next){

        next.disabled =

        currentPage === totalPages ||

        totalPages === 0;

    }

}



/*==================================================
    INITIALIZE PAGINATION
==================================================*/

function initializePagination(){

    const prev =

    document.getElementById("prevPage");

    const next =

    document.getElementById("nextPage");

    if(prev){

        prev.addEventListener(

            "click",

            previousPage

        );

    }

    if(next){

        next.addEventListener(

            "click",

            nextPage

        );

    }

}

/*==================================================
    MODULE 6 - WISHLIST
==================================================*/


/*==================================================
    TOGGLE WISHLIST
==================================================*/

function toggleWishlist(propertyId){

    const index =

    wishlist.indexOf(propertyId);

    if(index > -1){

        wishlist.splice(index,1);

        showToast(

            "Removed from your wishlist ❤️"

        );

    }

    else{

        wishlist.push(propertyId);

        showToast(

            "Added to your wishlist ❤️"

        );

    }

    saveWishlist();

    renderProperties();

}



/*==================================================
    SAVE WISHLIST
==================================================*/

function saveWishlist(){

    localStorage.setItem(

        "stayhubWishlist",

        JSON.stringify(wishlist)

    );

}



/*==================================================
    LOAD WISHLIST
==================================================*/

function loadWishlist(){

    const saved =

    localStorage.getItem(

        "stayhubWishlist"

    );

    if(saved){

        wishlist =

        JSON.parse(saved);

    }

    else{

        wishlist = [];

    }

}



/*==================================================
    CHECK IF PROPERTY IS SAVED
==================================================*/

function isWishlisted(propertyId){

    return wishlist.includes(propertyId);

}



/*==================================================
    GET WISHLIST PROPERTIES
==================================================*/

function getWishlistProperties(){

    return properties.filter(property=>

        wishlist.includes(property.id)

    );

}



/*==================================================
    CLEAR WISHLIST
==================================================*/

function clearWishlist(){

    wishlist = [];

    saveWishlist();

    renderProperties();

    showToast(

        "Wishlist cleared."

    );

}
/*==================================================
    MODULE 7 - PROPERTY DETAILS MODAL
==================================================*/


/*==================================================
    OPEN PROPERTY DETAILS
==================================================*/

function viewProperty(propertyId){

    selectedProperty =

    properties.find(property=>

        property.id===propertyId

    );

    if(!selectedProperty) return;

    const modal =

    document.getElementById("propertyModal");

    const details =

    document.getElementById("propertyDetails");

    if(!modal || !details) return;

    details.innerHTML = createPropertyModal(selectedProperty);

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";

}



/*==================================================
    CREATE PROPERTY MODAL
==================================================*/

function createPropertyModal(property){

    return `

<div class="property-modal-wrapper">

    <img

    class="property-modal-image"

    src="${property.gallery[0]}"

    alt="${property.name}">


    <div class="property-modal-body">


        <h2>

            ${property.name}

        </h2>


        <div class="property-rating">

            ⭐ ${property.rating}

            (${property.reviews} Reviews)

        </div>


        <p class="property-location">

            <i class="fa-solid fa-location-dot"></i>

            ${property.location},

            ${property.county}

        </p>


        <h3>

            ${formatPrice(property.price)}

            <small>

                / night

            </small>

        </h3>


        <div class="property-features">

            <span>

                👥 ${property.guests} Guests

            </span>

            <span>

                🛏 ${property.bedrooms} Bedrooms

            </span>

            <span>

                🛁 ${property.bathrooms} Bathrooms

            </span>

        </div>


        <h3>

            Description

        </h3>

        <p>

            ${property.description}

        </p>


        <h3>

            Amenities

        </h3>

        <div class="property-amenities">

            ${property.amenities.map(item=>`

                <span>

                    ${item}

                </span>

            `).join("")}

        </div>


        <div class="host-box">

            <h3>

                Hosted by

                ${property.host.name}

            </h3>

            <p>

                ⭐ ${property.host.rating}

            </p>

            <p>

                Host since

                ${property.host.joined}

            </p>

        </div>


        <button

        class="book-large-btn"

        onclick="bookProperty(${property.id})">

            Book Now

        </button>

    </div>

</div>

`;

}



/*==================================================
    CLOSE PROPERTY MODAL
==================================================*/

function closeProperty(){

    const modal =

    document.getElementById("propertyModal");

    if(!modal) return;

    modal.style.display = "none";

    document.body.style.overflow = "";

}



/*==================================================
    ESC KEY SUPPORT
==================================================*/

document.addEventListener("keydown",function(event){

    if(

        event.key==="Escape"

    ){

        closeProperty();

    }

});


/*==================================================
    CLICK OUTSIDE TO CLOSE
==================================================*/

window.addEventListener("click",function(event){

    const modal =

    document.getElementById("propertyModal");

    if(event.target===modal){

        closeProperty();

    }

});

/*==================================================
    MODULE 8 - BOOKING SYSTEM
==================================================*/


/*==================================================
    OPEN BOOKING MODAL
==================================================*/

function bookProperty(propertyId){

    selectedProperty =

    properties.find(property=>

        property.id===propertyId

    );

    if(!selectedProperty) return;

    const modal =

    document.getElementById("bookingModal");

    if(!modal) return;

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";

}



/*==================================================
    CLOSE BOOKING MODAL
==================================================*/

function closeBooking(){

    const modal =

    document.getElementById("bookingModal");

    if(!modal) return;

    modal.style.display = "none";

    document.body.style.overflow = "";

}



/*==================================================
    BOOKING FORM
==================================================*/

function initializeBookingForm(){

    const form =

    document.getElementById("bookingForm");

    if(!form) return;

    form.addEventListener("submit",submitBooking);

}



/*==================================================
    SUBMIT BOOKING
==================================================*/

function submitBooking(event){

    event.preventDefault();

    if(!selectedProperty) return;


    const checkIn =

    document.getElementById("bookingCheckIn").value;

    const checkOut =

    document.getElementById("bookingCheckOut").value;


    if(!validateBookingDates(checkIn,checkOut)){

        return;

    }


    const nights =

    calculateNights(checkIn,checkOut);

    const total =

    nights * selectedProperty.price;


    const booking = {

        reference:

        generateBookingReference(),

        property:

        selectedProperty.name,

        guest:

        document.getElementById("bookingName").value,

        email:

        document.getElementById("bookingEmail").value,

        phone:

        document.getElementById("bookingPhone").value,

        checkIn,

        checkOut,

        nights,

        total,

        bookedAt:

        new Date().toISOString()

    };


    saveBooking(booking);

    showBookingConfirmation(booking);

    closeBooking();

    event.target.reset();

}

/*==================================================
    BOOKING REFERENCE
==================================================*/

function generateBookingReference(){

    return "SH-"

    +

    Date.now()

    .toString()

    .slice(-6);

}
/*==================================================
    SAVE BOOKING
==================================================*/

function saveBooking(booking){

    let bookings =

    JSON.parse(

        localStorage.getItem(

            "stayhubBookings"

        )

    ) || [];

    bookings.unshift(booking);

    localStorage.setItem(

        "stayhubBookings",

        JSON.stringify(bookings)

    );

}

/*==================================================
    BOOKING CONFIRMATION
==================================================*/

function showBookingConfirmation(booking){

    showToast(

        "Booking confirmed successfully!"

    );

    alert(

`Booking Confirmed!

Reference:
${booking.reference}

Property:
${booking.property}

Guest:
${booking.guest}

Check In:
${booking.checkIn}

Check Out:
${booking.checkOut}

Nights:
${booking.nights}

Total:
${formatPrice(booking.total)}

Thank you for choosing StayHub!`

    );

}

/*==================================================
    ESC CLOSE
==================================================*/

document.addEventListener("keydown",function(event){

    if(event.key==="Escape"){

        closeBooking();

    }

});

/*==================================================
    CLICK OUTSIDE
==================================================*/

window.addEventListener("click",function(event){

    const modal =

    document.getElementById("bookingModal");

    if(event.target===modal){

        closeBooking();

    }

});

/*==================================================
    MODULE 9 - UI & THEME
==================================================*/


/*==================================================
    LOAD THEME
==================================================*/

function loadTheme(){

    const savedTheme =

    localStorage.getItem("stayhubTheme");

    if(savedTheme==="dark"){

        document.body.classList.add("dark");

        updateThemeIcon(true);

    }

    else{

        document.body.classList.remove("dark");

        updateThemeIcon(false);

    }

}



/*==================================================
    TOGGLE THEME
==================================================*/

function toggleTheme(){

    const darkMode =

    document.body.classList.toggle("dark");

    localStorage.setItem(

        "stayhubTheme",

        darkMode

        ?

        "dark"

        :

        "light"

    );

    updateThemeIcon(darkMode);

}



/*==================================================
    UPDATE THEME ICON
==================================================*/

function updateThemeIcon(isDark){

    if(!themeToggle) return;

    themeToggle.innerHTML = isDark

    ?

    '<i class="fa-solid fa-sun"></i>'

    :

    '<i class="fa-solid fa-moon"></i>';

}



/*==================================================
    TOAST NOTIFICATION
==================================================*/

function showToast(message){

    let toast =

    document.getElementById("toast");



    if(!toast){

        toast =

        document.createElement("div");

        toast.id = "toast";



        toast.innerHTML =

        `<span id="toastText"></span>`;


        document.body.appendChild(toast);

    }



    const text =

    document.getElementById("toastText");



    text.textContent = message;



    toast.classList.add("show");



    clearTimeout(toast.timer);



    toast.timer = setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}



/*==================================================
    MOBILE MENU
==================================================*/

function toggleMobileMenu(){

    const nav =

    document.querySelector(".nav-links");

    if(!nav) return;

    nav.classList.toggle("show");

}



/*==================================================
    CLOSE MOBILE MENU
==================================================*/

function closeMobileMenu(){

    const nav =

    document.querySelector(".nav-links");

    if(!nav) return;

    nav.classList.remove("show");

}



/*==================================================
    AUTO CLOSE MOBILE MENU
==================================================*/

function initializeMobileMenu(){

    document

    .querySelectorAll(".nav-links a")

    .forEach(link=>{

        link.addEventListener(

            "click",

            closeMobileMenu

        );

    });

}



/*==================================================
    SCROLL TO TOP
==================================================*/

function scrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



/*==================================================
    LOADING BUTTON
==================================================*/

function setButtonLoading(button,isLoading){

    if(!button) return;

    if(isLoading){

        button.disabled = true;

        button.dataset.original =

        button.innerHTML;

        button.innerHTML =

        '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';

    }

    else{

        button.disabled = false;

        button.innerHTML =

        button.dataset.original;

    }

}



/*==================================================
    FORMAT DATE
==================================================*/

function formatDate(date){

    return new Date(date)

    .toLocaleDateString(

        "en-KE",

        {

            year:"numeric",

            month:"short",

            day:"numeric"

        }

    );

}
