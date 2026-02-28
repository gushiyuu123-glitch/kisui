// ==============================================
// KISUI CONTACT — SP Ultimate+
// 背景光 / 縦ライン強化 ＋ 浮遊ラベルフォーム
// ==============================================

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bgWater from "../assets/kisui-bg-water.png";

gsap.registerPlugin(ScrollTrigger);

export default function KisuiContactSP() {
  const wrapRef = useRef(null);
  const panelRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 水膜ゆらぎ（SPは弱め・長め）
      gsap.to(wrapRef.current, {
        backgroundPositionY: "26px",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Dior縦ライン（少しだけ呼吸）
      gsap.to(lineRef.current, {
        scaleY: 1.03,
        duration: 9.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // パネルフェード（blurは極薄）
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 20, filter: "blur(0.3px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 84%",
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
        py-[150px] px-5
        bg-cover bg-center
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${bgWater})`,
        backgroundColor: "rgba(180,200,220,0.18)",
        backgroundBlendMode: "lighten",
      }}
    >
      {/* 上フェード */}
      <div
        className="
          absolute top-0 left-0 w-full h-[120px]
          bg-gradient-to-t
          from-transparent via-white/24 to-white/70
          pointer-events-none z-[1]
        "
      />

      {/* 下フェード */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-[140px]
          bg-gradient-to-b
          from-transparent via-white/24 to-white/72
          pointer-events-none z-[1]
        "
      />

      {/* ベース白膜 */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/62 via-white/34 to-transparent
          pointer-events-none
        "
      />

      {/* 中央光膜（KISUIっぽい白×水色の塊） */}
      <div
        className="
          absolute
          top-[40%] left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[340px] h-[340px]
          rounded-full
          bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.85),rgba(228,241,248,0.75),rgba(228,241,248,0))]
          opacity-[0.85]
          blur-[86px]
          pointer-events-none
          z-[0]
        "
      />

      {/* Dior縦ライン（白→水色グラデ） */}
      <div
        ref={lineRef}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[1px] h-full
          bg-gradient-to-b
          from-white/85 via-white/40 to-kisui-light/70
          blur-[0.25px] opacity-[0.70]
          pointer-events-none
          z-[2]
        "
      />

      {/* 縦ライン用のほんのり光膜 */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[56px] h-full
          bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.32),rgba(255,255,255,0))]
          opacity-[0.40]
          pointer-events-none
          z-[1]
        "
      />

      {/* Contact Panel（SP専用） */}
      <div
        ref={panelRef}
        className="
          relative z-10
          w-[94vw] max-w-[420px]
          mx-auto
          px-6 py-10
          rounded-[26px]
          backdrop-blur-[6px]
          bg-white/18
          border border-white/28
          shadow-[0_0_50px_-14px_rgba(255,255,255,0.50)]
        "
      >
        <h2
          className="
            text-center mb-7
            text-[14px] tracking-[0.18em]
            text-text-primary/72
          "
        >
          お問い合わせ — CONTACT —
        </h2>

        <form className="flex flex-col gap-8">
          <InputBlockSP id="name" label="お名前" hint="（例）山田 花子" />
          <InputBlockSP
            id="email"
            label="メールアドレス"
            hint="ご返信用のメールアドレスをご入力ください。"
          />

          <TextareaBlockSP
            id="message"
            label="ご相談内容"
            hint="ご質問・ご相談をご記入ください。"
          />

          {/* 送信ボタン（SP最終形） */}
          <div className="mt-2 flex justify-center">
            <button
              type="submit"
              className="
                w-full max-w-[240px]
                py-3.5
                text-[13px] tracking-[0.16em]
                rounded-full
                bg-white/24
                border border-white/40
                backdrop-blur-[3px]
                text-text-primary/92
                shadow-[0_6px_20px_rgba(220,230,240,0.26)]
                hover:bg-white/32
                hover:shadow-[0_8px_26px_rgba(220,230,240,0.30)]
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

/* ================================
   Input Block — 浮遊ラベル版
================================ */
function InputBlockSP({ id, label, hint }) {
  return (
    <div className="relative">
      <input
        id={id}
        type="text"
        placeholder=" "
        className="
          peer
          w-full
          bg-white/8
          border border-white/20
          rounded-[14px]
          px-4 pt-5 pb-2.5
          text-[12.8px] tracking-[0.04em]
          text-text-primary/85
          backdrop-blur-[4px]
          outline-none
          focus:border-white/40
          transition-all
        "
      />

      {/* 浮遊ラベル */}
      <label
        htmlFor={id}
        className="
          pointer-events-none
          absolute left-4
          text-[11.5px] tracking-[0.14em]
          text-text-primary/60
          transition-all duration-300
          /* デフォ：入力済 or フォーカス時（上） */
          top-[6px]
          peer-focus:top-[6px]
          peer-focus:text-[11px]
          peer-focus:text-text-primary/85
          peer-focus:tracking-[0.16em]
          /* 未入力（placeholder表示中）のとき：少し下に */
          peer-placeholder-shown:top-[13px]
          peer-placeholder-shown:text-[12px]
          peer-placeholder-shown:text-text-primary/55
        "
      >
        {label}
      </label>

      {/* 下にうっすら補足テキスト */}
      {hint && (
        <p className="mt-1 text-[11px] tracking-[0.04em] text-text-muted/80">
          {hint}
        </p>
      )}
    </div>
  );
}

/* ================================
   Textarea Block — 浮遊ラベル版
================================ */
function TextareaBlockSP({ id, label, hint }) {
  return (
    <div className="relative">
      <textarea
        id={id}
        placeholder=" "
        className="
          peer
          w-full
          h-[130px]
          bg-white/8
          border border-white/20
          rounded-[16px]
          px-4 pt-6 pb-3
          text-[12.8px] tracking-[0.04em]
          text-text-primary/85
          backdrop-blur-[4px]
          outline-none
          focus:border-white/40
          transition-all
          resize-none
        "
      />

      <label
        htmlFor={id}
        className="
          pointer-events-none
          absolute left-4
          text-[11.5px] tracking-[0.14em]
          text-text-primary/60
          transition-all duration-300
          top-[8px]
          peer-focus:top-[8px]
          peer-focus:text-[11px]
          peer-focus:text-text-primary/85
          peer-focus:tracking-[0.16em]
          peer-placeholder-shown:top-[18px]
          peer-placeholder-shown:text-[12px]
          peer-placeholder-shown:text-text-primary/55
        "
      >
        {label}
      </label>

      {hint && (
        <p className="mt-1 text-[11px] tracking-[0.04em] text-text-muted/80">
          {hint}
        </p>
      )}
    </div>
  );
}