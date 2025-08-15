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

    const titleData = section.querySelectorAll('.hero-text-container > h2');
    const subtitle = section.querySelector('.hero-subtitle');


    const tl = gsap.timeline();
    // Title anim
    tl.from(titleData[0], {
        yPercent: -100,
        duration: 0.5,
        ease: "power2.out",
    }, 0)
    tl.from(titleData[1], {
        xPercent: -100,
        duration: 1,
        ease: "sine.inOut",
    }, 0)
    tl.from(titleData[2], {
        yPercent: 100,
        duration: 0.5,
        ease: "power2.out",
    }, 0)

    tl.from(subtitle, {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.8
    }, 2.5)

    // Subtitle anim
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