// src/components/CTA_SP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA_SP() {
  const wrapRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const noteRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fade = (ref, delay = 0) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wrapRef.current,
              start: "top 85%",
            },
          }
        );
      };

      fade(titleRef, 0);
      fade(subRef, 0.10);
      fade(noteRef, 0.22);
      fade(btnRef, 0.35);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      className="
        relative w-full
        pt-[180px] pb-[180px]
        overflow-hidden
        bg-kisui-tone/40
        backdrop-blur-[0.8px]
      "
    >
      {/* ====== 白膜レイヤー（弱め） ====== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/70 via-white/40 to-white/15
          pointer-events-none
        "
      />

      {/* ====== 中央光膜（SPは控えめ） ====== */}
      <div
        className="
          absolute top-[38%] left-1/2 -translate-x-1/2
          w-[320px] h-[320px]
          bg-white/18
          blur-[80px]
          opacity-[0.38]
          rounded-full
          pointer-events-none
        "
      />

      {/* ====== 内容本体 ====== */}
      <div className="relative z-10 text-center px-6 max-w-[440px] mx-auto">

        {/* ブランドロゴ */}
        <h2
          ref={titleRef}
          className="
            text-[26px]
            tracking-[0.16em]
            font-light
            text-text-primary/75
            mb-2
          "
        >
          綺水
        </h2>

        {/* 英字ロゴ */}
        <p
          ref={subRef}
          className="
            text-[11px]
            tracking-[0.28em]
            text-text-muted/70
            mb-10
          "
        >
          — K I S U I —
        </p>

        {/* 補足文 */}
        <p
          ref={noteRef}
          className="
            text-[12.5px]
            leading-[1.85]
            text-text-muted/75
            mb-12
          "
        >
          透明感のある肌へ、今日から一歩。
        </p>

        {/* ライン */}
        <div className="w-[95px] h-[1px] bg-white/25 mx-auto mb-14" />

        {/* CTAボタン（親指中心 × 80% 幅） */}
        <button
          ref={btnRef}
          className="
            w-[80%] mx-auto py-3.5
            rounded-kisui-xl
            text-[13px] font-light tracking-kisui-sm

            bg-white/25
            backdrop-blur-[1px]
            ring-1 ring-white/25
            transition-all duration-400

            hover:bg-white/32
            hover:ring-white/30
            hover:backdrop-blur-[1.3px]
          "
        >
          今すぐ購入する
        </button>
      </div>
    </section>
  );
}