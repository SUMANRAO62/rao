// ==================== ACTIVE HAMBURGER MENU ====================

let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});


// ==================== REMOVE NAVLIST ====================

navlist.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
});


// ==================== HERO IMAGE ====================
// Aapki uploaded photo img/hero.png ke naam se honi chahiye

const heroImage = document.querySelector(".img-hero img");

if (heroImage) {
    heroImage.src = "img/hero.png";
    heroImage.alt = "Suman Rao";
}

// ==================== ROTATE TEXT JS ====================

let text = document.querySelector(".text p");

if (text) {

    let chars = text.textContent.trim().split("");
    let angle = 360 / chars.length;

    text.innerHTML = chars.map((char, i) => {

        if (char === " ") {
            return `<b style="opacity:0;">&nbsp;</b>`;
        }

        return `
            <b style="
                transform:
                translate(-50%, -50%)
                rotate(${i * angle}deg)
                translateY(-238px);
            ">
                ${char}
            </b>
        `;

    }).join("");

}

// ==================== SWITCH BETWEEN ABOUT BUTTONS ====================

const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        contents.forEach(content => {
            content.style.display = "none";
        });

        if (contents[index]) {
            contents[index].style.display = "block";
        }

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// ==================== PORTFOLIO FILTER ====================

var mixer = mixitup(".portfolio-gallery", {

    selectors: {
        target: ".portfolio-box"
    },

    animation: {
        duration: 500
    }

});


// ==================== SIDE PROGRESS BAR ====================

let calcScrollValue = () => {

    let scrollProgress =
        document.getElementById("progress");

    if (!scrollProgress) return;

    let pos =
        document.documentElement.scrollTop;

    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrollValue =
        Math.round((pos * 100) / calcHeight);


    if (pos > 100) {

        scrollProgress.style.display = "grid";

    } else {

        scrollProgress.style.display = "none";

    }


    scrollProgress.style.background =
        `conic-gradient(#fff ${scrollValue}%, #e6006d ${scrollValue}%)`;

};


window.addEventListener("scroll", calcScrollValue);
window.addEventListener("load", calcScrollValue);


// ==================== SCROLL TO TOP ====================

let scrollProgress =
    document.getElementById("progress");

if (scrollProgress) {

    scrollProgress.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


// ==================== ACTIVE MENU ====================

let menuLi =
    document.querySelectorAll("header ul li a");

let section =
    document.querySelectorAll("section");


function activeMenu() {

    let len = section.length;

    while (
        --len &&
        window.scrollY + 97 < section[len].offsetTop
    ) {}

    menuLi.forEach(sec => {

        sec.classList.remove("active");

    });


    if (menuLi[len]) {

        menuLi[len].classList.add("active");

    }

}


activeMenu();

window.addEventListener("scroll", activeMenu);


// ==================== SCROLL REVEAL ====================

ScrollReveal({

    distance: "90px",
    duration: 2000,
    delay: 200,

});


// Hero text

ScrollReveal().reveal(

    ".hero-info,.main-text,.proposal,.heading",

    {
        origin: "top"
    }

);


// About image / filters / contact

ScrollReveal().reveal(

    ".about-img,.fillter-buttons,.contact-info",

    {
        origin: "left"
    }

);


// About content

ScrollReveal().reveal(

    ".about-content",

    {
        origin: "right"
    }

);


// Services / portfolio / skills / footer / hero image

ScrollReveal().reveal(

    ".allServices,.portfolio-gallery,.skills-grid,footer,.img-hero",

    {
        origin: "bottom"
    }

);


// ==================== DARK / LIGHT MODE ====================

const themeToggles = document.querySelectorAll(".theme-toggle");

function setTheme(isDark) {

    if (isDark) {

        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");

        themeToggles.forEach(toggle => {

            const icon = toggle.querySelector("i");

            if (icon) {
                icon.classList.remove("bx-moon");
                icon.classList.add("bx-sun");
            }

        });

    } else {

        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");

        themeToggles.forEach(toggle => {

            const icon = toggle.querySelector("i");

            if (icon) {
                icon.classList.remove("bx-sun");
                icon.classList.add("bx-moon");
            }

        });

    }

}


// ==================== LOAD SAVED THEME ====================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    setTheme(true);
} else {
    setTheme(false);
}


// ==================== THEME BUTTON CLICK ====================

themeToggles.forEach(toggle => {

    toggle.addEventListener("click", () => {

        const isDark =
            document.body.classList.contains("dark-mode");

        setTheme(!isDark);

    });

});


// =========================
// PREMIUM NEON CURSOR
// =========================

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");


// Agar HTML mein cursor elements nahi hain to code stop ho jayega
if (cursor && follower) {

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;


    // =========================
    // MOUSE POSITION
    // =========================

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        // Main dot immediately move karega
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";

    });


    // =========================
    // SMOOTH FOLLOWER
    // =========================

    function animateCursor() {

        followerX += (mouseX - followerX) * 0.14;
        followerY += (mouseY - followerY) * 0.14;

        follower.style.left = followerX + "px";
        follower.style.top = followerY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();


    // =========================
    // HOVER EFFECT
    // =========================

    const cursorItems = document.querySelectorAll(
        "a, button, input, textarea, select, .btn, .navlist a, .service-box, .portfolio-box, .portfolio-card, .skill-box, .contact-box"
    );


    cursorItems.forEach((item) => {

        item.addEventListener("mouseenter", () => {

            document.body.classList.add("cursor-hover");

        });


        item.addEventListener("mouseleave", () => {

            document.body.classList.remove("cursor-hover");

        });

    });


    // =========================
    // CLICK EFFECT
    // =========================

    document.addEventListener("mousedown", () => {

        document.body.classList.add("cursor-click");

    });


    document.addEventListener("mouseup", () => {

        document.body.classList.remove("cursor-click");

    });


    // =========================
    // CLICK RIPPLE
    // =========================

    document.addEventListener("click", (e) => {

        const ripple = document.createElement("span");

        ripple.classList.add("cursor-ripple");

        ripple.style.left = e.clientX + "px";
        ripple.style.top = e.clientY + "px";

        document.body.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });


    // =========================
    // PARTICLE TRAIL
    // =========================

    let lastParticle = 0;


    document.addEventListener("mousemove", (e) => {

        const now = Date.now();

        if (now - lastParticle < 55) {
            return;
        }

        lastParticle = now;

        createParticle(e.clientX, e.clientY);

    });


    function createParticle(x, y) {

        const particle = document.createElement("span");

        particle.classList.add("cursor-particle");

        particle.style.left = x + "px";
        particle.style.top = y + "px";


        const randomX =
            (Math.random() - 0.5) * 35;

        const randomY =
            (Math.random() - 0.5) * 35;


        particle.style.setProperty(
            "--move-x",
            randomX + "px"
        );


        particle.style.setProperty(
            "--move-y",
            randomY + "px"
        );


        document.body.appendChild(particle);


        setTimeout(() => {

            particle.remove();

        }, 700);

    }

}


// form validaction

const form = document.getElementById("myForm");

form.addEventListener("submit")