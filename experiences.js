// =====================================
// StayHub Experiences
// =====================================

// Copy the data from experiences-data.js
// into the variable below automatically.

let filteredExperiences = [...experiences];

const filters = {

    search: "",

    category: "All",

    location: "All",

    maxPrice: Infinity,

    minRating: 0

};

let currentPage = 1;

const experiencesPerPage = 12;



// =====================================
// FORMAT PRICE
// =====================================

function formatPrice(price){

    return "KES " + price.toLocaleString();

}



// =====================================
// RENDER
// =====================================

function renderExperiences(){

    const grid = document.getElementById("experienceGrid");

    if(!grid) return;

    const start = (currentPage-1) * experiencesPerPage;

    const end = start + experiencesPerPage;

    const pageItems = filteredExperiences.slice(start,end);

    grid.innerHTML = pageItems.map(createExperienceCard).join("");

    updateResults();

    renderPagination();

}

// =====================================
// MOBILE MENU
// =====================================
function toggleMobileMenu(){

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("active");

}
// =====================================
// CREATE EXPERIENCE CARD
// =====================================

function createExperienceCard(experience){

    return `

<div class="experience-card">

    <div class="experience-image">

        <img
            src="${experience.image}"
            alt="${experience.title}">

        ${experience.featured ?

        `<span class="featured-badge">

            ⭐ Featured

        </span>`

        :

        ""}

        ${experience.trending ?

        `<span class="trending-badge">

            🔥 Trending

        </span>`

        :

        ""}

        <button
            class="wishlist-btn"
            onclick="toggleWishlist(${experience.id})">

            <i class="fa-regular fa-heart"></i>

        </button>

    </div>

    <div class="experience-content">

        <div class="experience-top">

            <span class="category-chip">

                ${experience.category}

            </span>

            <div class="rating">

                ⭐ ${experience.rating}

                <span>

                    (${experience.reviews})

                </span>

            </div>

        </div>

        <h3>

            ${experience.title}

        </h3>

        <p class="location">

            <i class="fa-solid fa-location-dot"></i>

            ${experience.location}, ${experience.county}

        </p>

        <div class="experience-meta">

            <span>

                <i class="fa-regular fa-clock"></i>

                ${experience.duration}

            </span>

            ${experience.instantBook ?

            `<span class="instant-book">

                ✔ Instant Book

            </span>`

            :

            ""}

        </div>

        <p class="description">

            ${experience.description.substring(0,90)}...

        </p>

        <div class="experience-footer">

            <div class="price">

                <h3>

                    ${formatPrice(experience.price)}

                </h3>

                <small>

                    per person

                </small>

            </div>

            <div class="card-buttons">

                <button
                    class="details-btn"
                    onclick="viewExperience(${experience.id})">

                    Details

                </button>

                <button
                    class="book-btn"
                    onclick="bookExperience(${experience.id})">

                    Book Now

                </button>

            </div>

        </div>

    </div>

</div>

`;

function filterDestination(destination){

    filterLocation(destination);

}
}
// =====================================
// VIEW EXPERIENCE
// =====================================

function viewExperience(id){

    const experience = experiences.find(item => item.id === id);

    if(!experience) return;

    // Safe defaults
    const groupSize = experience.groupSize || "Any Group Size";

    const description = experience.description ||
        "Enjoy an unforgettable experience carefully curated by StayHub.";

    const highlights = experience.highlights || [

        "Professional guide",

        "Amazing scenery",

        "Perfect for photography"

    ];

    const includes = experience.includes || [

        "Professional guide",

        "Entry fees",

        "Customer support"

    ];

    document.getElementById("experienceDetails").innerHTML = `

    <div class="modal-gallery">

        <img
        src="${experience.image}"
        alt="${experience.title}">

    </div>

    <div class="modal-body">

        <span class="modal-category">

            ${experience.category}

        </span>

        <h2>

            ${experience.title}

        </h2>

        <div class="modal-rating">

            ⭐ ${experience.rating}

            (${experience.reviews} Reviews)

        </div>

        <p class="modal-location">

            <i class="fa-solid fa-location-dot"></i>

            ${experience.location}, ${experience.county}

        </p>

        <div class="modal-meta">

            <span>

                <i class="fa-regular fa-clock"></i>

                ${experience.duration}

            </span>

            <span>

                <i class="fa-solid fa-users"></i>

                ${groupSize}

            </span>

        </div>

        <p class="modal-description">

            ${description}

        </p>

        <h3>

            Experience Highlights

        </h3>

        <ul class="highlight-list">

            ${highlights.map(item => `

                <li>✔ ${item}</li>

            `).join("")}

        </ul>

        <h3>

            What's Included

        </h3>

        <ul class="include-list">

            ${includes.map(item => `

                <li>✔ ${item}</li>

            `).join("")}

        </ul>

        <div class="modal-footer">

            <div>

                <h2>

                    ${formatPrice(experience.price)}

                </h2>

                <small>

                    Per Person

                </small>

            </div>

            <button
            class="book-btn"
            onclick="bookExperience(${experience.id})">

                Book Now

            </button>

        </div>

    </div>

    `;

    document.getElementById("experienceModal").style.display = "flex";

}

