import gsap from "gsap";
import {ScrollSmoother} from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollSmoother);

export function initSmoothScroll() {
    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
    });
}