import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

import {createGlowLink} from "s/components/links/GlowLink/GlowLink.js";
import {createBenefitTile} from "s/components/BenefitTile/BenefitTile.js";

function initSmoothScroll() {
    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
    });
}

function initBenefits() {

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


    const opacityFactor = 0.5;

    const hpContainerCenter = document.querySelector('.headphones-container__center');
    const wrapper = document.querySelector('.headphones-container-center__wrapper');

    // 1. Создание тайлов и добавление в контейнер:
    const tiles = benefitsData.map(tileData => {
        const tile = createBenefitTile(tileData);
        wrapper.appendChild(tile);
        return tile;
    });

    const wrapperCopy = wrapper.cloneNode(true);

    hpContainerCenter.appendChild(wrapper);
    hpContainerCenter.appendChild(wrapperCopy);

    // Анимация с GSAP:
    gsap.to(hpContainerCenter,
        {
            xPercent: -98,
            duration: 15,
            ease: "none",
            repeat: -1,
        });
}

initBenefits();


document.addEventListener("DOMContentLoaded", function () {
    initSmoothScroll();
});
