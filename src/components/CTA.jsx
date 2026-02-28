// src/components/CTA.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const wrapRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const noteRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const anim = (ref, delay = 0) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wrapRef.current,
              start: "top 85%",
            },
          }
        );
      };

      anim(titleRef, 0);
      anim(subRef, 0.12);
      anim(noteRef, 0.18);
      anim(btnRef, 0.32);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      className="
        relative w-full
        pt-[240px] pb-[260px]
        overflow-hidden
        bg-kisui-tone/40
        backdrop-blur-[1px]
      "
    >
      {/* ==== 薄い白膜（KISUIの透明感） ==== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/85 via-white/55 to-white/20
          pointer-events-none
        "
      />

      {/* ==== 中央の光膜（映画エンド） ==== */}
      <div
        className="
          absolute top-[36%] left-1/2 -translate-x-1/2
          w-[540px] h-[540px]
          bg-white/20
          blur-[120px]
          opacity-[0.40]
          rounded-full
          pointer-events-none
        "
      />

      {/* ==== 内容 ==== */}
      <div className="relative z-10 text-center px-6 max-w-kisui-body mx-auto">

        {/* ブランドロゴ（大） */}
        <h2
          ref={titleRef}
          className="
            text-[40px] md:text-[46px]
            tracking-[0.18em]
            font-light
            text-text-primary/80
            mb-3
          "
        >
          綺水
        </h2>

        {/* サブロゴ（英字） */}
        <p
          ref={subRef}
          className="
            text-[13px]
            tracking-[0.32em]
            text-text-muted/70
            mb-12
          "
        >
          — K I S U I —
        </p>

        {/* 補足文（“売れるCTA”用の一文） */}
        <p
          ref={noteRef}
          className="
            text-[13px]
            tracking-wider
            text-text-muted/70
            mb-14
          "
        >
          毎日の透明感ケアを、今日から。
        </p>

        {/* 締めのライン */}
        <div className="w-[120px] h-[1px] bg-white/30 mx-auto mb-16" />

        {/* CTAボタン */}
    {/* CTAボタン（ミニマル・静けさ） */}
<button
  ref={btnRef}
  className="
    w-full max-w-[280px]
    mx-auto py-3.5
    rounded-kisui-xl
    text-[14px] font-light tracking-kisui-sm

    bg-white/25
    backdrop-blur-[0.8px]
    ring-1 ring-white/25
    shadow-none

    hover:bg-white/35
    hover:backdrop-blur-[1px]
    hover:ring-white/30
    transition-all duration-400
  "
>
  今すぐ購入する
</button>
      </div>
    </section>
  );
}