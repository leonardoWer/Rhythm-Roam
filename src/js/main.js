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

import {createBenefitTile} from "s/components/BenefitTile/BenefitTile.js";


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

initBenefitsSection();
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

function initBenefitsSection() {

    const benefitsData = [
        {
            title: "Waterproof",
            img: "img/benefits/waterproof.jpg",
        },
        {
            title: "Durable",
            img: "img/benefits/durable.png",
        },
        {
            title: "Comfortable",
            img: "img/benefits/comfortable.png",
        },
        {
            title: "Long Battery Life",
            img: "img/benefits/battery.png",
        },
    ];


    const hpContainerCenter = document.querySelector('.headphones-container__center');
    const wrapper = document.querySelector('.headphones-container-center__wrapper');

    // 1. Создание тайлов и добавление в контейнер:
    benefitsData.map(tileData => {
        const tile = createBenefitTile(tileData);
        wrapper.appendChild(tile);
    });

    const wrapperCopy = wrapper.cloneNode(true);

    hpContainerCenter.appendChild(wrapper);
    hpContainerCenter.appendChild(wrapperCopy);

    // Анимация с GSAP:
    const fadeInTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".headphones-container",
            start: "60% bottom",
        }
    })
    fadeInTl.to(hpContainerCenter,
        {
            xPercent: -98,
            duration: 20,
            ease: "none",
            repeat: -1,
        }, 0)
        .from(".headphones-container__center-wrapper", {
            opacity: 0,
            ease: "power1.in",
            duration: 0.4
        }, 0.5)
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