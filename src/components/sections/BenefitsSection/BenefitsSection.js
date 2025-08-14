import styles from "./BenefitsSection.module.css";

import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import {createBenefitTile} from "s/components/BenefitTile/BenefitTile.js";

export function createBenefitsSection() {
    const section = document.createElement('section');
    section.id = 'benefitsSection';
    section.innerHTML = `
        <div class="container ${styles['benefits-container']}">
            <div class="${styles['benefits-content-container']}">

                <h2 class="${styles['benefits-container-top__text']}" data-fade-in>
                  Benefits
                </h2>
              
                <div class="${styles['benefits-container__center']}"></div>

            </div>
        </div>
    `

    const benefitsData = [
        {
            title: "AuraClear sound",
            img: "img/benefits/sound-icon.png",
        },
        {
            title: "Noise cancellation",
            img: "img/benefits/noise-icon.png",
        },
        {
            title: "Waterproof",
            img: "img/benefits/waterproof-icon.png",
        },
        {
            title: "Comfortable Fit",
            img: "img/benefits/comfortable-icon.png",
        },
    ];

    const tilesContainer = section.querySelector(`.${styles['benefits-container__center']}`);
    benefitsData.forEach(tileData => {tilesContainer.appendChild(createBenefitTile(tileData));})

    return section;
}