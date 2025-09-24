// Wait for the DOM to be fully loaded before initializing AOS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 50,  
        startEvent: 'DOMContentLoaded',  
        disable: false,  
        initClassName: 'aos-init',  
        animatedClassName: 'aos-animate'  
    });
    
    // Refresh AOS after initialization to ensure proper detection
    setTimeout(() => {
        AOS.refresh();
    }, 100);
});

// Mobile navigation functionality
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');
const navOverlay = document.getElementById('nav-overlay');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

let isNavOpen = false;

function toggleNav() {
    isNavOpen = !isNavOpen;

    if (isNavOpen) {
        // Open navigation
        mobileNav.classList.remove('-translate-x-full');
        mobileNav.classList.add('translate-x-0');
        navOverlay.classList.remove('opacity-0', 'invisible');
        navOverlay.classList.add('opacity-100', 'visible');
        document.body.style.overflow = 'hidden'; // Prevent scrolling

        // Animate nav items in
        setTimeout(() => {
            mobileNavItems.forEach(item => {
                item.classList.remove('opacity-0', '-translate-x-5');
                item.classList.add('opacity-100', 'translate-x-0');
            });
        }, 150);

    } else {
        // Close navigation
        mobileNav.classList.remove('translate-x-0');
        mobileNav.classList.add('-translate-x-full');
        navOverlay.classList.remove('opacity-100', 'visible');
        navOverlay.classList.add('opacity-0', 'invisible');
        document.body.style.overflow = 'auto'; // Restore scrolling

        // Reset nav items
        mobileNavItems.forEach(item => {
            item.classList.remove('opacity-100', 'translate-x-0');
            item.classList.add('opacity-0', '-translate-x-5');
        });
    }
}

// Event listeners
hamburgerBtn.addEventListener('click', toggleNav);
navOverlay.addEventListener('click', toggleNav);

// Close nav when clicking on mobile nav links
const mobileNavLinks = document.querySelectorAll('#mobile-nav a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isNavOpen) {
            toggleNav();
        }
    });
});

// Close nav on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isNavOpen) {
        toggleNav();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isNavOpen) {
        toggleNav();
    }
});

/* Swiper functionality */

new Swiper("#swiper-1", {
    slidesPerView: 1,         // show only one slide at a time
    spaceBetween: 30,
    effect: "slide",          // use "slide" (not fade, since you want multiple slides nav)
    loop: true,               // make it loop infinitely
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: "#swiper-1 .swiper-button-next",
        prevEl: "#swiper-1 .swiper-button-prev"
    }
});

new Swiper("#swiper-2", {
    slidesPerView: 1,
    effect: "slide",
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: "#swiper-2 .swiper-pagination1",
        clickable: true
    },
    navigation: {
        nextEl: "#swiper-2 .swiper-button-next1",
        prevEl: "#swiper-2 .swiper-button-prev1"
    }
});

new Swiper("#swiper-3", {
    slidesPerView: 1,
    effect: "slide",
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: "#swiper-3 .swiper-pagination3",
        clickable: true
    },
    navigation: {
        nextEl: "#swiper-3 .swiper-button-next3",
        prevEl: "#swiper-3 .swiper-button-prev3"
    }
});

new Swiper("#swiper-4", {
    slidesPerView: 1,
    effect: "slide",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: "#swiper-4 .swiper-pagination4",
        clickable: true
    },
    navigation: {
        nextEl: "#swiper-4 .swiper-button-next4",
        prevEl: "#swiper-4 .swiper-button-prev4"
    }
});