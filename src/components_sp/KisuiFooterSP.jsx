// =======================================================
// 🌊 KISUI FOOTER SP — PERFECTLY MATCHED TO PC VERSION
// =======================================================

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import waveImg from "../assets/kisui-footer-wave1.png";

gsap.registerPlugin(ScrollTrigger);

export default function KisuiFooterSP() {
  const wrapRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // フェードイン
      gsap.fromTo(
        wrapRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 86%",
          },
        }
      );

      // Diorライン呼吸（SPは弱く自然に）
      gsap.to(lineRef.current, {
        scaleY: 1.04,
        duration: 8.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={wrapRef}
      className="
        relative w-full
        pt-[200px] pb-[90px]
        overflow-hidden
        bg-kisui-tone/55
        backdrop-blur-[1px]
      "
    >
      {/* === 上方向フェード（セクション境界をゼロに） === */}
      <div
        className="
          absolute top-0 left-0 w-full h-[150px]
          bg-gradient-to-t
          from-transparent via-white/32 to-white/75
          pointer-events-none
          z-[3]
        "
      />

      {/* === Dior縦ライン === */}
      <div
        ref={lineRef}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[1px] h-full
          bg-white/40 blur-[0.5px] opacity-[0.55]
          pointer-events-none
          z-[4]
        "
      />

      {/* === 波レイヤー（PC と同じ位置／順番） === */}
      <img
        src={waveImg}
        alt="water wave"
        className="
          absolute bottom-0 left-1/2
          -translate-x-1/2
          w-[1980px]
          opacity-[0.42]
          blur-[0.8px]
          drop-shadow-[0_0_18px_rgba(255,255,255,0.20)]
          pointer-events-none
          z-[2]                /* ← PC と同じ：膜より下、テキストより上 */
        "
      />

      {/* === 上膜グラデ（波を薄く溶かし込む） === */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/58 via-white/22 to-transparent
          pointer-events-none
          z-[3]
        "
      />

      {/* === CONTENT（最前面） === */}
      <div className="relative z-[10] text-center px-6 max-w-[420px] mx-auto">

        {/* ロゴ */}
        <h2
          className="
            text-[17px]
            tracking-[0.24em]
            font-light
            text-black/60
            mb-2
          "
        >
          K I S U I
        </h2>

        {/* テキスト */}
        <p
          className="
            text-[11px]
            tracking-[0.14em]
            leading-[1.9]
            text-black/45
            max-w-[420px] mx-auto
            mb-10
          "
        >
          透明感とやさしさを、毎日のスキンケアに。<br />
          澄んだ水のように、肌へすっと溶け込む<br />心地よさをお届けします。
        </p>

        {/* LINKs */}
        <div
          className="
            flex flex-col gap-4
            text-[12px]
            tracking-[0.12em]
            text-black/35
            mb-10
          "
        >
          <span className="hover:text-black/55 transition-colors cursor-pointer">
            製品情報
          </span>
          <span className="hover:text-black/55 transition-colors cursor-pointer">
            ご利用ガイド
          </span>
          <span className="hover:text-black/55 transition-colors cursor-pointer">
            お問い合わせ
          </span>
        </div>

        {/* COPY */}
        <p
          className="
            text-[10px]
            tracking-[0.12em]
            text-black/30
            mb-3
          "
        >
          © {new Date().getFullYear()} KISUI — All Rights Reserved.
        </p>

        <p
          className="
            text-[9.5px]
            tracking-[0.15em]
            text-black/25
          "
        >
          <a
            href="https://gushikendesign.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black/40 transition-colors"
          >
            Designed by Gushiken Design
          </a>
        </p>
      </div>
    </footer>
  );
}