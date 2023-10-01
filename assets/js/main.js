           /*=============== Dark Mode================*/

    function toggleColorScheme() {
    const body = document.body;
    const currentColorScheme = body.classList.contains('dark') ? 'dark' : 'light';
    const newColorScheme = currentColorScheme === 'light' ? 'dark' : 'light';

    // Toggle the class on the <body> element
    body.classList.remove(currentColorScheme);
    body.classList.add(newColorScheme);
  }

  // Add a click event listener to the button
  const Toggle = document.getElementById('toggle__button');
  Toggle.addEventListener('click', toggleColorScheme);

    // Function to toggle the color scheme and button icon
    function toggleColorScheme() {
        const body = document.body;
        const currentColorScheme = body.classList.contains('dark') ? 'dark' : 'light';
        const newColorScheme = currentColorScheme === 'light' ? 'dark' : 'light';
    
        // Toggle the class on the <body> element
        body.classList.remove(currentColorScheme);
        body.classList.add(newColorScheme);
    
        // Toggle the class on the button element
        const Toggle = document.getElementById('toggle__button');
        Toggle.classList.toggle('ri-moon-line');
        Toggle.classList.toggle('ri-sun-line');
      }
    
      // Add a click event listener to the button
      const toggleButton = document.getElementById('toggle__button');
      toggleButton.addEventListener('click', toggleColorScheme);

      //Loading Spinner
      window.addEventListener('load', function () {
        const loaderContainer = document.querySelector('.loader-container');
        loaderContainer.style.display = 'none';
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
    duration: 1200,
    delay: 200,
    // reset: true,
});

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`);
sr.reveal(`.home__subtitle`, {
    delay: 0,
});
sr.reveal(`.home__elec`, {
    delay: 0,
});
sr.reveal(`.home__img`, {
    delay: 0,
});
sr.reveal(`.home__car-data`, {
    delay: 0,
    interval: 0,
    origin: "bottom",
});
sr.reveal(`.home__button`, {
    delay: 0,
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
