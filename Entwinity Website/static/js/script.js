// note: read the comments before you edit 
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Cursor movement and style
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
});



// GSAP Animation ----------------- Change background color on scroll
gsap.to("#main", {
    backgroundColor: "#9898e8", // Lavender color
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%", 
        end: "top -70%",   
        scrub: 2,
    }
});

// GSAP Animations for other elements
gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
});

gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
});

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
});

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    }
});

// Scroll event listener for header background color change
window.addEventListener("scroll", function () {
    const nav = document.getElementById("nav");
    const logo = nav.querySelector("img");
    const scrollThreshold = window.innerHeight / 2;

    if (window.scrollY > scrollThreshold) {
        nav.classList.add("scrolled");
        nav.classList.remove("default");
        logo.classList.add("white-logo");
    } else {
        nav.classList.add("default");
        nav.classList.remove("scrolled");
        logo.classList.remove("white-logo");
    }
});

// Dynamic Text Typing Effect
const textElement = document.getElementById('dynamic-text');
const words = ['Global Connections', 'International Networking', 'Leadership Opportunities', 'Collaborative Research', 'Skill Enhancement', 'Impactful Solutions', 'Career Development'];
let wordIndex = 0;
let charIndex = 0;
let isTyping = true;

function type() {
    if (isTyping) {
        if (charIndex < words[wordIndex].length) {
            textElement.innerHTML = 'Uncover the realm of <span class="dynamic-word">' + words[wordIndex].substring(0, charIndex + 1) + '</span>';
            charIndex++;
            setTimeout(type, 100); 
        } else {
            isTyping = false;
            setTimeout(erase, 2000); 
        }
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.innerHTML = 'Uncover the realm of <span class="dynamic-word">' + words[wordIndex].substring(0, charIndex - 1) + '</span>';
        charIndex--;
        setTimeout(erase, 50); 
    } else {
        isTyping = true;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(() => {
            textElement.innerHTML = 'Where you explore <span class="dynamic-word"></span>';
            textElement.style.animation = 'blink-caret .75s step-end infinite';
            type(); 
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    textElement.style.animation = 'blink-caret .75s step-end infinite';
    type(); 
});

