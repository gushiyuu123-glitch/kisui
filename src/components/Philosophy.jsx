// ==============================================
// KISUI Philosophy — ULTIMATE CLEAN + DEPTH
// ==============================================

import { useEffect, useRef } from "react";
import gsap from "gsap";
import dropImg from "../assets/kisui-drop.png";
import { initWaterSurfaceMotion } from "../utils/kisuiWaterSurface";
import waterBg from "../assets/kisui-water-wide.png";

export default function Philosophy() {
  const dropRef = useRef(null);

  useEffect(() => {
    const el = dropRef.current;
    if (!el) return;

    /* ========= Drop Fade-in（軽量・薄膜） ========= */
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.fromTo(
          el,
          { opacity: 0.04, y: -16, filter: "blur(0.26px)" },
          {
            opacity: 0.12,
            y: 0,
            filter: "blur(0.18px)",
            duration: 1.25,
            ease: "sine.out",
          }
        );
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    /* ========= Water Motion（負荷軽減） ========= */
initWaterSurfaceMotion("#philo-water", {
  speed: 7.4,
  intensity: 4,     // ← ここが重要（±2.6px前後に収まる）
  blur: 0.22,
});

    return () => io.disconnect();
  }, []);

  return (
    <section
      className="
        relative w-full
        pt-[200px] pb-[160px]
        bg-kisui-tone/70
        backdrop-blur-[0.6px]
        overflow-hidden
      "
    >
      {/* ===============================
          ① 白膜（全体）
      =============================== */}
      <div
        className="
          absolute inset-0 z-[1]
          bg-white/10
          backdrop-blur-[1.4px]
          ring-1 ring-white/10
          pointer-events-none
        "
      />

      {/* ===============================
          ② 本文背面のガラス板（黄金比）
      =============================== */}
      <div
        className="
          absolute z-[2]
          inset-x-0 top-[140px]
          max-w-kisui-body mx-auto
          h-[78%]                       /* ← 改善ポイント */
          bg-white/8
          backdrop-blur-[1px]
          rounded-kisui-lg
          shadow-[0_8px_32px_rgba(255,255,255,0.18)]
          pointer-events-none
        "
      />

      {/* ===============================
          ③ 本文
      =============================== */}
      <div className="relative z-[5] max-w-kisui-body mx-auto px-6 text-center fade-up">
        <h2 className="text-[13px] tracking-kisui-sm text-text-muted mb-4">
          綺水の願い — Philosophy
        </h2>

        <div className="w-[60px] h-[1px] bg-white/40 mx-auto mb-12" />

        {/* 見出し */}
        <p className="text-[26px] leading-[1.9] tracking-kisui-sm text-text-primary/90 font-light mb-14">
          あなたの生活そのものを、<br />静かに澄ませていきたい。
        </p>

        {/* 1段目（呼吸深め） */}
        <p className="text-[16px] leading-[2.05] tracking-kisui-xs text-text-secondary/90 font-light opacity-[0.9] max-w-[640px] mx-auto mb-8">
          綺水は、飾りません。必要なものだけを選び、ひと滴が<br />
          肌の呼吸に寄り添うように、静かに働きます。
        </p>

        {/* 2段目（通常） */}
        <p className="text-[16px] leading-[2.05] tracking-kisui-xs text-text-secondary/90 font-light opacity-[0.88] max-w-[640px] mx-auto mb-6">
          美しさは「変える」ではなく、あなたの中にすでにある<br />
          “澄んだ状態”を取り戻すこと。
        </p>

        {/* 3段目（余韻深め） */}
        <p className="text-[16px] leading-[2.05] tracking-kisui-xs text-text-secondary/85 font-light opacity-[0.85] max-w-[640px] mx-auto mb-10">
          日々の輪郭がやわらぎ、ふと鏡を見るたびに静かに気分が整う。<br />
          その小さな積み重ねこそが、綺水の目指す未来です。
        </p>

        {/* ========= Drop（Ripple × 薄光 × サイズ調整） ========= */}
        <img
          ref={dropRef}
          src={dropImg}
          alt=""
          className="
            mx-auto mt-4
            w-[150px]                /* ← 150px に最適化 */
            opacity-[0.08]           /* ← 主張を抑え高級感UP */
            pointer-events-none select-none
            mix-blend-soft-light
            [filter:url(#kisui-ripple)]
          "
        />
      </div>

      {/* ===============================
          ④ 最下層：水面 × 光膜 深度強化
      =============================== */}
      <div
        id="philo-water"
        className="
          kisui-water-bg
          absolute left-0 bottom-0 w-full
          h-[360px]
          overflow-hidden
          z-[0]
          pointer-events-none
        "
      >
        {/* 水面（主） */}
        <img
          src={waterBg}
          alt=""
          className="
            w-full h-full object-cover
            brightness-[1.08] contrast-[1.08]
            opacity-[0.40]
            blur-[1.1px]
            scale-[1.03]
            translate-y-[4px]
          "
        />

        {/* 追加：下層の逆グラデ（光の底） */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-transparent via-white/10 to-white/20
            opacity-[0.18]
            pointer-events-none
          "
        />

        {/* 白膜（薄光膜：軽量化） */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-white/18 via-white/8 to-transparent
            blur-[7px]
            opacity-[0.26]
            pointer-events-none
          "
        />
      </div>
    </section>
  );
}