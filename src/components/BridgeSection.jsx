// src/components/BridgeUltimate.jsx（世界観完全チューニング版）
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bottleImg from "../assets/kisui-bottle2.png";

gsap.registerPlugin(ScrollTrigger);

export default function BridgeUltimate() {
  const wrapRef = useRef(null);
  const lineRef = useRef(null);
  const bottleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 水膜ゆらぎ
      gsap.to(wrapRef.current, {
        backgroundPosition: "0px 34px",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 光ライン
      gsap.to(lineRef.current, {
        scaleY: 1.12,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // タイトル → 左スライド
      gsap.fromTo(
        ".bridge-title",
        { opacity: 0, x: -32 },
        {
          opacity: 1,
          x: 0,
          duration: 1.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 82%",
          },
        }
      );

      // サブコピー → 遅れ
      gsap.fromTo(
        ".bridge-sub",
        { opacity: 0, x: -28 },
        {
          opacity: 1,
          x: 0,
          duration: 1.45,
          delay: 0.35,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 82%",
          },
        }
      );

      // ボトル → 上から静かに落ちる
      gsap.fromTo(
        bottleRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 82%",
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
        pt-[260px] pb-[260px]     /* ← 全体をさらに呼吸させた */
        overflow-hidden
        bg-[url('/kisui-water-texture.png')]
        bg-cover bg-center
        backdrop-blur-[1px]
      "
    >
   {/* 白膜＋淡水色（最適チューニング） */}
<div
  className="
    absolute inset-0
    bg-gradient-to-b
    from-white/82 
    via-white/48 
   to-[#E9F6FA]/14    /* ← ほんの少し青白を足す（10%） */
  "
/>

      {/* 光ライン */}
      <div
        ref={lineRef}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[1px] h-full
          bg-white/38 blur-[0.7px] opacity-[0.62]
        "
      />

      {/* ===== コンテンツ ===== */}
      <div
        className="
          relative z-10
          mx-auto px-6
          max-w-[1320px]
          flex flex-col md:flex-row
          items-start md:items-center
          gap-20 md:gap-[180px]   /* ← 距離を大胆に広げた */
        "
      >
{/* 左テキスト（大きめに左へ） */}
<div className="w-full md:w-[52%] md:pl-[40px]">
  <h2
    className="
      bridge-title
      text-[38px] md:text-[48px]
      tracking-[0.22em]
      font-light
      text-text-primary/65     /* ← 透明感の最適濃度 */
      leading-[1.58]
      whitespace-pre-line
    "
  >
    透明が、{"\n"}生活を変えていく。
  </h2>

  <p
    className="
      bridge-sub
      mt-[150px]
      text-[16px]
      leading-[2.1]
      text-text-primary/45     /* ← 副役としての絶妙な淡さ */
      tracking-kisui-xs
      max-w-[480px]
      md:ml-[100px]
    "
  >
    日々の肌が整うと、心も静かに整っていく。
    KISUIは、そのための一本です。
  </p>
</div>
        {/* 右ボトル（薄膜 × 抽象化） */}
        <div className="w-full md:w-[34%] flex justify-center md:justify-end">
          <img
            ref={bottleRef}
            src={bottleImg}
            alt="KISUI bottle"
            className="
              w-[240px] md:w-[330px]
              h-auto
              mb-4
              opacity-[0.2]            /* ← 抽象化の最適値 */
              blur-[0.7px]
             mix-blend-soft-light
              drop-shadow-[0_12px_30px_rgba(0,0,0,0.06)]

              transition-all duration-[900ms]
            "
          />
        </div>
      </div>
    </section>
  );
}