// =====================================
// CLOSE MODAL
// =====================================

function closeExperienceModal(){

    document

    .getElementById("experienceModal")

    .style.display="none";

}

/// =====================================
// BOOK EXPERIENCE
// =====================================

let selectedExperience = null;

function bookExperience(id){

    selectedExperience =

    experiences.find(item=>item.id===id);

    if(!selectedExperience) return;

    document.getElementById("bookingSummary").innerHTML=`

        <div class="booking-summary-card">

            <img

            src="${selectedExperience.image}"

            alt="${selectedExperience.title}">

            <div>

                <h3>

                    ${selectedExperience.title}

                </h3>

                <p>

                    ${selectedExperience.location}

                </p>

                <h2>

                    ${formatPrice(selectedExperience.price)}

                </h2>

                <small>

                    Per Person

                </small>

            </div>

        </div>

    `;

    document

    .getElementById("bookingModal")

    .style.display="flex";

}

// =====================================
// CLOSE BOOKING
// =====================================

function closeBookingModal(){

    document

    .getElementById("bookingModal")

    .style.display="none";

}

// =====================================
// SUBMIT BOOKING
// =====================================

document

.getElementById("bookingForm")

.addEventListener("submit",function(e){

    e.preventDefault();

    const booking={

        experience:selectedExperience.title,

        name:

        document.getElementById("guestName").value,

        email:

        document.getElementById("guestEmail").value,

        phone:

        document.getElementById("guestPhone").value,

        date:

        document.getElementById("bookingDate").value,

        guests:

        document.getElementById("guests").value,

        payment:

        document.getElementById("paymentMethod").value,

        promo:

        document.getElementById("promoCode").value,

        total:

        selectedExperience.price*

        Number(document.getElementById("guests").value)

    };

    const bookings=

    JSON.parse(

    localStorage.getItem("stayhubBookings")

    )||[];

    bookings.push(booking);

    localStorage.setItem(

        "stayhubBookings",

        JSON.stringify(bookings)

    );

    alert(

`🎉 Booking Confirmed!

Experience:
${booking.experience}

Total:
${formatPrice(booking.total)}

Thank you for choosing StayHub.`

    );

    closeBookingModal();

    this.reset();

});

function scrollToExperiences(){

    document.getElementById("experienceGrid")
    .scrollIntoView({

        behavior:"smooth"

    });

}
// =====================================
// RESULTS COUNT
// =====================================

function updateResults(){

    const results =
    document.getElementById("experienceResults");

    if(results){

        results.textContent =
        `Showing ${filteredExperiences.length} Experiences`;

    }

}
// =====================================
// PREVIOUS PAGE
// =====================================

