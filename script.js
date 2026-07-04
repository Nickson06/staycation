/*=========================================
DARK MODE
=========================================*/

const themeToggle = document.getElementById("themeToggle");

const body = document.body;

// Load saved theme
if(localStorage.getItem("stayhub-theme") === "dark"){

    body.classList.add("dark");

    themeToggle.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}

themeToggle.addEventListener("click",()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        localStorage.setItem("stayhub-theme","dark");

        themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("stayhub-theme","light");

        themeToggle.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});
/*=========================================
NAVBAR SCROLL
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.style.padding = "8px 0";

        navbar.style.boxShadow =
        "0 12px 35px rgba(0,0,0,.12)";

    }else{

        navbar.style.padding = "";

        navbar.style.boxShadow = "none";

    }

});
/*=========================================
COUNTER
=========================================*/

const counters =
document.querySelectorAll(".stat-card h2");

const animateCounter = counter=>{

    const target =
    parseFloat(counter.innerText);

    let current = 0;

    const increment = target/100;

    const update = ()=>{

        current += increment;

        if(current < target){

            counter.innerText =
            Math.floor(current);

            requestAnimationFrame(update);

        }else{

            counter.innerText =
            target;

        }

    }

    update();

}

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(

                entry.target.querySelector("h2")

            );

        }

    });

});

document.querySelectorAll(".stat-card")
.forEach(card=>observer.observe(card));

/*=========================================
SCROLL ANIMATION
=========================================*/

const hiddenSections = document.querySelectorAll(

"section"

);

hiddenSections.forEach(section=>{

    section.style.opacity = "0";

    section.style.transform =
    "translateY(60px)";

    section.style.transition =
    ".8s ease";

});

const reveal = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

});

hiddenSections.forEach(section=>{

    reveal.observe(section);

});
/*=========================================
MOBILE MENU
=========================================*/

const mobileMenu =
document.querySelector(".mobile-menu");

const navLinks =
document.querySelector(".nav-links");

mobileMenu.addEventListener("click",()=>{

    navLinks.classList.toggle("show");

});
/*=========================================
HERO BACKGROUND
=========================================*/

const hero = document.querySelector(".hero");

const heroImages=[

"images/hero1.jpg",

"images/hero2.jpg",

"images/hero3.jpg",

"images/hero4.jpg"

];

let heroIndex=0;

setInterval(()=>{

heroIndex++;

if(heroIndex>=heroImages.length){

heroIndex=0;

}

hero.style.backgroundImage=

`url(${heroImages[heroIndex]})`;

},6000);
/*=========================================
PROPERTY CARDS
=========================================*/

document.querySelectorAll(".property-card")

.forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.transform=

`perspective(900px)
rotateY(${(x-150)/25}deg)
rotateX(${-(y-150)/25}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});
/*=========================================
SEARCH
=========================================*/

function goToListings(){

const destination=

document.getElementById("destinationInput").value;

const checkIn=

document.getElementById("checkIn").value;

const checkOut=

document.getElementById("checkOut").value;

const guests=

document.getElementById("guests").value;

const url=

`listings.html?destination=${encodeURIComponent(destination)}&checkin=${checkIn}&checkout=${checkOut}&guests=${encodeURIComponent(guests)}`;

window.location.href=url;

}

const scrollTop=

document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

scrollTop.style.display=

window.scrollY>500?

"block":"none";

});

scrollTop.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

const featured = [

{

id:1,

title:"Ocean Paradise Villa",

location:"Watamu",

price:8500,

rating:4.96,

reviews:184,

badge:"SUPERHOST",

discount:"20% OFF",

image:"images/watamu1.jpg",

amenities:[

"Pool",

"WiFi",

"Breakfast"

]

},

{

id:2,

title:"Diani Luxury Suites",

location:"Diani",

price:6800,

rating:4.91,

reviews:92,

badge:"GUEST FAVORITE",

discount:"15% OFF",

image:"images/diani1.jpg",

amenities:[

"Beach",

"Pool",

"Parking"

]

}

];
