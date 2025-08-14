import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export function createBenefitsSection() {
    const section = document.createElement('section');
    section.id = 'benefitsSection';
    section.innerHTML = `
        <div class="container headphones-container">
            <div class="headphones-content-container">

              <div class="headphones-container__top">
                <h2 class="headphones-container-top__text" data-fade-in>
                  Benefits
                </h2>
              </div>

              <div class="headphones-container__center-wrapper">
                <div class="headphones-container-center-wrapper__blur"></div>
                <div class="headphones-container__center">
                  <div class="headphones-container-center__wrapper"></div>
                </div>
              </div>

            </div>
        </div>
    `

    const bottomText = section.querySelector('.headphones-container-bottom__text');
    document.fonts.ready.then(() => {
        const bottomSplitText = new SplitText(bottomText, {type: "words"});
        gsap.from(bottomSplitText.words, {
            opacity: 0.5,
            stagger: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "20% 10%",
                end: "+=300px",
                scrub: true,
            }
        })
    })

    return section;
}