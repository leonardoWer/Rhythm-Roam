import styles from "./RhytmSection.module.css";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

export function createRhytmSection() {
    const section = document.createElement('section');
    section.id = 'rhytmSection';
    section.innerHTML = `
        <div class="${styles.rhytmContainer}">
            <h2 class="${styles.rhytmContainer__firstLine}">Built for your</h2>
            
            <div class="${styles.rhytmContainer__secondLine}">
                <i class="fa fa-music" aria-hidden="true"></i>
                <h2 class="${styles.secondLine__rhytmText}">RHYTM</h2>
            </div>
        </h2>
    `

    const firstLineText = section.querySelector(`.${styles.rhytmContainer__firstLine}`);
    const secondLineText = section.querySelector(`.${styles.secondLine__rhytmText}`);

    document.fonts.ready.then(() => {
        const firstLineSplitText = new SplitText(firstLineText, {type: "words"});
        gsap.from(firstLineSplitText.words, {
            opacity: 0.5,
            stagger: 0.5,
            scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "center 40%",
                scrub: true
            }
        });

        const getOffset = () => {
            const right = secondLineText.getBoundingClientRect().right;
            return window.innerWidth - right;

        }

        gsap.to(secondLineText, {
            x: getOffset(),
            scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "bottom 20%",
                scrub: 1,
                duration: 5,
                invalidateOnRefresh: true
            }
        })
    })

    return section;
}