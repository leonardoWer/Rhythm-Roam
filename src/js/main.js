import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText)

import {initSmoothScroll} from "s/js/gsap/smoothScroll.js";

import {createTopMenu} from "s/components/TopMenu/TopMenu.js";
import {createHeroSection} from "s/components/sections/HeroSection/HeroSection.js";
import {createAboutSection} from "s/components/sections/AboutSection/AboutSection.js";
import {createBenefitsSection} from "s/components/sections/BenefitsSection/BenefitsSection.js";
import {createRhytmSection} from "s/components/sections/RhytmSection/RhytmSection.js";
import {createTransitionSection} from "s/components/sections/TransitionSection/TransitionSection.js";
import {createShopSection} from "s/components/sections/ShopSection/ShopSection.js";
import {createContactsSection} from "s/components/sections/ContactsSection/ContactsSection.js";

// SmoothScroll
initSmoothScroll();

// Top Menu
document.querySelector("header").appendChild(createTopMenu());

// Sections
const page = document.getElementById("smooth-content");
page.appendChild(createHeroSection());
page.appendChild(createAboutSection());
page.appendChild(createBenefitsSection());
page.appendChild(createRhytmSection());
page.appendChild(createTransitionSection());
page.appendChild(createShopSection());
page.appendChild(createContactsSection());
page.appendChild(createBuyContainer());

function createBuyContainer() {
    const buyContainer = document.createElement("div");
    buyContainer.className = "buy-container";
    buyContainer.innerHTML = `
        <a class="buy-text" href="https://t.me/leonardo_Wer">You can buy this website</a>
    `;

    return buyContainer;
}

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

initBaseFadeInText();