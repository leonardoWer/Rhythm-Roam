import {SplitText} from "gsap/SplitText";
import gsap from "gsap";

export function createHeroSection() {
    const section = document.createElement('section');
    section.id = 'heroSection';
    section.innerHTML = `
        <div class="hero-container">
            <div class="hero-text-container">
              <h2 class="hero-text__top">RHYTM</h2>
              <h2 class="hero-text__center">&</h2>
              <h2 class="hero-text__bottom">ROAM</h2>
            </div>

            <h4 class="hero-subtitle">Unleash Your Soundtrack</h4>
        </div>
    `

    const subtitle = section.querySelector('.hero-subtitle');

    document.fonts.ready.then(() => {
        const heroSubtitleSplitText = new SplitText(subtitle, {type: "words, chars"})

        const heroSubtitleTextTl = gsap.timeline({
            scrollTrigger: {
                trigger: subtitle,
                start: "top 85%",
                end: "top 10%",
                scrub: true,
            }
        })

        heroSubtitleTextTl.from(heroSubtitleSplitText.words, {
            opacity: 0.5,
            stagger: 0.5,
            ease: "power3.out",
        }, 0)
            .to(heroSubtitleSplitText.chars, {
                rotateZ: "20deg",
                yPercent: 100,
                stagger: 0.4,
                ease: "power1.in",
            })
    })

    return section;
}