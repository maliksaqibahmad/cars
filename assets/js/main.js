/*=============== Dark Mode================*/
// JavaScript code to toggle between dark and light modes

// Function to toggle the mode
function toggleMode() {
    const body = document.body;
    
    // Toggle the 'dark' class on the body element
    body.classList.toggle('dark');
    
    // You can also save the current mode in localStorage if needed
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);
}

// Function to initialize the mode based on localStorage
function initializeMode() {
    const isDarkMode = localStorage.getItem('darkMode');
    const body = document.body;
    
    if (isDarkMode === 'true') {
        // If 'darkMode' is set to 'true' in localStorage, enable dark mode
        body.classList.add('dark');
    } else {
        // Otherwise, enable light mode (optional)
        body.classList.remove('dark');
    }
}

// Initialize the mode when the page loads
initializeMode();

// Add an event listener to the toggle button
const toggleButton = document.getElementById('toggleButton'); // Replace 'toggleButton' with your actual button ID
if (toggleButton) {
    toggleButton.addEventListener('click', toggleMode);
}

// Check local storage for user's preferred mode and apply it
const userPreferredMode = localStorage.getItem("mode");
if (userPreferredMode) {
  const root = document.documentElement;
  root.setAttribute("data-mode", userPreferredMode);

  if (userPreferredMode === "dark") {
    toggleButton.classList.remove("ri-sun-line");
    toggleButton.classList.add("ri-moon-line");
  }
}

const iconElement = document.getElementById("toggle__button");

        iconElement.addEventListener("click", function () {
            if (iconElement.classList.contains("ri-sun-line")) {
                iconElement.classList.remove("ri-sun-line");
                iconElement.classList.add("ri-moon-line");
            } else {
                iconElement.classList.remove("ri-moon-line");
                iconElement.classList.add("ri-sun-line");
            }
        });

// Add click event listener to the button
document.getElementById('toggle__button').addEventListener('click', toggleMode);

/* Images color in light/dark mode*/
const imageColor = document.getElementById("toggle__button");
const logos = document.querySelectorAll(".logoo");

imageColor.addEventListener("click", function () {
    document.body.classList.toggle("light");

    // Check if the light mode is active
    const isLightMode = document.body.classList.contains("light");

    // Apply or remove the color inversion filter to .logoo images
    logos.forEach((logo) => {
        if (isLightMode) {
            logo.style.filter = "none";
        } else {
            logo.style.filter = "invert(1)"; // Remove the filter for dark mode
        }
    });
});



/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// validate if constant exists
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");

    if (this.scrollY >= 50) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
}

window.addEventListener("scroll", scrollHeader);

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup(".featured__container", {
    selectors: {
        target: ".featured__card",
    },
    animation: {
        duration: 300,
    },
});

/* Link active featured */
const linkFeatured = document.querySelectorAll(".featured__item");

function activeFeatured() {
    linkFeatured.forEach((l) => l.classList.remove("active-featured"));
    this.classList.add("active-featured");
}

linkFeatured.forEach((l) => l.addEventListener("click", activeFeatured));

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");

    if (this.scrollY >= 350) {
        scrollUp.classList.add("show-scroll");
    } else {
        scrollUp.classList.remove("show-scroll");
    }
}

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const secitonHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + secitonHeight) {
            document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.add("active-link");
        } else {
            document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    // reset: true,
});

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`);
sr.reveal(`.home__subtitle`, {
    delay: 500,
});
sr.reveal(`.home__elec`, {
    delay: 600,
});
sr.reveal(`.home__img`, {
    delay: 800,
});
sr.reveal(`.home__car-data`, {
    delay: 900,
    interval: 100,
    origin: "bottom",
});
sr.reveal(`.home__button`, {
    delay: 1000,
    origin: "bottom",
});
sr.reveal(`.about__group, .offer__data`, {
    origin: "left",
});
sr.reveal(`.about__data, .offer__img`, {
    origin: "right",
});
sr.reveal(`.features__map`, {
    delay: 600,
    origin: "bottom",
});
sr.reveal(`.features__card`, {
    interval: 300,
});
sr.reveal(`.featured__card, .logos__content, .footer__content`, {
    interval: 100,
});