function previousPage(){

    if(currentPage > 1){

        currentPage--;

        renderExperiences();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

}

// =====================================
// NEXT PAGE
// =====================================

function nextPage(){

    const totalPages = Math.ceil(

        filteredExperiences.length /

        experiencesPerPage

    );

    if(currentPage < totalPages){

        currentPage++;

        renderExperiences();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

}
// =====================================
// VIEW DEALS
// =====================================

function viewDeals(){

    filterCategory("All");

    scrollToExperiences();

    showToast("Showing current travel deals.");

}



// =====================================
// NEWSLETTER
// =====================================

function subscribeNewsletter(event){

    event.preventDefault();

    const email = document.getElementById("newsletterEmail").value;

    if(email==="") return;

    showToast("Thanks for subscribing!");

    document.getElementById("newsletterEmail").value="";

}
// FAQ

function toggleFAQ(element){

    const answer = element.nextElementSibling;

    answer.classList.toggle("active");

}



// AI Assistant

function toggleAssistant(){

    showToast(

        "👋 Hi! AI Trip Planner coming soon."

    );

}



// Back To Top

window.addEventListener("scroll",()=>{

    const btn=document.getElementById("backTop");

    if(!btn) return;

    if(window.scrollY>500){

        btn.classList.add("show");

    }

    else{

        btn.classList.remove("show");

    }

});



function scrollTopPage(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// =====================================
// WISHLIST
// =====================================

function toggleWishlist(id){

    console.log("Wishlist:", id);

}

// =====================================
// RESULTS COUNT
// =====================================

function updateResults(){

    const results = document.getElementById("resultsCount");

    if(!results) return;

    results.textContent =
    `Showing ${filteredExperiences.length} experiences`;

}
// =====================================
// PAGINATION
// =====================================

function renderPagination(){

    const container =
    document.getElementById("paginationNumbers");

    if(!container) return;

    const totalPages =
    Math.ceil(filteredExperiences.length / experiencesPerPage);

    let html = "";

    for(let i=1;i<=totalPages;i++){

        html += `

        <button
        class="page-btn ${i===currentPage?"active":""}"
        onclick="goToPage(${i})">

            ${i}

        </button>

        `;

    }

    container.innerHTML = html;

}
// =====================================
// GO TO PAGE
// =====================================

function goToPage(page){

    currentPage = page;

    renderExperiences();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
// =====================================
// SEARCH
// =====================================

function searchExperiences(){

    const input =
    document.getElementById("experienceDestination");

    filters.search =
    input.value.toLowerCase();

    applyFilters();

}

// =====================================
// APPLY FILTERS
// =====================================

function applyFilters(){

    filteredExperiences =
    experiences.filter(experience=>{

        const matchesSearch =

            experience.title.toLowerCase().includes(filters.search) ||

            experience.location.toLowerCase().includes(filters.search) ||

            experience.county.toLowerCase().includes(filters.search);

        const matchesCategory =

            filters.category==="All" ||

            experience.category===filters.category;

        const matchesLocation =

            filters.location==="All" ||

            experience.location===filters.location;

        const matchesPrice =

            experience.price<=filters.maxPrice;

        const matchesRating =

            experience.rating>=filters.minRating;

        return(

            matchesSearch &&

            matchesCategory &&

            matchesLocation &&

            matchesPrice &&

            matchesRating

        );

    });

    currentPage=1;

    renderExperiences();

}
// =====================================
// CATEGORY
// =====================================

function filterCategory(category){

    filters.category = category;

    applyFilters();


}
// =====================================
// LOCATION
// =====================================

function filterLocation(location){

    filters.location = location;

    applyFilters();

}
// =====================================
// PRICE
// =====================================

function filterPrice(price){

    filters.maxPrice = price;

    applyFilters();

}
// =====================================
// RATING
// =====================================

function filterRating(rating){

    filters.minRating = rating;

    applyFilters();

}
// =====================================
// RESET
// =====================================

function resetFilters(){

    filters.search="";

    filters.category="All";

    filters.location="All";

    filters.maxPrice=Infinity;

    filters.minRating=0;

    filteredExperiences=[...experiences];

    currentPage=1;

    const search =
    document.getElementById("experienceSearch");

    if(search){

        search.value="";

    }

    renderExperiences();

}
// =====================================
// SORT
// =====================================

function sortExperiences(value){

    switch(value){

        case "price-low":

            filteredExperiences.sort((a,b)=>a.price-b.price);

            break;

        case "price-high":

            filteredExperiences.sort((a,b)=>b.price-a.price);

            break;

        case "rating":

            filteredExperiences.sort((a,b)=>b.rating-a.rating);

            break;

        case "reviews":

            filteredExperiences.sort((a,b)=>b.reviews-a.reviews);

            break;

        case "duration":

            filteredExperiences.sort((a,b)=>

                a.duration.localeCompare(b.duration)

            );

            break;

        default:

            filteredExperiences=[...experiences];

    }

    renderExperiences();

}
// =====================================
// INITIAL LOAD
// =====================================

document.addEventListener("DOMContentLoaded",()=>{

    renderExperiences();

    const search =
    document.getElementById("experienceSearch");

    if(search){

        search.addEventListener(

            "keyup",

            searchExperiences

        );

    }

});

window.addEventListener("click", function(event){

    const modal = document.getElementById("experienceModal");

    if(event.target === modal){

        closeExperienceModal();

    }

});