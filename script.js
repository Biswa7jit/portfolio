/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   1. MOBILE MENU
========================================= */

const navLinks = document.querySelector(".nav-links");

if (navLinks) {
    navLinks.addEventListener("click", function (event) {

        if (event.target.tagName === "A") {
            navLinks.classList.remove("active");
        }

    });
}


/* =========================================
   2. SMOOTH SCROLLING
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================
   3. SKILL CARD INTERACTION
========================================= */

const skillCategories = document.querySelectorAll(".skill-category");

skillCategories.forEach(function (category) {

    category.addEventListener("click", function () {

        this.classList.toggle("expanded");

    });

});


/* =========================================
   4. PROJECT CARD INTERACTION
========================================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    card.addEventListener("click", function () {

        this.classList.toggle("selected");

    });

});


/* =========================================
   5. CURRENT YEAR IN FOOTER
========================================= */

const footer = document.querySelector("footer p");

if (footer) {

    const currentYear = new Date().getFullYear();

    footer.innerHTML =
        `© ${currentYear} Biswajit Das. All Rights Reserved.`;

}


/* =========================================
   6. SCROLL REVEAL EFFECT
========================================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function (section) {

    observer.observe(section);

});
/* ========================================= CERTIFICATION ACCORDION ========================================= */ 
const certificationButtons = document.querySelectorAll(".certification-button"); 
certificationButtons.forEach(function (button) 
{ button.addEventListener("click", 
function () { const certification = this.parentElement; 
certification.classList.toggle("active"); }); });