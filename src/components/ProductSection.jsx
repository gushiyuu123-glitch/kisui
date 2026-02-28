// src/components/ProductSection.jsx
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import product50 from "../assets/kisui-50.png";
import product100 from "../assets/kisui-100.png";
import product200 from "../assets/kisui1-200.png";
import waterBg from "../assets/kisui-water-wide.png";

gsap.registerPlugin(ScrollTrigger);

export default function ProductSection() {
  const products = [
    {
      size: "50ml",
      price: "¥1,680",
      desc: "初回・お試しにちょうどいい“軽さ”。",
      image: product50,
    },
    {
      size: "100ml",
      price: "¥2,480",
      desc: "いちばん選ばれる定番サイズ。",
      image: product100,
      popular: true,
    },
    {
      size: "200ml",
      price: "¥3,980",
      desc: "毎日しっかり使いたい人へ。",
      image: product200,
    },
  ];

  /* ============================================
        フェードイン（巨大KISUI → カード）
  ============================================ */
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".product-section",
        start: "top 84%",
        end: "top 38%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".kisui-bigword",
      { opacity: 0, y: 46 },
      {
        opacity: 0.08, // ★ 0.10 → 0.08（文字をほんの少し薄く）
        y: 0,
        duration: 1.35,
        ease: "power2.out",
      }
    ).fromTo(
      ".kisui-product-card",
      { opacity: 0, y: 34 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power2.out",
        stagger: 0.22,
      },
      "-=0.45"
    );

    // 巨大KISUIが静かに溶ける表現
    gsap.to(".kisui-bigword", {
      opacity: 0,
      scale: 1.06, // ★ 1.10 → 1.06（拡大量を抑える）
      scrollTrigger: {
        trigger: ".product-section",
        start: "top center",
        end: "+=240",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      className="
        product-section relative overflow-hidden
        py-[200px] px-6        /* ★ 240 → 220：縦の主張を少しだけカット */
        bg-bg-soft
      "
    >
      {/* ============================================
          背景：水面（ミニマル化）
      ============================================ */}
      <div className="absolute inset-0 -z-30">
        <img
          src={waterBg}
          className="
            w-full h-full object-cover
            opacity-[0.24]          /* ★ 0.34 → 0.24：水面を一段トーンダウン */
            brightness-[1.02]       /* ★ 1.05 → 1.02 */
            contrast-[1.02]         /* ★ 1.04 → 1.02 */
          "
        />
      </div>

      {/* 第1レイヤー: 最薄白膜（少しだけ強く） */}
      <div className="absolute inset-0 -z-20 bg-white/[0.018] backdrop-blur-[0.28px]" />

      {/* 第2レイヤー: 白グラス膜 */}
      <div className="absolute inset-0 -z-15 bg-white/[0.035] backdrop-blur-[1.0px]" />

      {/* 第3レイヤー: 光膜（控えめ） */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-b
          from-white/[0.07]
          via-white/[0.035]
          to-white/[0.015]
        "
      />

      {/* ============================================
          大型 KISUI TYPO（薄く・静かに）
      ============================================ */}
   <div
  className="
    kisui-bigword
    absolute left-1/2 top-[32vh]
    -translate-x-1/2
    text-[17vw] md:text-[13vw]
    tracking-[0.26em] font-light
    text-black/22        /* ★ /15 → /22 に修正 */
    opacity-0 select-none pointer-events-none
    z-[1]
  "
>
  KISUI
</div>

      {/* ============================================
          タイトル
      ============================================ */}
      <div className="relative z-[20] max-w-kisui-wide mx-auto text-center mb-24">
        <h2 className="text-[28px] tracking-kisui-md font-light text-text-primary mb-2">
          {/* ★ 30px → 28px / 行間もすこしだけタイトに */}
          商品ラインナップ
        </h2>
        <p className="text-[14px] text-text-secondary">
          綺水（KISUI）トリートメントウォーター
        </p>
        
      </div>

      {/* ============================================
          商品カード
      ============================================ */}
      <div
        className="
          relative z-[20]
          grid grid-cols-1 md:grid-cols-3
          gap-28                       /* ★ 32 → 28：間隔をやや詰めて一体感UP */
          max-w-kisui-wide mx-auto
          place-items-center
        "
      >
        {products.map((p, i) => (
          <div
            key={i}
            className="
              kisui-product-card
              text-center relative group
              pt-20 pb-28               /* ★ pt-24 pb-32 → 少しコンパクトに */
              opacity-0
              transition-all overflow-visible
            "
          >
            {/* ---------------------------------------------
                背後光輪（ミニマル版）
            ---------------------------------------------- */}
            <div
              className={`
                absolute left-1/2 top-[22%]  /* ★ 20% → 22%：ボトルと少し距離を取る */
                -translate-x-1/2
                w-[320px] h-[480px]          /* ★ 360×520 → 320×480：光輪を一回り小さく */
                rounded-full
                blur-[70px]                  /* ★ 80px → 70px */
                opacity-35                   /* ★ 40 → 35：主張ダウン */
                transition-all duration-[800ms]
                ${
                  p.popular
                    ? "bg-kisui-soft/55 scale-100"
                    : "bg-kisui-light/38 scale-[0.97]"
                }
                group-hover:opacity-60       /* ★ 70 → 60 */
                group-hover:scale-[1.03]     /* ★ 1.05 → 1.03 */
                -z-10
              `}
            />

            {/* ガラスの基礎影（薄め） */}
            <div
              className="
                absolute left-1/2 top-[78%]
                -translate-x-1/2
                w-[230px] h-[54px]           /* ★ 少し縮小 */
                bg-white/28                  /* ★ 35 → 28 */
                blur-[16px]                  /* ★ 18 → 16 */
                opacity-[0.23]               /* ★ 0.28 → 0.23 */
                rounded-full
              "
            />

            {/* 人気バッジ（静かめ） */}
            {p.popular && (
              <div
                className="
                  absolute top-6 right-[4%] z-30
                  text-[12px] tracking-kisui-xs   /* ★ 13→12px */
                  bg-white/65 backdrop-blur-md    /* ★ 75 → 65 */
                  px-3 py-1.5 rounded-full text-text-primary/90
                  ring-1 ring-white/40            /* ★ 50 → 40 */
                  shadow-[0_3px_14px_rgba(255,255,255,0.22)] /* ★ 影を少し弱める */
                "
              >
                人気
              </div>
            )}

            {/* ---------------------------------------------
                商品画像（細めミニマル）
            ---------------------------------------------- */}
            <img
              src={p.image}
              alt={p.size}
              className="
                w-[280px] md:w-[300px]      /* ★ 340/360 → 280/300：横幅を一段階シェイプ */
                h-[500px] md:h-[540px]      /* ★ 少しだけ低く */
                object-cover object-top
                mx-auto mb-10               /* ★ 14 → 10 */
                transition-all duration-[800ms]
                opacity-[0.99]
                group-hover:opacity-[1]
                group-hover:scale-[1.03]    /* ★ 1.04 → 1.03 */
              "
            />

            <h3
              className="
                text-[20px]                 /* ★ 22 → 20 */
                tracking-[0.06em]           /* ★ 0.08 → 0.06 */
                font-light text-text-primary
                mb-1
              "
            >
              {p.size.replace("ml", " mL")}
            </h3>

            <p
              className="
                text-text-secondary/90
                text-[13px]                 /* ★ 13.5 → 13 */
                leading-[1.75]
                tracking-[0.02em]
                mb-5                         /* ★ 6 → 5 */
                max-w-[260px] mx-auto        /* ★ 280 → 260 */
              "
            >
              {p.desc}
            </p>

            <p
              className="
                text-[20px]                 /* ★ 21 → 20 */
                font-light
                tracking-[0.05em]           /* ★ 0.06 → 0.05 */
                text-text-primary/95
                mb-8                         /* ★ 9 → 8 */
              "
            >
              {p.price}
            </p>

            {/* ---------------------------------------------
                CTA（ミニマル透明ガラス）
            ---------------------------------------------- */}
            <button
              className="
                w-[68%] mx-auto py-2.5       /* ★ 幅＆高さを少しだけ抑える */
                rounded-kisui-lg
                bg-white/18                  /* ★ 30 → 18：背景をさらに薄く */
                backdrop-blur-[1.4px]
                border border-white/45       /* ★ 40 → 45：線は少し細く明るく */
                hover:bg-white/36
                hover:backdrop-blur-[2.4px]
                hover:shadow-[0_10px_30px_rgba(210,230,245,0.26)] /* ★ 影を弱める */
                transition-all duration-500
                tracking-kisui-sm text-[12.5px] text-text-primary
              "
            >
              購入する
            </button>
          </div>
        ))}
        
      </div>
      
    </section>
  );
}