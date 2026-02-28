import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/kisui.css";

import heroImg from "../assets/kisui-hero-model2.png";
import bottleImg from "../assets/kisui-bottle.png";

export default function KisuiHeroSP() {
  const heroRef = useRef(null);
  const bottleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // 背景フェード
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, scale: 1.03, filter: "blur(2.4px)" },
        {
          opacity: 0.75,
          scale: 1,
          filter: "blur(1px)",
          duration: 1.6,
          ease: "power2.out",
        }
      );
    }

    // ボトルのフェード
    if (bottleRef.current) {
      gsap.fromTo(
        bottleRef.current,
        { opacity: 0, y: 26, filter: "blur(1.4px)" },
        {
          opacity: 0.9,
          y: 0,
          filter: "blur(0.32px)",
          duration: 1.8,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      gsap.to(bottleRef.current, {
        scale: 1.012,
        duration: 4.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // テキストフェード
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <section
      id="kisui-hero"
      className="
        relative
        w-full
        min-h-[110vh]
        flex flex-col
        items-center
        justify-start
        pt-[70px]
        pb-[70px]
        overflow-hidden
      "
    >
      {/* 背景 */}
      <div className="absolute inset-0 z-[1]">
        <img
          ref={heroRef}
          src={heroImg}
          alt=""
          className="
            w-full h-full
            object-cover
            object-center
            opacity-[0.75]
            blur-[1px]
            scale-[1.02]
          "
        />

        {/* 白膜 */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.4px]" />

        {/* 光膜 */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-white/18 via-white/10 to-transparent
            opacity-[0.32]
          "
        />
      </div>

      {/* 光球 */}
      <div
        className="
          absolute z-[2]
          left-1/2 top-[36%]
          -translate-x-1/2 -translate-y-1/2
          w-[260px] h-[260px]
          bg-white/24
          blur-[45px]
          rounded-full
        "
      />

      {/* ボトル（中央固定） */}
      <img
        ref={bottleRef}
        src={bottleImg}
        alt=""
        className="
          relative z-[3]
          w-[54vw] max-w-[260px]
          -mt-[20px]
          opacity-[0.9]
          rotate-[-2deg]
          select-none pointer-events-none
        "
      />

      {/* テキスト（安全な縦積み） */}
      <div
        ref={textRef}
        className="relative z-[4] mt-[46px] text-center px-6"
      >
        <h1
          className="
            text-[44px]
            tracking-[0.22em]
            font-light
            text-[rgba(17,17,17,0.92)]
          "
        >
          綺水
        </h1>

        <p
          className="
            mt-1
            text-[11px]
            tracking-[0.36em]
            text-[rgba(17,17,17,0.42)]
          "
        >
          K I S U I
        </p>

        <p
          className="
            mt-5
            text-[16.8px]
            leading-[1.92]
            tracking-[0.085em]
            text-[rgba(17,17,17,0.82)]
          "
        >
          美しさは、静かに育つ。
        </p>
      </div>
    </section>
  );
}