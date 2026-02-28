// ==============================================
// KISUI HERO — GLASS FILM + WATER BREATH EDITION
// ==============================================

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/kisui.css";

import KisuiHeroWater from "../utils/KisuiHeroWater";

import heroImg from "../assets/kisui-hero-model.png";
import bottleImg from "../assets/kisui-bottle.png";

export default function KisuiHero() {
  const logoRef = useRef(null);
  const subRef = useRef(null);
  const catchRef = useRef(null);
  const rippleRef = useRef(null);
  const bottleRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "sine.out" } });

      /* 0. 背景フェード */
      tl.from(heroRef.current, {
        opacity: 0,
        scale: 1.012,
        filter: "blur(2.2px)",
        duration: 1.55,
        ease: "power2.out",
      });

      /* 1. ロゴ */
      tl.from(
        logoRef.current,
        { opacity: 0, y: 14, filter: "blur(0.55px)", duration: 1.35 },
        "-=0.85"
      );

      /* 2. Ripple Light */
      tl.fromTo(
        rippleRef.current,
        {
          opacity: 0,
          scale: 0.72,
          filter: "blur(26px)",
        },
        {
          opacity: 0.48,
          scale: 1.16,
          filter: "blur(32px)",
          backgroundColor: "rgba(255,255,255,0.48)",
          duration: 1.15,
        },
        "-=0.55"
      ).to(
        rippleRef.current,
        { opacity: 0, duration: 0.72, ease: "sine.in" },
        "-=0.32"
      );

      /* 3. サブタイトル */
      tl.from(subRef.current, { opacity: 0, y: 11, duration: 0.9 }, "-=0.48");

      /* 4. キャッチコピー */
      tl.from(catchRef.current, { opacity: 0, y: 10, duration: 0.9 }, "-=0.42");

      /* 5. ボトル */
      tl.from(
        bottleRef.current,
        {
          opacity: 0,
          y: 22,
          rotate: -5,
          filter: "blur(3px)",
          duration: 1.1,
          ease: "power2.out",
        },
        "-=1.0"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">

      {/* === 最背面：水面ゆらぎ === */}
      <div className="absolute inset-0 z-[0]">
        <KisuiHeroWater />
      </div>

      {/* === モデル背景（位置調整済 / 58%） === */}
      <img
        ref={heroRef}
        src={heroImg}
        alt=""
        className="
          absolute inset-0 w-full h-full
          object-cover object-[58%]
          opacity-[0.97]
          z-[1]
        "
      />

      {/* === ガラス薄膜（全体の静けさ層） === */}
      <div
        className="
          absolute inset-0
          z-[4]
          bg-white/6
          backdrop-blur-[0.35px]
          [mask-image:radial-gradient(1300px_at_50%_42%,white_78%,transparent)]
        "
      />

      {/* === 背面光（自然な光だまり） === */}
      <div
        className="
          absolute z-[6]
          left-[52%] top-[45%]
          w-[320px] h-[420px]
          -translate-x-1/2 -translate-y-1/2
          bg-white/16
          blur-[40px]
          rounded-[50%]
        "
      />

      {/* === Ripple Light（滑らか） === */}
      <div
        ref={rippleRef}
        className="
          absolute z-[10]
          left-[47%] top-[48%]
          w-[520px] h-[520px]
          -translate-x-1/2 -translate-y-1/2
          bg-[rgba(255,255,255,0.48)]
          blur-[32px]
          opacity-0
          rounded-full
          pointer-events-none select-none
        "
      />

      {/* === 水滴ハイライト（z-index 上位へ） === */}
      <div
        className="
          absolute z-[15]
          left-[32.5%] top-[15%]
          w-[420px] h-[420px]
          -translate-x-[2%] -translate-y-[8%]
          bg-gradient-to-br from-white/45 via-white/10 to-transparent
          opacity-[0.18]
          blur-[22px]
          rounded-full
        "
      />

      {/* === ボトル（自然角度 + 位置） === */}
      <img
        ref={bottleRef}
        src={bottleImg}
        alt="Kisui Bottle"
        className="
          absolute z-[14]
          left-[30.8%] top-[16.2%]
          w-[420px]
          rotate-[-5deg]
          opacity-[0.97]
          blur-[0.25px] brightness-[1.03]
          drop-shadow-[0_10px_14px_rgba(0,0,0,0.04)]
          pointer-events-none select-none
        "
      />

      {/* === 全体最前面の薄水膜（極薄） === */}
      <div
        className="
          absolute inset-0
          z-[20]
          bg-white/4
          backdrop-blur-[0.15px]
          [mask-image:radial-gradient(1600px_at_28%_40%,white_72%,transparent)]
        "
      />

      {/* TEXT */}
      <div className="relative z-[30] mb-[8vw] ml-[10vw] max-w-[560px]">

        {/* ロゴ */}
        <h1
          ref={logoRef}
          className="
            text-[66px]
            tracking-[0.22em]
            font-light
            text-[rgba(17,17,17,0.92)]
            leading-tight
            ml-[-0.28vw]
            mt-[6px]
          "
        >
          綺水
        </h1>

        <p
          ref={subRef}
          className="
            mt-[0.78rem]
            ml-[1px]
            text-[12.4px]
            tracking-[0.36em]
            text-[rgba(17,17,17,0.45)]
          "
        >
          K I S U I
        </p>

        <p
          ref={catchRef}
          className="
            mt-14
            text-[20px]
            leading-[1.9]
            tracking-[0.10em]
            text-[rgba(17,17,17,0.78)]
          "
        >
          美しさは、静かに育つ。
        </p>
      </div>
    </section>
  );
}