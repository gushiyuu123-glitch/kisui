import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import product50 from "../assets/kisui-50.png";
import product100 from "../assets/kisui-100.png";
import product200 from "../assets/kisui1-200.png";
import waterBg from "../assets/kisui-water-wide.png";

gsap.registerPlugin(ScrollTrigger);

export default function ProductSectionSP() {
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
        SP フェードイン（軽量版）
  ============================================ */
  useEffect(() => {
    gsap.fromTo(
      ".kisui-product-card-sp",
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.16,
        scrollTrigger: {
          trigger: ".product-section-sp",
          start: "top 88%",
        },
      }
    );
  }, []);

  return (
    <section
      className="
        product-section-sp relative overflow-hidden
        py-[100px] px-5         /* ★ 140→100：縦間延び削減 */
        bg-bg-soft
      "
    >
      {/* ============================================
          背景：水面（さらに軽量）
      ============================================ */}
      <div className="absolute inset-0 -z-30">
        <img
          src={waterBg}
          className="
            w-full h-full object-cover
            opacity-[0.18]          /* ★ 0.22→0.18 */
            brightness-[1.015]
            contrast-[1.01]
          "
        />
      </div>

      {/* 白膜グラス（軽量） */}
      <div className="absolute inset-0 -z-20 bg-white/[0.02] backdrop-blur-[0.2px]" />
      <div className="absolute inset-0 -z-15 bg-white/[0.03] backdrop-blur-[0.6px]" />

      {/* 光膜（控えめ） */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-b
          from-white/[0.05]
          via-white/[0.025]
          to-white/[0.015]
        "
      />

      {/* ============================================
          タイトル（SP最適化）
      ============================================ */}
      <div className="relative z-[20] text-center mb-14">
        <h2 className="text-[20px] tracking-kisui-md font-light text-text-primary mb-1">
          商品ラインナップ
        </h2>
        <p className="text-[12.5px] text-text-secondary">
          綺水（KISUI）トリートメントウォーター
        </p>
      </div>

      {/* ============================================
          商品カード（テンポ重視で間延びカット）
      ============================================ */}
      <div className="relative z-[20] flex flex-col gap-14 max-w-[420px] mx-auto">
        {products.map((p, i) => (
          <div
            key={i}
            className="
              kisui-product-card-sp
              text-center relative group
              pt-10 pb-14             /* ★ 14→10 / 20→14 */
              opacity-0
              transition-all
            "
          >
            {/* 光輪（SPはさらに縮小） */}
            <div
              className={`
                absolute left-1/2 top-[18%]
                -translate-x-1/2
                w-[220px] h-[330px]        /* ★ 260→220 / 380→330 */
                rounded-full
                blur-[45px]                /* ★ 55→45 */
                opacity-30                 /* ★ 35→30 */
                transition-all duration-[650ms]
                ${
                  p.popular
                    ? "bg-kisui-soft/50 scale-100"
                    : "bg-kisui-light/32 scale-[0.96]"
                }
                group-hover:opacity-50
                group-hover:scale-[1.015]
                -z-10
              `}
            />

            {/* ボトル影（SP向けに小さめ） */}
            <div
              className="
                absolute left-1/2 top-[74%]
                -translate-x-1/2
                w-[150px] h-[40px]         /* ★ 180→150 / 48→40 */
                bg-white/22
                blur-[12px]
                opacity-[0.20]
                rounded-full
              "
            />

            {/* 人気バッジ */}
            {p.popular && (
              <div
                className="
                  absolute top-3 right-[8%] z-20
                  text-[10px] tracking-kisui-xs
                  bg-white/55 backdrop-blur-md
                  px-2.5 py-1 rounded-full text-text-primary/90
                  ring-1 ring-white/35
                  shadow-[0_2px_10px_rgba(255,255,255,0.18)]
                "
              >
                人気
              </div>
            )}

            {/* 商品画像（SP向けさらに細形） */}
            <img
              src={p.image}
              alt={p.size}
              className="
                w-[220px]                   /* ★ 240→220 */
                h-[420px]                   /* ★ 460→420 */
                object-cover object-top
                mx-auto mb-6                /* ★ 8→6 */
                transition-all duration-[650ms]
                opacity-[0.99]
                group-hover:opacity-[1]
                group-hover:scale-[1.025]   /* ★ 1.03→1.025 */
              "
            />

            <h3
              className="
                text-[17px]                 /* ★ 18→17 */
                tracking-[0.05em]
                font-light text-text-primary mb-1
              "
            >
              {p.size.replace("ml", " mL")}
            </h3>

            <p
              className="
                text-text-secondary/90
                text-[12.5px]               /* ★ 13→12.5 */
                leading-[1.7]
                tracking-[0.01em]
                mb-3                         /* ★ 4→3 */
                max-w-[230px] mx-auto
              "
            >
              {p.desc}
            </p>

            <p
              className="
                text-[18px]                 /* ★ 19→18 */
                font-light
                tracking-[0.05em]
                text-text-primary/95
                mb-5                         /* ★ 6→5 */
              "
            >
              {p.price}
            </p>

            {/* CTA（最適化版） */}
            <button
              className="
                w-[72%] mx-auto py-2.5       /* ★ 3→2.5 */
                rounded-kisui-lg

                bg-white/24
                backdrop-blur-[1.4px]
                border border-white/45

                bg-gradient-to-b
                from-white/30 via-white/20 to-white/12

                hover:bg-white/38
                hover:backdrop-blur-[2.2px]
                hover:shadow-[0_6px_26px_rgba(215,232,245,0.25)]
                hover:scale-[1.012]          /* ★ 1.015→1.012 */

                transition-all duration-[360ms]
                
                tracking-kisui-sm
                text-[12.5px] text-text-primary/95 font-light
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