import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import {createShopTile} from "s/components/ShopTile/ShopTile.js";

export function createShopSection() {
    const section = document.createElement('section');
    section.id = 'shopSection';
    section.innerHTML = `
        <div class="container shop-container">

            <div class="shop-container__left">
              <div class="shop-container-left__list"></div>
            </div>

            <div class="shop-container__right">
              <div class="shop-container-right__list"></div>
            </div>

        </div>
    `

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

    const shopContainer = section.querySelector('.shop-container');
    const leftContainer = section.querySelector(".shop-container-left__list");
    const rightContainer = section.querySelector(".shop-container-right__list");

    leftListElementsData.reverse().forEach((element) => {
        leftContainer.appendChild(element);
    })
    rightListElementsData.forEach((element) => {
        rightContainer.appendChild(element)
    })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: shopContainer,
            start: "top top",
            end: "+=6000px",
            pin: true,
            scrub: true,
        }
    })
    tl.fromTo(leftContainer, {
        yPercent: -75
    }, {
        yPercent: -50,
        ease: "power1.inOut"
    }, 0)
        .to(rightContainer, {
            yPercent: -25,
            ease: "power1.inOut"
        }, 0)

        .fromTo(leftContainer, {
            yPercent: -50
        }, {
            yPercent: -25,
            ease: "power1.inOut"
        }, 0.5)
        .to(rightContainer, {
            yPercent: -50,
            ease: "power1.inOut"
        }, 0.5)

        .fromTo(leftContainer, {
            yPercent: -25
        }, {
            yPercent: 0,
            ease: "power1.inOut"
        }, 1)
        .to(rightContainer, {
            yPercent: -75,
            ease: "power1.inOut"
        }, 1)


    return section;
}