// ===============================================================
//  🌊 KISUI DROPLET MENU — SP EDITION（右上固定・KISUI完全版）
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

  // ---------------------------------------
  // ① ドロップレットの「呼吸」モーション
  // ---------------------------------------
  useEffect(() => {
    const dropletEl = dropletRef.current;
    const highlightEl = highlightRef.current;
    if (!dropletEl || !highlightEl) return;

    const ctx = gsap.context(() => {
      // 水滴 全体のスロー呼吸
      gsap.to(dropletEl, {
        scaleX: 1.012,
        scaleY: 1.018, // 縦をほんの少しだけ強め（涙っぽさ）
        duration: 7.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // 内側ハイライトのスロー移動（光膜の流れ）
      gsap.to(highlightEl, {
        yPercent: -10,
        duration: 6.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  // ---------------------------------------
  // ② メニュー開閉アニメーション
  //    ※ blur は 0.3px までに抑える
  // ---------------------------------------
  useEffect(() => {
    const menuEl = menuRef.current;
    const bgEl = bgRef.current;

    if (!menuEl || !bgEl) return;

    if (open) {
      gsap.fromTo(
        menuEl,
        { opacity: 0, y: 10, scale: 0.96, filter: "blur(0.25px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.48,
          ease: "power2.out",
        }
      );

      gsap.to(bgEl, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(menuEl, {
        opacity: 0,
        y: 8,
        scale: 0.96,
        filter: "blur(0.25px)",
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(bgEl, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        pointerEvents: "none",
      });
    }
  }, [open]);

  // ---------------------------------------
  // ③ タップ時の「一度だけ涙型リップル」
  // ---------------------------------------
  const triggerRipple = () => {
    const rippleEl = rippleRef.current;
    if (!rippleEl) return;

    gsap.killTweensOf(rippleEl);
    gsap.set(rippleEl, {
      opacity: 0.35,
      scaleX: 0.2,
      scaleY: 0.35, // 縦を強めて涙形
    });

    gsap.to(rippleEl, {
      opacity: 0,
      scaleX: 1.1,
      scaleY: 1.35, // 縦がわずかに速い → 涙型の水紋
      duration: 0.75,
      ease: "power2.out",
    });
  };

  const handleToggle = () => {
    triggerRipple();
    setOpen((v) => !v);
  };

  const handleMenuItemClick = (targetId) => {
    setOpen(false);
    scrollToSection(targetId);
  };

  // セクションIDのマッピング（必要に応じて差し替えOK）
  const items = [
    { label: "ブランドについて", id: "kisui-about" },
    { label: "成分", id: "kisui-ingredients" },
    { label: "商品", id: "kisui-products" },
    { label: "レビュー", id: "kisui-review" },
    { label: "FAQ", id: "kisui-faq" },
  ];

  return (
    <>
      {/* =============================
          右上ドロップレットボタン
      ============================== */}
      <button
        ref={dropletRef}
        onClick={handleToggle}
        className="
          fixed
          top-4 right-4
          z-[999999999]
          w-[58px] h-[58px]
          flex flex-col items-center justify-center
          rounded-full
          bg-white/70
          backdrop-blur-[12px]
          ring-1 ring-white/45
          shadow-[0_6px_22px_rgba(0,0,0,0.16)]
          active:scale-[0.97]
          transition-transform duration-150
        "
      >
        {/* リップル層（涙型の水紋） */}
        <span
          ref={rippleRef}
          className="
            pointer-events-none
            absolute inset-0
            rounded-full
            border border-white/70
            bg-gradient-to-b from-white/35 to-[#d9ebf8]/40
          "
          style={{
            opacity: 0,
          }}
        />

        {/* 内側の“水滴” */}
        <span
          className="
            relative
            w-[22px] h-[22px]
            rounded-full
            bg-gradient-to-b from-white to-[#d7e8f5]
            shadow-[0_0_8px_rgba(255,255,255,0.85)]
            ring-1 ring-black/10
            overflow-hidden
          "
        >
          {/* 光膜のハイライト（ゆっくり上下） */}
          <span
            ref={highlightRef}
            className="
              absolute -top-1 left-0 right-0
              h-[14px]
              bg-gradient-to-b
              from-white/80 via-white/0 to-transparent
              opacity-[0.85]
            "
          />
        </span>

        {/* MENUラベル */}
        <span
          className="
            text-[8px]
            tracking-[0.18em]
            text-black/55
            mt-[3px]
            select-none
          "
        >
          MENU
        </span>
      </button>
 
        {/* 左上ロゴ */}
        <button
          type="button"
          onClick={() => scrollToSection("kisui-hero")}
          className="
            fixed top-4 left-5 z-[99999998]
            text-[16px]
            tracking-[0.22em]
            text-black/55
          "
        >
          KISUI
        </button>

      {/* =============================
          背景光膜（ぼかしは画面全体）
      ============================== */}
      <div
        ref={bgRef}
        className="
          fixed inset-0
          z-[9999990]
          transition-opacity duration-300
        "
        style={{
          opacity: 0,
          backdropFilter: "blur(22px)",
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.55), rgba(220,236,255,0.40) 45%, rgba(200,225,250,0.30))",
          pointerEvents: "none",
        }}
        onClick={() => setOpen(false)}
      />

      {/* =============================
          メニュー本体
      ============================== */}
      <nav
        ref={menuRef}
        className="
          fixed
          right-5 top-[80px]
          z-[9999999]
          w-[230px]
          p-5
          rounded-3xl
          bg-white/72
          backdrop-blur-[14px]
          ring-1 ring-white/55
          shadow-[0_18px_35px_rgba(0,0,0,0.10)]
          flex flex-col gap-3
          text-[13px]
          tracking-[0.18em]
        "
        style={{ opacity: 0 }}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuItemClick(item.id)}
            className="
              text-left
              py-[6px]
              text-black/70
              relative
              group
            "
          >
            {/* 下ライン（うっすら水膜） */}
            <span
              className="
                pointer-events-none
                absolute left-0 bottom-0
                w-0 h-[1px]
                bg-gradient-to-r
                from-transparent via-[#9ec5e8]/80 to-transparent
                transition-all duration-260
                group-hover:w-full
              "
            />
            <span className="relative z-[1] group-hover:text-black/85 transition-colors duration-260">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}