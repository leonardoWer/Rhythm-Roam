import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText)

import {initSmoothScroll} from "s/js/gsap/smoothScroll.js";

import {createHeroSection} from "s/components/sections/HeroSection/HeroSection.js";
import {createAboutSection} from "s/components/sections/AboutSection/AboutSection.js";
import {createBenefitsSection} from "s/components/sections/BenefitsSection/BenefitsSection.js";
import {createRhytmSection} from "s/components/sections/RhytmSection/RhytmSection.js";
import {createTransitionSection} from "s/components/sections/TransitionSection/TransitionSection.js";
import {createShopSection} from "s/components/sections/ShopSection/ShopSection.js";
import {createContactsSection} from "s/components/sections/ContactsSection/ContactsSection.js";

// SmoothScroll
initSmoothScroll();

// Sections
const page = document.getElementById("smooth-content");
page.appendChild(createHeroSection());
page.appendChild(createAboutSection());
page.appendChild(createBenefitsSection());
page.appendChild(createRhytmSection());
page.appendChild(createTransitionSection());
page.appendChild(createShopSection());
page.appendChild(createContactsSection());

initTransitionSection();

function initBaseFadeInText() {
    const baseFadeInText = document.querySelectorAll("[data-fade-in]");
    baseFadeInText.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "60% bottom",
            },
            yPercent: 80,
            ease: "power1.out",
            duration: 0.8,
        })
    })
}

function initTransitionSection() {
    gsap.from(".transition-img-container", {
        yPercent: 15,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".transition-img-container",
            start: "10% 60%",
            end: "80% 30%",
            scrub: true,
        }
    });

    gsap.to(".pink-line", {
        height: 0,
        scrollTrigger: {
            trigger: ".transition-img-container",
            start: "center 60%",
            end: "bottom 20%",
            scrub: true,
        }
    });

    const pinkLineItems = document.querySelectorAll(".pink-line__item");
    pinkLineItems.forEach((lineItem, index) => {
        gsap.to(lineItem, {
            flexBasis: 10 * (index + 1),
            duration: 3,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
        })
    })
}

initBaseFadeInText();