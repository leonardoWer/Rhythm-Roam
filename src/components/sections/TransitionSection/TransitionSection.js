import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export function createTransitionSection() {
    const section = document.createElement('section');
    section.id = 'transitionSection';
    section.innerHTML = `
        <div class="transition-content-container">

            <div class="transition-img-container">
              <img src="img/hp-bg.png" alt="headphones-collection" class="transition-img">
            </div>

            <div class="pink-line">
              <div class="pink-line__item"></div>
              <div class="pink-line__item"></div>
              <div class="pink-line__item"></div>
              <div class="pink-line__item"></div>
              <div class="pink-line__item"></div>
              <div class="pink-line__item"></div>
            </div>
        </div>
    `

    const contentContainer = section.querySelector('.transition-content-container');
    const imgContainer = section.querySelector('.transition-img-container');
    const pinkLine = section.querySelector('.pink-line');
    const pinkLineItems = pinkLine.querySelectorAll(".pink-line__item");

    gsap.from(imgContainer, {
        yPercent: 10,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: imgContainer,
            start: "top 60%",
            end: "70% 80%",
            scrub: true,
        }
    });

    gsap.fromTo(pinkLine, {height: "20vh"}, {
        height: "0vh",
        scrollTrigger: {
            trigger: contentContainer,
            start: "center 60%",
            end: "bottom 20%",
            scrub: true,
        }
    });
    pinkLineItems.forEach((lineItem, index) => {
        gsap.to(lineItem, {
            flexBasis: 10 * (index + 1),
            duration: 3,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
        })
    })

    return section;
}