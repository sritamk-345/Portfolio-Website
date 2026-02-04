const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

// ---- CLICK FIX (IMMEDIATE RESPONSE) ----
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// ---- SCROLL FIX (AUTO UPDATE) ----
window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200; // header offset
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < windowHeight - 120){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
const home = document.querySelector(".home");

document.addEventListener("mousemove", e => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    // home.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
const text = ".Sri!!!";
const speed = 90;      // typing speed
const eraseSpeed = 80;  // erasing speed
const delayAfterType = 1200;

let index = 0;
let isDeleting = false;
const logoText = document.getElementById("logo-text");

function typeEffect() {
    if (!isDeleting) {
        // Typing
        logoText.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            setTimeout(() => isDeleting = true, delayAfterType);
        }
    } else {
        // Deleting
        logoText.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, isDeleting ? eraseSpeed : speed);
}

typeEffect();
const educationSection = document.querySelector('.education');

const eduObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        educationSection.style.animationPlayState =
            entry.isIntersecting ? 'running' : 'paused';
    });
}, { threshold: 0.2 });

eduObserver.observe(educationSection);
const eduCards = document.querySelectorAll(".edu-card");

eduCards.forEach(card => {
    card.addEventListener("click", () => {
        eduCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });
});
const certCards = document.querySelectorAll(".cert-card");

certCards.forEach(card => {
    card.addEventListener("click", () => {
        certCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });
});
document.querySelector('a[href="#home"]').addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

