import styles from "./ContactsSection.module.css";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

import {createGlowLink} from "s/components/links/GlowLink/GlowLink.js";

export function createContactsSection() {
    const section = document.createElement('section');
    section.id = 'contactsSection';
    section.innerHTML = `
        <div class="container ${styles['contacts-container']}">
        
            <h4 class="${styles['contacts-container-left__title']}">Navigation</h4>
            
            <div class="${styles['contacts-container__left']}">
              <ul class="${styles['contacts-container__list']}">
                <li class="${styles['contacts-container-list__item']}">home</li>
                <li class="${styles['contacts-container-list__item']}">about</li>
                <li class="${styles['contacts-container-list__item']}">benefits</li>
                <li class="${styles['contacts-container-list__item']}">shop</li>
                <li class="${styles['contacts-container-list__item']}">contact</li>
              </ul>
            </div>

            <div class="${styles['contacts-container__center']}">
              <div class="${styles['contacts-container-center__logo-container']}">
                RHYTM & ROAM
              </div>

              <div class="${styles['contacts-container-center__content-container']}">
                <h4 class="${styles['contacts-container-center-content-container__title']}">
                  Ready to Experience the Difference?
                </h4>
              </div>

            </div>

            <h4 class="${styles['contacts-container-right__title']}">Contacts</h4>
            
            <div class="${styles['contacts-container__right']}">
              <ul class="${styles['contacts-container__list']}">
                <li class="${styles['contacts-container-list__item']}">vk</li>
                <li class="${styles['contacts-container-list__item']}">tg</li>
                <li class="${styles['contacts-container-list__item']}">git</li>
              </ul>
              
            </div>
        </div>
    `

    const contentContainer = section.querySelector(`.${styles['contacts-container-center__content-container']}`);
    contentContainer.appendChild(createGlowLink({
        title: "Shop Now",
        onClick: {}
    }));


    const leftContainer = section.querySelector(`.${styles['contacts-container__left']}`);
    const centerContainer = section.querySelector(`.${styles['contacts-container__center']}`);
    const rightContainer = section.querySelector(`.${styles['contacts-container__right']}`);

    const text = section.querySelector(`.${styles['contacts-container-center-content-container__title']}`);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "center 80%",
            scrub: 1
        },
    })

    tl.from(leftContainer, {
        xPercent: -10,
    }, 0)
        .from(rightContainer, {
            xPercent: 10,
        }, 0)
        .from(centerContainer, {
            yPercent: 10,
        }, 0)


    document.fonts.ready.then(() => {
        const splitText = new SplitText(text,{type: "words"})
        gsap.from(splitText.words, {
            opacity: 0.5,
            stagger: 0.5,
            rotateZ: "20deg",
            scrollTrigger: {
                trigger: section,
                start: "top 30%",
                end: "80% bottom",
                scrub: true
            }
        })
    })


    return section;
}