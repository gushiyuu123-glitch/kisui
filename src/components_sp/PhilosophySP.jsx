// ==============================================
// KISUI Philosophy — SP EDITION（軽量 × 無破綻 × 透明）
// ==============================================

import { useEffect, useRef } from "react";
import gsap from "gsap";
import dropImg from "../assets/kisui-drop.png";
import waterBg from "../assets/kisui-water-wide.png";

export default function PhilosophySP() {
  const dropRef = useRef(null);

  useEffect(() => {
    const el = dropRef.current;
    if (!el) return;

    /* ========= Drop（薄膜 × 軽量フェード） ========= */
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.fromTo(
          el,
          { opacity: 0.03, y: -14, filter: "blur(0.22px)" },
          {
            opacity: 0.10,
            y: 0,
            filter: "blur(0.1px)",
            duration: 1.1,
            ease: "sine.out",
          }
        );

        io.disconnect();
      },
      { threshold: 0.25 }
    );

    io.observe(el);
  }, []);

  return (
    <section
      className="
        relative w-full
        pt-[120px] pb-[120px]
        bg-kisui-tone/65
        backdrop-blur-[0.4px]
        overflow-visible         /* ← SPは必ず visible */
      "
    >
      {/* ===============================
          ① 白膜（全体・軽量）
      =============================== */}
      <div
        className="
          absolute inset-0 z-[1]
          bg-white/5
          backdrop-blur-[0.6px]
          pointer-events-none
        "
      />

      {/* ===============================
          ② 本文（ガラス板はSPでは削除）
      =============================== */}
      <div className="relative z-[5] max-w-[92%] mx-auto px-4 text-center kisui-fade">
        {/* 見出し */}
{/* 見出し */}
<h2 className="text-[12px] tracking-kisui-sm text-black/55 mb-3">
  綺水の願い — Philosophy
</h2>

<div className="w-[42px] h-[1px] bg-black/15 mx-auto mb-8" />

{/* キャッチコピー */}
<p className="text-[20px] leading-[1.72] tracking-kisui-sm text-black/85 font-light mb-8">
  あなたの生活そのものを、<br />
  静かに澄ませていきたい。
</p>

{/* 1段目 */}
<p className="text-[13.6px] leading-[1.85] tracking-kisui-xs text-black/75 font-light mb-5">
  綺水は、飾りません。<br />
  必要なものだけを選び、ひと滴が<br />
  肌の呼吸に寄り添うように働きます。
</p>

{/* 2段目 */}
<p className="text-[13.6px] leading-[1.85] tracking-kisui-xs text-black/75 font-light mb-5">
  美しさは「変える」ではなく、<br />
  あなたの中にすでにある<br />
  “澄んだ状態”を取り戻すこと。
</p>

{/* 3段目 */}
<p className="text-[13.6px] leading-[1.85] tracking-kisui-xs text-black/75 font-light mb-6">
  毎日の輪郭がやわらぎ、鏡を見るたびに気分が整う。<br />
  その積み重ねこそが、綺水の目指す未来です。
</p>
        {/* Drop（薄膜 × 小さめ × 呼吸なし） */}
        <img
          ref={dropRef}
          src={dropImg}
          alt=""
          className="
            mx-auto mt-4
            w-[120px]             /* ← SPに最適化 */
            opacity-[0.08]
            pointer-events-none select-none
            mix-blend-soft-light
          "
        />
      </div>

      {/* ===============================
          ④ 下層：水面（静止＋薄い光のみ）
      =============================== */}
      <div
        className="
          absolute left-0 bottom-0 w-full
          h-[220px]
          overflow-hidden
          z-[0]
          pointer-events-none
        "
      >
        <img
          src={waterBg}
          alt=""
          className="
            w-full h-full object-cover
            brightness-[1.05]
            opacity-[0.32]
            blur-[0.8px]
            translate-y-[3px]
          "
        />

        {/* 下光（逆グラデ・極薄） */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b from-transparent via-white/5 to-white/10
            opacity-[0.18]
            pointer-events-none
          "
        />
      </div>
    </section>
  );
}