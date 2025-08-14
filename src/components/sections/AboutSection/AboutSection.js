import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export function createAboutSection() {
    const section = document.createElement('section');
    section.id = 'aboutSection';
    section.innerHTML = `
        <div class="container about-container">
            <div class="about-text-container">
              <h2 class="about-title" data-fade-in>About us</h2>
              <p class="about-text">
                At Rhythm & Roam, we believe that music should move with you, wherever your adventures take you. We started with a simple idea: to create headphones that combine premium audio quality with the durability and comfort needed for an active lifestyle
              </p>
            </div>
        </div>
    `

    const aboutText = section.querySelector('.about-text');
    document.fonts.ready.then(() => {
        const aboutSplitText = new SplitText(aboutText, {type: 'chars'});

        gsap.from(aboutSplitText.chars, {
            opacity: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: aboutText,
                start: "top 90%",
                end: "top 40%",
                scrub: 1,
            }
        })
    })

    return section;
}