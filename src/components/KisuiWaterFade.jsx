// src/components/KisuiWaterFade.jsx
// "姫水（KISUI）"専用の水膜フェードインコンポーネント
// ・淡い水膜 → 光のゆらぎ → わずかな水滴の震え
// ・背景の上に重ねるだけで“水の世界観”を追加できる
// ・どのセクションでも import して <KisuiWaterFade /> を置くだけ

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function KisuiWaterFade() {
  const layerRef = useRef(null);
  const glowRef = useRef(null);
  const dropRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =============================
         1. ベース水膜（ゆっくりフェード）
      ============================= */
      gsap.fromTo(
        layerRef.current,
        { opacity: 0, filter: "blur(6px)", y: 12 },
        {
          opacity: 0.38,
          filter: "blur(1.4px)",
          y: 0,
          duration: 2.4,
          ease: "sine.out",
        }
      );

      /* =============================
         2. ほんのり光ゆらぎ（呼吸）
      ============================= */
      gsap.to(glowRef.current, {
        opacity: 0.35,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =============================
         3. 水滴の微震え（存在だけ感じる）
      ============================= */
      gsap.to(dropRef.current, {
        y: 1.6,
        x: -1.2,
        opacity: 0.08,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-[5]">
      {/* =============================
          1. 水膜レイヤー（全体）
      ============================= */}
      <div
        ref={layerRef}
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/65 via-kisui-light/25 to-white/10
          backdrop-blur-[1px]
        "
      />

      {/* =============================
          2. 光のゆらぎ（中央）
      ============================= */}
      <div
        ref={glowRef}
        className="
          absolute left-1/2 top-[40%]
          w-[480px] h-[480px]
          -translate-x-1/2 -translate-y-1/2
          bg-white/30
          rounded-full
          blur-[90px]
          opacity-20
        "
      />

      {/* =============================
          3. 水滴ハイライト（きすいの印象強化）
      ============================= */}
      <div
        ref={dropRef}
        className="
          absolute left-[52%] top-[46%]
          w-[28px] h-[38px]
          rounded-full
          bg-white/65
          blur-[2px]
          opacity-0
        "
      />
    </div>
  );
}
