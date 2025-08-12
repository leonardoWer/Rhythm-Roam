import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

import {createGlowLink} from "s/components/links/GlowLink/GlowLink.js";
import {createBenefitTile} from "s/components/BenefitTile/BenefitTile.js";
import {createShopTile} from "s/components/ShopTile/ShopTile.js";

function initSmoothScroll() {
    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
    });
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


function initFadeInScrollTriggerTextAnim() {
    document.fonts.ready.then(() => {
        const heroSubtitleSplitText = new SplitText(".hero-subtitle", {type: "words"})

        const heroSubtitleTextTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-subtitle",
                start: "top 80%",
                end: "+=200px",
                scrub: true,
            }
        })
        heroSubtitleTextTl.from(heroSubtitleSplitText.words, {
            opacity: 0.5,
            stagger: 0.2,
            ease: "power1.out",
        }, 0)
    })
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


function initShopSection() {
    const hpShopData = [
        {
            title: "Legacy",
            description: "The Rhythm & Roam Legacy is a timeless classic, blending iconic design with modern performance. Crafted for audiophiles who appreciate a balanced sound profile and enduring style",
            price: 179.99,
            colors: [
                "var(--darker-gray)",
                "var(--classic-hp-bg-color)",
            ],
            img: "img/hp/classic-hp.png",
            imgBg: "var(--classic-hp-bg-color)",
        },
        {
            title: "Stealth",
            description: "Embrace the night with the Rhythm & Roam Stealth. Featuring a sleek matte black finish and enhanced bass response, these headphones are perfect for urban exploration and immersive listening",
            price: 169.99,
            colors: [
                "black",
                "var(--darker-gray)",
            ],
            img: "img/hp/black-hp.png",
            imgBg: "var(--black-hp-bg-color)",
        },
        {
            title: "Oceanus",
            description: "Dive into the depths of sound with the Rhythm & Roam Oceanus. Inspired by the ocean, these vibrant blue headphones feature a waterproof design and rich, immersive audio",
            price: 159.99,
            colors: [
                "var(--darker-gray)",
                "var(--blue-hp-color-1)",
                "var(--blue-hp-color-2)",
            ],
            img: "img/hp/blue-hp.png",
            imgBg: "var(--blue-hp-bg-color)",
        },
        {
            title: "Summit",
            description: "Reach new heights with the Rhythm & Roam Summit. These pristine white headphones offer crystal-clear audio and a lightweight design, ideal for workouts and outdoor adventures",
            price: 169.99,
            colors: [
                "var(--white-hp-color-1)",
                "white"
            ],
            img: "img/hp/white-hp.png",
            imgBg: "var(--white-hp-bg-color)",
        },
    ]

    let leftListElementsData = [];
    let rightListElementsData = [];

    hpShopData.map((hpData, index) => {
        const { imgPart, contentPart} = createShopTile(hpData);
        if (index % 2 === 0) {
            leftListElementsData.push(imgPart);
            rightListElementsData.push(contentPart);
        } else {
            leftListElementsData.push(contentPart);
            rightListElementsData.push(imgPart);
        }
    })

    const leftContainer = document.querySelector(".shop-container-left__list");
    const rightContainer = document.querySelector(".shop-container-right__list");

    leftListElementsData.reverse().forEach((element) => {
        leftContainer.appendChild(element);
    })
    rightListElementsData.forEach((element) => {
        rightContainer.appendChild(element)
    })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".shop-container",
            start: "bottom bottom",
            end: "+=4000px",
            pin: true,
            scrub: true,
        }
    })
    tl.from(leftContainer, {
        yPercent: -75
    }, 0)
        .to(rightContainer, {
            yPercent: -75
        }, 0)
}

initFadeInScrollTriggerTextAnim();
initBaseFadeInText();

// Sections
initBenefitsSection();
initShopSection();

const container = document.querySelector('.contacts-container-center__content-container');
container.appendChild(createGlowLink({
    title: "Shop Now",
    onClick: {}
}));


document.addEventListener("DOMContentLoaded", function () {
    initSmoothScroll();
});
