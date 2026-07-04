// ======================================
// STAYHUB HOST PAGE
// host.js
// ======================================


// ======================================
// GLOBAL VARIABLES
// ======================================

let currentStep = 0;

const wizardPages = document.querySelectorAll(".wizard-page");

const progressSteps = document.querySelectorAll(".progress-step");


// ======================================
// PAGE INITIALIZATION
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    initializePage();

});

function initializePage(){

    calculateEarnings();

    showWizardStep(currentStep);

    window.addEventListener("scroll", handleScroll);

}


// ======================================
// MOBILE MENU
// ======================================

function toggleMobileMenu(){

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("show");

}


// ======================================
// SMOOTH SCROLL
// ======================================

function scrollToRegistration(){

    document
    .getElementById("hostRegistration")
    ?.scrollIntoView({

        behavior:"smooth"

    });

}


function scrollToCalculator(){

    document
    .getElementById("earningsCalculator")
    ?.scrollIntoView({

        behavior:"smooth"

    });

}


// ======================================
// BACK TO TOP
// ======================================

function scrollTopPage(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


function handleScroll(){

    const button = document.getElementById("backTop");

    if(!button) return;

    if(window.scrollY > 500){

        button.classList.add("show");

    }

    else{

        button.classList.remove("show");

    }

}


// ======================================
// EARNINGS CALCULATOR
// ======================================

function calculateEarnings(){

    const nightPrice =
        Number(document.getElementById("nightPrice")?.value) || 0;

    const bookedNights =
        Number(document.getElementById("bookedNights")?.value) || 0;

    const cleaningFee =
        Number(document.getElementById("cleaningFee")?.value) || 0;


    const total =
        (nightPrice * bookedNights) + cleaningFee;


    const totalElement =
        document.getElementById("monthlyIncome");

    const nightsElement =
        document.getElementById("nightCount");


    if(totalElement){

        totalElement.textContent =
            "KES " + total.toLocaleString();

    }

    if(nightsElement){

        nightsElement.textContent =
            bookedNights + " Nights";

    }

}


// ======================================
// AUTO UPDATE CALCULATOR
// ======================================

document.addEventListener("input",(event)=>{

    if(

        event.target.id==="nightPrice" ||

        event.target.id==="bookedNights" ||

        event.target.id==="cleaningFee"

    ){

        calculateEarnings();

    }

});
// ======================================
// HOST REGISTRATION WIZARD
// ======================================

function showWizardStep(step){

    if(!wizardPages.length) return;

    wizardPages.forEach(page=>{

        page.classList.remove("active");

    });

    progressSteps.forEach(item=>{

        item.classList.remove("active");

    });

    wizardPages[step].classList.add("active");

    for(let i=0;i<=step;i++){

        progressSteps[i].classList.add("active");

    }

}



// ======================================
// NEXT STEP
// ======================================

function nextStep(){

    if(currentStep >= wizardPages.length-1) return;

    if(!validateCurrentStep()) return;

    currentStep++;

    showWizardStep(currentStep);

    window.scrollTo({

        top:document
        .getElementById("hostRegistration")
        .offsetTop-90,

        behavior:"smooth"

    });

}



// ======================================
// PREVIOUS STEP
// ======================================

function previousStep(){

    if(currentStep===0) return;

    currentStep--;

    showWizardStep(currentStep);

    window.scrollTo({

        top:document
        .getElementById("hostRegistration")
        .offsetTop-90,

        behavior:"smooth"

    });

}



// ======================================
// STEP VALIDATION
// ======================================

function validateCurrentStep(){

    const currentPage = wizardPages[currentStep];

    const requiredInputs = currentPage.querySelectorAll(

        "input[required], select[required], textarea[required]"

    );

    let valid = true;

    requiredInputs.forEach(input=>{

        if(input.value.trim()===""){

            input.style.borderColor="#ef4444";

            valid=false;

        }

        else{

            input.style.borderColor="#e2e8f0";

        }

    });

    if(!valid){

        showToast("Please complete all required fields.");

    }

    return valid;

}



// ======================================
// PROPERTY CARD SELECTION
// ======================================

document.addEventListener("change",(event)=>{

    if(event.target.name==="propertyType"){

        document

        .querySelectorAll(".property-option")

        .forEach(card=>{

            card.classList.remove("selected");

        });

        event.target

        .closest(".property-option")

        .classList.add("selected");

    }

});



// ======================================
// HOST FORM SUBMIT
// ======================================

const hostForm = document.getElementById("hostWizard");

if(hostForm){

    hostForm.addEventListener("submit",(event)=>{

        event.preventDefault();

        showToast("🎉 Listing submitted successfully!");

        setTimeout(()=>{

            hostForm.reset();

            currentStep=0;

            showWizardStep(currentStep);

            document

            .querySelectorAll(".property-option")

            .forEach(card=>{

                card.classList.remove("selected");

            });

        },800);

    });

}
// ======================================
// FAQ ACCORDION
// ======================================

function toggleFAQ(element){

    const card = element.parentElement;

    document

    .querySelectorAll(".faq-card")

    .forEach(item=>{

        if(item!==card){

            item.classList.remove("active");

            const icon=item.querySelector("i");

            if(icon){

                icon.className="fa-solid fa-plus";

            }

        }

    });

    card.classList.toggle("active");

    const icon=element.querySelector("i");

    if(icon){

        icon.className=card.classList.contains("active")

        ?

        "fa-solid fa-minus"

        :

        "fa-solid fa-plus";

    }

}
// ======================================
// TOAST
// ======================================

function showToast(message){

    const toast=document.getElementById("toast");

    const text=document.getElementById("toastText");

    if(!toast || !text) return;

    text.textContent=message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}
// ======================================
// AI ASSISTANT
// ======================================

function toggleAssistant(){

    showToast(

        "🤖 StayHub AI Assistant coming soon."

    );

}
// ======================================
// IMAGE UPLOAD
// ======================================

const uploadInput=document.querySelector(".upload-box input");

if(uploadInput){

    uploadInput.addEventListener("change",function(){

        if(this.files.length){

            showToast(

                this.files.length +

                " photo(s) selected."

            );

        }

    });

}
// ======================================
// BUTTON EFFECT
// ======================================

document

.querySelectorAll("button")

.forEach(button=>{

    button.addEventListener("click",function(){

        this.style.transform="scale(.96)";

        setTimeout(()=>{

            this.style.transform="";

        },120);

    });

});
// ======================================
// ACTIVE NAVIGATION
// ======================================

document

.querySelectorAll(".nav-links a")

.forEach(link=>{

    if(

        link.href===window.location.href

    ){

        link.classList.add("active");

    }

});
// ======================================
// CLOSE MOBILE MENU
// ======================================

document

.querySelectorAll(".nav-links a")

.forEach(link=>{

    link.addEventListener("click",()=>{

        document

        .querySelector(".nav-links")

        ?.classList.remove("show");

    });

});
// ======================================
// FADE IN SECTIONS
// ======================================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{

threshold:.15

});

document

.querySelectorAll("section")

.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(25px)";

    section.style.transition=".6s";

    observer.observe(section);

});