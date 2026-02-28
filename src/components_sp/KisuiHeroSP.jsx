import { useEffect, useRef } from "react";
import gsap from "gsap";         // ← 必須！
import "../styles/kisui.css";

import heroImg from "../assets/kisui-hero-model2.png";
import bottleImg from "../assets/kisui-bottle.png";

export default function KisuiHeroSP() {
  const heroRef = useRef(null);
  const bottleRef = useRef(null);

  /* ======================================
      SP：フェード＋微呼吸だけ（超軽量）
  ====================================== */
  useEffect(() => {
    /* 背景フェード */
    const el = heroRef.current;
    if (el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(18px) scale(1.02)";
      el.style.filter = "blur(2px)";

      requestAnimationFrame(() => {
        el.style.transition =
          "opacity 1.25s ease-out, transform 1.25s ease-out, filter 1.25s ease-out";
        el.style.opacity = 1;
        el.style.transform = "translateY(0) scale(1)";
        el.style.filter = "blur(0)";
      });
    }

    /* ボトルに“呼吸” */
    const bottle = bottleRef.current;
    if (bottle) {
      gsap.to(bottle, {
        scale: 1.008,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section
      className="
        relative
        isolation-isolate
        w-full
        h-[92vh]
        overflow-hidden
        flex items-end
        pb-[18vw]
        kisui-no-ripple
      "
    >
      {/* ================================================
          背景モデル（“空気化” v2）
      ================================================ */}
      <div className="absolute inset-0 z-[1] overflow-hidden">

        {/* モデル（にじみ本体） */}
        <img
          ref={heroRef}
          src={heroImg}
          alt=""
          className="
            w-full h-full
            object-cover object-[50%]
            opacity-[0.58]           /* ★ v1より少し空気へ */
            blur-[1.35px]            /* ★ にじみ強化 */
            scale-[1.018]
            mix-blend-overlay
          "
        />

        {/* 1層目：薄水膜（滑らかさUP） */}
        <div
          className="
            absolute inset-0
            bg-white/7               /* ★ 6 → 7 */
            backdrop-blur-[0.48px]   /* ★ 0.4 → 0.48 */
          "
        />

        {/* 2層目：光膜（境界を溶かす） */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-white/22 via-white/10 to-transparent
            mix-blend-screen
            opacity-[0.36]           /* ★ 0.32 → 0.36 */
          "
        />
      </div>

      {/* ================================================
          薄膜レイヤー（世界観を統一）
      ================================================ */}
      <div
        className="
          absolute inset-0
          z-[4]
          bg-white/7                 /* ★ 8 → 7：一枚感を優先 */
          backdrop-blur-[0.55px]
        "
      />

      {/* ================================================
          背面光（柔らかく + 小型）
      ================================================ */}
      <div
        className="
          absolute z-[5]
          left-1/2 top-[47%]
          w-[210px] h-[270px]       /* ★ 200→210 / 260→270 */
          -translate-x-1/2 -translate-y-1/2
          bg-white/20
          blur-[38px]               /* ★ 34 → 38 */
          rounded-[50%]
        "
      />

      {/* ================================================
          ボトル — 黄金比を維持しつつ “存在感UP”
      ================================================ */}
      <img
        ref={bottleRef}
        src={bottleImg}
        alt="Kisui Bottle"
        className="
          absolute z-[10]
          left-1/2 top-[27.5%]
          w-[52vw] max-w-[240px]
          -translate-x-1/2
          rotate-[-4deg]
          opacity-[0.99]
          blur-[0.1px]
          brightness-[1.06]          /* ★ 1.04 → 1.06（透明感UP） */
          drop-shadow-[0_8px_18px_rgba(0,0,0,0.08)] /* ★ 影を細く + 深め */
          pointer-events-none select-none
        "
      />

      {/* ================================================
          最前面の薄水膜（整合層）
      ================================================ */}
      <div
        className="
          absolute inset-0
          z-[12]
          bg-white/6                 /* ★ 5 → 6 */
          backdrop-blur-[0.22px]
        "
      />

      {/* ================================================
          TEXT（バランスのみ上質化）
      ================================================ */}
      <div className="relative z-[20] w-full text-center px-6">

        {/* ロゴ */}
        <h1
          className="
            text-[46px]
            tracking-[0.22em]
            font-light
            text-[rgba(17,17,17,0.92)]
            leading-tight
          "
        >
          綺水
        </h1>

        {/* サブタイトル */}
        <p
          className="
            mt-3                 /* ★ 2 → 3：余白で静けさを演出 */
            text-[11px]          /* ★ 10.8 → 11 */
            tracking-[0.36em]
            text-[rgba(17,17,17,0.46)]
          "
        >
          K I S U I
        </p>

        {/* キャッチコピー */}
        <p
          className="
            mt-8
            text-[16.8px]        /* ★ 16.5 → 16.8 */
            leading-[1.92]       /* ★ 呼吸感UP */
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