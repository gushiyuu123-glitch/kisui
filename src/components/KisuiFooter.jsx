// =======================================================
//  🌊 KISUI FOOTER — NO BORDER BETWEEN SECTIONS
// =======================================================

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import waveImg from "../assets/kisui-footer-wave1.png";

gsap.registerPlugin(ScrollTrigger);

export default function KisuiFooter() {
  const wrapRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapRef.current,
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.to(lineRef.current, {
        scaleY: 1.06,
        duration: 7.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={wrapRef}
      className="
        relative w-full
        pt-[260px] pb-[130px]
        overflow-hidden
        bg-kisui-tone/55
        backdrop-blur-[1.2px]
      "
    >

      {/* === 上方向フェード（Sectionとの境目を消す） === */}
      <div
        className="
          absolute top-0 left-0 w-full h-[200px]
          bg-gradient-to-t
          from-transparent
          via-white/40
          to-white/80
          pointer-events-none
        "
      />

      {/* === Dior系センターライン === */}
      <div
        ref={lineRef}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[1px] h-full
          bg-white/35 blur-[0.6px] opacity-[0.55]
          pointer-events-none
        "
      />

      {/* === 波（にじませ固定） === */}
      <img
        src={waveImg}
        alt="water wave"
        className="
          absolute bottom-0 left-1/2
          -translate-x-1/2
          w-[1980px]
          opacity-[0.42]
          blur-[0.8px]
          drop-shadow-[0_0_18px_rgba(255,255,255,0.20)]
          pointer-events-none
        "
      />

      {/* === 上膜グラデ === */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/60 via-white/25 to-transparent
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-[880px] mx-auto">

        <h2
          className="
            text-[18px]
            tracking-[0.22em]
            font-light
            text-black/60
            mb-2
          "
        >
          K I S U I
        </h2>

        <p
          className="
            text-[12px]
            tracking-[0.15em]
            text-black/45
            leading-[2]
            max-w-[520px] mx-auto
            mb-10
          "
        >
          透明感とやさしさを、毎日のスキンケアに。  <br></br>
          澄んだ水のように、肌へすっと溶け込む心地よさをお届けします。
        </p>

        <div
          className="
            flex items-center justify-center gap-8
            text-[12px]
            tracking-[0.12em]
            text-black/35
            mb-12
          "
        >
          <span className="hover:text-black/55 transition-colors cursor-pointer">
            製品情報
          </span>
          <span className="h-[12px] w-[1px] bg-white/25" />
          <span className="hover:text-black/55 transition-colors cursor-pointer">
            ご利用ガイド
          </span>
          <span className="h-[12px] w-[1px] bg-white/25" />
          <span className="hover:text-black/55 transition-colors cursor-pointer">
            お問い合わせ
          </span>
        </div>

        <p
          className="
            text-[11px]
            tracking-[0.10em]
            text-black/30
            mb-4
          "
        >
          © {new Date().getFullYear()} KISUI — All Rights Reserved.
        </p>

        <p
          className="
            text-[10px]
            tracking-[0.14em]
            text-black/25
          "
        >
          <a
            href="https://gushikendesign.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black/40 transition-colors"
          >
            Designed by Gushiken Design
          </a>
        </p>
      </div>
    </footer>
  );
}