// src/components/BridgeUltimateSP.jsx（SP特化：世界観完全最適化）
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bottleImg from "../assets/kisui-bottle2.png";

gsap.registerPlugin(ScrollTrigger);

export default function BridgeUltimateSP() {
  const wrapRef = useRef(null);
  const bottleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ▼ 水膜ゆらぎ（SPは振れ幅を少し抑えて清潔感を優先）
      gsap.to(wrapRef.current, {
        backgroundPosition: "0px 22px",
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ▼ タイトル
      gsap.fromTo(
        ".bridge-sp-title",
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 82%",
          },
        }
      );

      // ▼ サブコピー
      gsap.fromTo(
        ".bridge-sp-sub",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          delay: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 82%",
          },
        }
      );

      // ▼ ボトル（SPは距離を短くして“浮いて現れる”感）
      gsap.fromTo(
        bottleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 0.45,
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
        pt-[200px] pb-[220px]
        overflow-hidden
        bg-[url('/kisui-water-texture.png')]
        bg-cover bg-center
        backdrop-blur-[0.7px]
        md:hidden
      "
    >
      {/* ▼ 白膜：SPは少し濃くして“可視化された透明”に */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/85 
          via-white/55
          to-[#ECF7FA]/20
        "
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 px-7 text-center">

        {/* ▼ タイトル */}
<h2
  className="
    bridge-sp-title
    text-[30px]
    leading-[1.55]
    tracking-[0.20em]
    font-light
    text-text-primary/65
    whitespace-pre-line
    mb-[120px]
  "
>
  <span className="inline-block whitespace-nowrap">透明が、</span>
  {"\n"}
  <span className="inline-block whitespace-nowrap">生活を変えていく。</span>
</h2>

        {/* ▼ ボトル */}
        <img
          ref={bottleRef}
          src={bottleImg}
          alt="KISUI bottle"
          className="
            w-[220px] mx-auto mb-[100px]
            opacity-[0.28]
            blur-[0.6px]
            mix-blend-soft-light
            drop-shadow-[0_14px_32px_rgba(0,0,0,0.08)]
          "
        />

        {/* ▼ サブコピー */}
        <p
          className="
            bridge-sp-sub
            text-[14px]
            leading-[2]
            text-text-primary/45
            tracking-kisui-xs
            max-w-[340px]
            mx-auto
          "
        >
          日々の肌が整うと、心も静かに整っていく。
          KISUIは、そのための一本です。
        </p>
      </div>
    </section>
  );
}