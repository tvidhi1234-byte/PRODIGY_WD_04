// =========================
// Typing Effect
// =========================

const roles = [
    "Web Developer",
    "AI Enthusiast",
    "Machine Learning Learner",
    "Computer Engineering Student"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    if (!typingElement) return;

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =========================
// Active Navbar Link
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {
            link.classList.add("active");
        }
    });
});

// =========================
// Fade In Animation
// =========================

const revealElements =
document.querySelectorAll(
".skill-card,.project-card,.education-card,.cert"
);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);

reveal();

// =========================
// Back To Top Button
// =========================

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 18px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#38bdf8";
topButton.style.color = "#fff";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.fontSize = "18px";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// Welcome Message
// =========================

window.addEventListener("load", () => {

    console.log(
        "Welcome to Vidhi's Portfolio Website 🚀"
    );
});
