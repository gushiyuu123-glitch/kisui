// ===============================================================
//  🌊 KISUI DROPLET MENU — HEADERLESS + TEXT LOGO EDITION (Refined + Scroll + Guide)
// ===============================================================

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function DropletMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const dropletRef = useRef(null);
  const bgRef = useRef(null);

  // -------------------------------
  // セクションスクロールヘルパー
  // -------------------------------
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* ----------------------------------------
      メニュー開閉アニメーション
  ---------------------------------------- */
  useEffect(() => {
    const menuEl = menuRef.current;
    const bgEl = bgRef.current;
    const dropletEl = dropletRef.current;

    if (!menuEl || !bgEl || !dropletEl) return;

    if (open) {
      // メニュー本体
      gsap.fromTo(
        menuEl,
        { scale: 0.88, opacity: 0, filter: "blur(16px)", y: 12 },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        }
      );

      // 背景光膜
      gsap.to(bgEl, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      // しずく呼吸モーション
      gsap.to(dropletEl, {
        scale: 1.04,
        rotate: 180,
        opacity: 0.95,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        overwrite: "auto",
      });
    } else {
      // メニュー本体
      gsap.to(menuEl, {
        scale: 0.92,
        opacity: 0,
        filter: "blur(10px)",
        y: 10,
        duration: 0.45,
        ease: "power3.out",
      });

      // 背景光膜
      gsap.to(bgEl, {
        opacity: 0,
        duration: 0.45,
        ease: "power2.out",
      });

      // しずくを“静”に戻す
      gsap.to(dropletEl, {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    }
  }, [open]);

  /* ----------------------------------------
      ESCキーで閉じる
  ---------------------------------------- */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // メニュー項目と飛び先IDのマッピング
  const menuItems = [
    { label: "ブランドについて", target: "kisui-philosophy", kind: "normal" },
    { label: "成分について", target: "kisui-ingredients", kind: "normal" },
    { label: "ご購入はこちら", target: "kisui-products", kind: "primary" },
    { label: "お客様の声", target: "kisui-reviews", kind: "normal" },
    { label: "よくあるご質問", target: "kisui-faq", kind: "normal" },
  ];

  return (
    <>
      {/* ----------------------------------------------------------
          🌫 左上ロゴ（フォント）— クリックでHEROへ
      ----------------------------------------------------------- */}
      <button
        type="button"
        onClick={() => scrollToSection("kisui-hero")}
        className="
          fixed top-5 left-6 z-[900]
          text-[18px] md:text-[20px]
          tracking-[0.22em]
          font-light
          text-black/55
          select-none
          cursor-pointer
          bg-transparent
        "
      >
        KISUI
      </button>

      {/* ----------------------------------------------------------
          🌊 しずくボタン（内部 MINI MENU）
      ----------------------------------------------------------- */}
      <button
        ref={dropletRef}
        onClick={() => setOpen((prev) => !prev)}
        className="
          fixed z-[1001]
          right-6 bottom-6 md:top-8 md:bottom-auto

          w-[56px] h-[56px]
          flex flex-col items-center justify-center
          gap-[2px]

          rounded-full
          bg-white/55
          backdrop-blur-[10px]
          ring-1 ring-white/40
          shadow-[0_10px_25px_rgba(0,0,0,0.10)]

          transition-all duration-500
          hover:scale-[1.08]
        "
        style={{
          background:
            'radial-gradient(circle at 50% 35%, rgba(255,255,255,0.96), rgba(212,232,248,0.6))',
        }}
        aria-label="メニューを開く"
        aria-expanded={open}
      >
        <div
          className="
            w-[23px] h-[23px]
            rounded-full
            bg-gradient-to-b from-white to-[#d7e8f5]
            shadow-[0_0_14px_rgba(255,255,255,0.8)]
          "
        />

        <span
          className="
            text-[9px]
            tracking-[0.16em]
            text-black/55
            select-none pointer-events-none
            translate-y-[1px]
          "
        >
          MENU
        </span>
      </button>

      {/* ----------------------------------------------------------
          背景光膜（淡い水膜 × 深度）
      ----------------------------------------------------------- */}
      <div
        ref={bgRef}
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-[1000]
          transition-opacity duration-400
          ${open ? "pointer-events-auto" : "pointer-events-none"}
        `}
        style={{
          opacity: 0,
          backdropFilter: "blur(18px)",
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.55), rgba(218,234,255,0.45) 45%, rgba(200,225,250,0.35))",
        }}
      />

      {/* ----------------------------------------------------------
          メニュー本体（しずく展開）
      ----------------------------------------------------------- */}
      <nav
        ref={menuRef}
        className="
          fixed z-[1001]
          right-6 bottom-[92px]
          md:right-10 md:top-[110px]

          w-[240px] md:w-[260px]

          p-6
          rounded-3xl
          bg-white/70
          backdrop-blur-[18px]
          ring-1 ring-white/55
          shadow-[0_20px_45px_rgba(0,0,0,0.12)]

          flex flex-col gap-4
          text-[14px]
          tracking-[0.18em]
          text-text-primary/75
        "
        style={{ opacity: 0 }}
      >
        {/* ===== ミニヘッダー（KISUI GUIDE） ===== */}
        <div className="mb-3">
          <p
            className="
              text-[11px]
              tracking-[0.26em]
              text-text-primary/55
              uppercase
            "
          >
            KISUI&nbsp;GUIDE
          </p>
          <div
            className="
              mt-2 w-[46px] h-[1px]
              bg-gradient-to-r
              from-[#c7dff4] via-[#dfefff] to-transparent
            "
          />
        </div>

        {/* ===== メニュー項目 ===== */}
        {menuItems.map(({ label, target, kind }) => (
          <button
            key={label}
            onClick={() => {
              setOpen(false);
              scrollToSection(target);
            }}
            className={`
              group
              relative text-left py-[6px]
              transition-colors
              ${
                kind === "primary"
                  ? "text-text-primary/90"
                  : "text-text-primary/75"
              }
            `}
          >
            {label}

            <span
              className={`
                absolute right-0 top-1/2 -translate-y-1/2
                w-[12px] h-[12px]
                rounded-full
                bg-gradient-to-b from-white to-[#d1e4f2]
                shadow-[0_0_10px_rgba(255,255,255,0.9)]
                transition-all duration-300
                ${
                  kind === "primary"
                    ? "opacity-70 group-hover:opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }
              `}
            />
          </button>
        ))}
      </nav>
    </>
  );
}
