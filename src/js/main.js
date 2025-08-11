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


initBenefits();


document.addEventListener("DOMContentLoaded", function () {
    initSmoothScroll();
});
