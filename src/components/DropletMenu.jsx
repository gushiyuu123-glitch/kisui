// ===============================================================
// 🌊 KISUI DROPLET MENU — SP ULTIMATE EDITION（右上固定・水膜強化）
// ===============================================================

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function DropletMenuSP() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);
  const bgRef = useRef(null);
  const dropletRef = useRef(null);
  const rippleRef = useRef(null);
  const highlightRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ===============================================================
  // ① 水滴の“呼吸” ＆ 光ハイライトの流れ
  // ===============================================================
  useEffect(() => {
    const drop = dropletRef.current;
    const hl = highlightRef.current;
    if (!drop || !hl) return;

    const ctx = gsap.context(() => {
      gsap.to(drop, {
        scaleX: 1.014,
        scaleY: 1.022,
        duration: 7.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(hl, {
        yPercent: -16,
        duration: 6.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        opacity: 0.85,
      });
    });

    return () => ctx.revert();
  }, []);

  // ===============================================================
  // ② メニュー開閉（blurは0.3px以下）
  // ===============================================================
  useEffect(() => {
    const menu = menuRef.current;
    const bg = bgRef.current;
    if (!menu || !bg) return;

    if (open) {
      gsap.fromTo(
        menu,
        { opacity: 0, y: 14, scale: 0.95, filter: "blur(0.28px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.48,
          ease: "power3.out",
        }
      );

      gsap.to(bg, {
        opacity: 1,
        duration: 0.38,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: 10,
        scale: 0.95,
        duration: 0.42,
        ease: "power2.out",
      });

      gsap.to(bg, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
        pointerEvents: "none",
      });
    }
  }, [open]);

  // ===============================================================
  // ③ タップ時の涙形リップル
  // ===============================================================
  const triggerRipple = () => {
    const ripple = rippleRef.current;
    if (!ripple) return;

    gsap.killTweensOf(ripple);
    gsap.set(ripple, {
      opacity: 0.3,
      scaleX: 0.22,
      scaleY: 0.36,
    });

    gsap.to(ripple, {
      opacity: 0,
      scaleX: 1.15,
      scaleY: 1.42,
      duration: 0.75,
      ease: "power2.out",
    });
  };

  const handleToggle = () => {
    triggerRipple();
    setOpen((v) => !v);
  };

  const items = [
    { label: "ブランドについて", id: "kisui-philosophy" },
    { label: "成分", id: "kisui-ingredients" },
    { label: "商品", id: "kisui-products" },
    { label: "レビュー", id: "kisui-reviews" },
    { label: "FAQ", id: "kisui-faq" },
  ];

  return (
    <>
      {/* =============================================================
          右上 水滴アイコン（強化版）
      ============================================================= */}
      <button
        ref={dropletRef}
        onClick={handleToggle}
        className="
          fixed top-4 right-4 z-[999999999]
          w-[60px] h-[60px]
          flex flex-col items-center justify-center
          rounded-full
          bg-white/65
          backdrop-blur-[11px]
          ring-1 ring-white/50
          shadow-[0_8px_24px_rgba(0,0,0,0.15)]
          active:scale-[0.97]
          transition-transform duration-150
        "
      >
        {/* リップル */}
        <span
          ref={rippleRef}
          className="
            pointer-events-none absolute inset-0 rounded-full
            bg-gradient-to-b from-white/45 to-[#d9ebf8]/35
            border border-white/60
          "
          style={{ opacity: 0 }}
        />

        {/* 内側の水滴 */}
        <span
          className="
            relative w-[22px] h-[22px]
            rounded-full
            bg-gradient-to-b from-white to-[#e3f0f9]
            shadow-[0_0_10px_rgba(255,255,255,0.85)]
            ring-1 ring-black/10
            overflow-hidden
          "
        >
          {/* 光膜 */}
          <span
            ref={highlightRef}
            className="
              absolute -top-1 left-0 right-0
              h-[14px]
              bg-gradient-to-b from-white/85 via-white/0 to-transparent
            "
          />
        </span>

        <span
          className="
            text-[8px] tracking-[0.18em]
            text-black/55 mt-[4px]
          "
        >
          MENU
        </span>
      </button>

{/* 左上ロゴ（存在感 +20%） */}
<button
  type="button"
  onClick={() => scrollToSection("kisui-hero")}
  className="
    fixed top-6 left-7 z-[99999998]
    text-[17px] tracking-[0.26em]
    font-normal
    text-black/70
    hover:text-black/85
    transition-colors duration-300
  "
>
  KISUI
</button>
      {/* =============================================================
          背景光膜（KISUI水膜トーン）
      ============================================================= */}
      <div
        ref={bgRef}
        className="fixed inset-0 z-[9999990] transition-opacity duration-300"
        style={{
          opacity: 0,
          backdropFilter: "blur(22px)",
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.55), rgba(230,244,255,0.40) 45%, rgba(210,233,248,0.32))",
          pointerEvents: "none",
        }}
        onClick={() => setOpen(false)}
      />

      {/* =============================================================
          メニュー本体（Dior透明カード級の質感）
      ============================================================= */}
      <nav
        ref={menuRef}
        className="
          fixed right-4 top-[86px]
          z-[9999999]
          w-[232px]
          p-5
          rounded-3xl
          bg-white/72
          backdrop-blur-[14px]
          ring-1 ring-white/55
          shadow-[0_20px_42px_rgba(0,0,0,0.12)]
          flex flex-col gap-[10px]
          text-[13px]
          tracking-[0.18em]
        "
        style={{ opacity: 0 }}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setOpen(false);
              scrollToSection(item.id);
            }}
            className="
              text-left py-[7px] relative group text-black/70
            "
          >
            {/* ホバーライン */}
            <span
              className="
                pointer-events-none
                absolute left-0 bottom-0
                w-0 h-[1px]
                bg-gradient-to-r from-transparent via-[#9ec5e8]/85 to-transparent
                transition-all duration-300
                group-hover:w-full
              "
            />
            <span className="relative z-[1] transition-colors group-hover:text-black/85">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}