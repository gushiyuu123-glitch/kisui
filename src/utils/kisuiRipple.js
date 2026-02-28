// src/utils/kisuiRipple.js
import gsap from "gsap";

export function initKisuiRipple() {
  gsap.to("feTurbulence", {
    attr: { baseFrequency: "0.016 0.014" },
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}