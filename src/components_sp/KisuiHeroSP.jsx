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
    // ===============================
    // 背景フェード（超滑らか）
    // ===============================
    const bg = heroRef.current;
    if (bg) {
      gsap.fromTo(
        bg,
        {
          opacity: 0,
          y: 20,
          scale: 1.03,
          filter: "blur(2.6px)",
        },
        {
          opacity: 0.72,
          y: 0,
          scale: 1,
          filter: "blur(1.1px)",
          duration: 1.6,
          ease: "power2.out",
        }
      );
    }

    // ===============================
    // ボトル呼吸 + オブジェクト化
    // ===============================
    gsap.fromTo(
      bottleRef.current,
      {
        opacity: 0,
        y: 22,
        filter: "blur(1.4px)",
      },
      {
        opacity: 0.88,
        y: 0,
        filter: "blur(0.32px)", // ← 完全にくっきりさせずオブジェクト感を残す
        duration: 1.8,
        ease: "power3.out",
      }
    );

    gsap.to(bottleRef.current, {
      scale: 1.012,
      duration: 4.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // ===============================
    // テキストのフェード
    // ===============================
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section
      id="kisui-hero"
      className="
        relative
        w-full
        h-[92vh]
        overflow-hidden
        flex items-center justify-center
        kisui-no-ripple
      "
    >
      {/* ===============================
          背景モデル（位置補正済み）
      =============================== */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <img
          ref={heroRef}
          src={heroImg}
          alt=""
          className="
            w-full h-full
            object-cover object-center
            opacity-[0.72]
            blur-[1.1px]
            scale-[1.02]
            mix-blend-overlay
          "
        />

        {/* 水膜1 */}
        <div
          className="
            absolute inset-0
            bg-white/7
            backdrop-blur-[0.48px]
          "
        />

        {/* 光膜 */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-white/20 via-white/10 to-transparent
            opacity-[0.36]
            mix-blend-screen
          "
        />
      </div>

      {/* ===============================
          背面光（位置・強度修正済み）
      =============================== */}
      <div
        className="
          absolute z-[3]
          left-1/2 top-[52%]
          w-[260px] h-[320px]
          -translate-x-1/2 -translate-y-1/2
          bg-white/22
          blur-[45px]
          rounded-[50%]
        "
      />

      {/* ===============================
          ボトル（位置大幅補正）
      =============================== */}
      <img
        ref={bottleRef}
        src={bottleImg}
        alt="Kisui Bottle"
        className="
          absolute z-[10]
          left-1/2 top-[38%]
          w-[54vw] max-w-[260px]
          -translate-x-1/2
          rotate-[-2.5deg]
          opacity-[0.88]
          brightness-[1.05]
          select-none pointer-events-none
        "
      />

      {/* ===============================
          最前面の薄水膜
      =============================== */}
      <div
        className="
          absolute inset-0 z-[12]
          bg-white/6 backdrop-blur-[0.2px]
        "
      />

      {/* ===============================
          TEXT（余白 & 位置補正）
      =============================== */}
      <div
        ref={textRef}
        className="
          absolute bottom-[14vh]
          z-[20]
          w-full text-center px-6
        "
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
            mt-2
            text-[11px]
            tracking-[0.36em]
            text-[rgba(17,17,17,0.42)]
          "
        >
          K I S U I
        </p>

        <p
          className="
            mt-6
            text-[16.8px]
            leading-[1.92]
            tracking-[0.085em]
            text-[rgba(17,17,17,0.82)]
            px-4
          "
        >
          美しさは、静かに育つ。
        </p>
      </div>
    </section>
  );
}