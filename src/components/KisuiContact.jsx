// ==============================================
// KISUI CONTACT — Diorパネル × 水膜ぼかし × 静的高級UI
// ==============================================

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bgWater from "../assets/kisui-bg-water.png";

gsap.registerPlugin(ScrollTrigger);

export default function KisuiContact() {
  const wrapRef = useRef(null);
  const panelRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1) 背景パララックス（静かな水面ゆらぎ）
      gsap.to(wrapRef.current, {
        backgroundPositionY: "32px",
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2) Dior縦ライン（微呼吸）
      gsap.to(lineRef.current, {
        scaleY: 1.04,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3) パネルのフェード（blurを極小に）
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 22, filter: "blur(0.3px)" }, // ← 4px → 0.3px に調整
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      className="
        relative w-full
        py-[200px] px-6
        bg-cover bg-center
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${bgWater})`,
        backgroundColor: "rgba(180,200,220,0.22)",
        backgroundBlendMode: "lighten",
      }}
    >
      {/* === 上フェード（前セクションとの境目ゼロ） === */}
      <div
        className="
          absolute top-0 left-0 w-full h-[160px]
          bg-gradient-to-t
          from-transparent
          via-white/30
          to-white/70
          pointer-events-none
          z-[1]
        "
      />

      {/* === 下フェード（次セクションとの境目ゼロ） === */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-[200px]
          bg-gradient-to-b
          from-transparent
          via-white/30
          to-white/70
          pointer-events-none
          z-[1]
        "
      />

      {/* 白膜グラデ（本体） */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/75 via-white/38 to-transparent
          pointer-events-none
        "
      />

      {/* Diorライン */}
      <div
        ref={lineRef}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[1px] h-full bg-white/35
          blur-[0.6px] opacity-[0.55]
        "
      />

      {/* Contact Panel */}
      <div
        ref={panelRef}
        className="
          relative z-10
          max-w-[720px] mx-auto
          px-9 py-14
          rounded-[30px]
          backdrop-blur-[12px]
          bg-white/16
          border border-white/22
          shadow-[0_0_60px_-18px_rgba(255,255,255,0.4)]
        "
      >
        <h2
          className="
            text-center mb-8
            text-[16px] tracking-[0.20em]
            text-text-primary/70
          "
        >
          お問い合わせ — CONTACT —
        </h2>

        <form className="flex flex-col gap-9">
          <InputBlock label="お名前" placeholder="（例）山田 花子" />
          <InputBlock label="メールアドレス" placeholder="example@mail.com" />

          {/* 内容 */}
          <div>
            <p className="text-[12px] tracking-[0.14em] text-text-primary/55 mb-2">
              ご相談内容
            </p>
            <textarea
              className="
                w-full h-[150px]
                bg-white/8
                border border-white/18
                rounded-[18px]
                px-4 py-3
                text-[13.5px] tracking-[0.04em]
                text-text-primary/80
                backdrop-blur-[5px]
                outline-none
                focus:border-white/38
                transition-all
              "
              placeholder="ご質問・ご相談をご記入ください…"
            />
          </div>

          {/* 送信（静かなガラスボタン） */}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="
                w-full md:w-[260px]
                py-3
                text-[13px] tracking-[0.18em]
                rounded-full
                bg-white/20
                border border-white/45
                backdrop-blur-[4px]
                text-text-primary/90
                shadow-[0_8px_26px_rgba(220,230,240,0.28)]
                hover:bg-white/34
                hover:shadow-[0_10px_32px_rgba(220,230,240,0.32)]
                transition-all duration-400
              "
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* Input Block */
function InputBlock({ label, placeholder }) {
  return (
    <div>
      <p className="text-[12px] tracking-[0.14em] text-text-primary/55 mb-2">
        {label}
      </p>
      <input
        className="
          w-full
          bg-white/8
          border border-white/18
          rounded-[14px]
          px-4 py-3
          text-[13.5px] tracking-[0.04em]
          text-text-primary/80
          backdrop-blur-[5px]
          outline-none
          focus:border-white/38
          transition-all
        "
        placeholder={placeholder}
      />
    </div>
  );
}