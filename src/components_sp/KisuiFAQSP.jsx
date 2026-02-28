// ==============================================
// KISUI FAQ — SP MINIMAL+（軽い水膜 × 膜フェード）
// ==============================================

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import dropletIcon from "../assets/kisui-organic6.png";
import bgWater from "../assets/kisui-bg-water.png";

gsap.registerPlugin(ScrollTrigger);

export default function KisuiFAQ_SP() {
  const wrapRef = useRef(null);
  const lineRef = useRef(null);

  const [openIndex, setOpenIndex] = useState(-1);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-sp-title",
        { opacity: 0, y: 20, filter: "blur(0.3px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0)",
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 88%",
          },
        }
      );

      gsap.utils.toArray(".faq-sp-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 22, filter: "blur(0.25px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0)",
            duration: 0.9,
            delay: i * 0.10,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wrapRef.current,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const handleToggle = (i) => setOpenIndex((p) => (p === i ? -1 : i));

  return (
    <section
      ref={wrapRef}
      className="
        relative w-full
        py-[160px]
        px-5
        bg-cover bg-center
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${bgWater})`,
        backgroundColor: "rgba(180,200,220,0.20)",
        backgroundBlendMode: "lighten",
      }}
    >
      {/* ======================
          上フェード（薄）
      ======================= */}
      <div
        className="
          absolute top-0 left-0 w-full h-[130px]
          bg-gradient-to-t
          from-transparent via-white/35 to-white/75
          pointer-events-none z-[2]
        "
      />

      {/* ======================
          下フェード（薄）
      ======================= */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-[150px]
          bg-gradient-to-b
          from-transparent via-white/30 to-white/70
          pointer-events-none z-[2]
        "
      />

      {/* ======================
          淡い白膜
      ======================= */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/70 via-white/38 to-white/10
          pointer-events-none
        "
      />

      {/* ======================
          縦ライン（薄）
      ======================= */}
      <div
        ref={lineRef}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[1px] h-full bg-white/30
          blur-[0.2px] opacity-[0.45]
        "
      />

      {/* ======================
          タイトル
      ======================= */}
      <div className="relative z-10 mb-[80px] text-center">
        <h2
          className="
            faq-sp-title
            text-[14px]
            tracking-[0.20em]
            text-text-primary/70
          "
        >
          よくあるご質問 — FAQ —
        </h2>
      </div>

      {/* ======================
          FAQ 全体
      ======================= */}
      <div
        className="
          relative z-10
          max-w-[500px] mx-auto
          flex flex-col gap-6
        "
      >
        {faqList.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <FAQCard_SP
              key={i}
              index={i}
              item={item}
              isOpen={isOpen}
              onClick={() => handleToggle(i)}
            />
          );
        })}

        {/* 追加 FAQ */}
        <div
          className={`
            transition-all duration-500
            overflow-hidden
            ${showMore ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          {extraFaqList.map((item, i) => {
            const index = i + faqList.length;
            const isOpen = openIndex === index;
            return (
              <FAQCard_SP
                key={index}
                index={index}
                item={item}
                isOpen={isOpen}
                onClick={() => handleToggle(index)}
              />
            );
          })}
        </div>

        {/* もっと見る */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowMore((v) => !v)}
            className="
              px-7 py-3
              text-[12px] tracking-[0.16em]
              rounded-full
              bg-white/45
              backdrop-blur-[1.6px]
              ring-1 ring-white/55
              shadow-[0_0_10px_rgba(150,180,210,0.32)]
              hover:bg-white/60
              transition-all duration-300
            "
          >
            {showMore ? "閉じる" : "質問をもっと見る"}
          </button>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   FAQカード（SP）
===================================================== */
function FAQCard_SP({ item, isOpen, onClick }) {
  return (
    <div
      className={`
        faq-sp-item
        relative
        rounded-[20px]
        overflow-hidden
        backdrop-blur-[1.6px]
        ring-1 ring-white/35
        shadow-[0_12px_40px_rgba(0,0,0,0.08)]
        transition-all duration-400
        ${isOpen ? "bg-white/20" : "bg-white/12"}
      `}
    >
      <button
        type="button"
        onClick={onClick}
        className="
          relative z-10
          w-full text-left
          px-5
          pt-4 pb-3
          flex items-center gap-3
        "
      >
        <img
          src={dropletIcon}
          className="
            w-[22px] h-[22px]
            opacity-[0.78]
            drop-shadow-[0_0_6px_rgba(180,215,255,0.50)]
          "
          alt=""
        />

        <div className="flex-1 flex items-center gap-4">
          <p className="text-[13px] tracking-[0.16em] text-text-primary/70">
            {item.q}
          </p>

          {/* Apple式 + / - */}
          <div
            className="
              ml-auto flex items-center justify-center
              w-[20px] h-[20px]
              rounded-full bg-white/45
              shadow-[0_0_5px_rgba(0,0,0,0.05)]
            "
          >
            <span className="block w-[10px] h-[1px] bg-black/55" />
            <span
              className={`
                block w-[1px] h-[10px] bg-black/55
                transition-transform duration-300
                ${isOpen ? "scale-y-0" : "scale-y-100"}
              `}
            />
          </div>
        </div>
      </button>

      {/* 回答 */}
      <div
        className={`
          relative z-10
          px-5 pb-4
          transition-all duration-400
          overflow-hidden
          ${isOpen ? "max-h-[180px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-[14px] leading-[1.85] text-text-primary/80 pt-1">
          {item.a}
        </p>
      </div>
    </div>
  );
}

/* =====================================================
   FAQデータ（SP は共通）
===================================================== */

const faqList = [
  {
    q: "Q｜どんな肌質でも使えますか？",
    a: "敏感肌・乾燥肌の方でも使えるよう、アルコールや強い香りを入れていません。“しみない透明感”を目指した、やさしい処方です。",
  },
  {
    q: "Q｜香りはありますか？",
    a: "ほとんど無香料に近い、静かな香り設計です。朝も夜も、場所を選ばずにお使いいただけます。",
  },
  {
    q: "Q｜ベタつきませんか？",
    a: "水のように軽いテクスチャーで、仕上がりはサラっと。肌の上には“うすい水膜”だけが残る、KISUIらしい使用感です。",
  },
  {
    q: "Q｜どれくらいで変化を感じますか？",
    a: "早い方だと3〜5日ほどで手触りやメイクノリの変化を感じ始めます。乾燥やくすみが気になりやすい方におすすめです。",
  },
];

const extraFaqList = [
  {
    q: "Q｜使用期間の目安は？",
    a: "50mlで約2週間、100mlで約1ヶ月、200mlで1.5〜2ヶ月程度が目安です。朝晩の使用回数により前後します。",
  },
  {
    q: "Q｜男性でも使えますか？",
    a: "はい。仕上がりはサラっと軽く、清潔感を損なわない処方のため、男女問わず快適にお使いいただけます。",
  },
  {
    q: "Q｜普段のスキンケアと併用できますか？",
    a: "洗顔後すぐ、いつもの化粧水と同じタイミングでお使いいただけます。",
  },
];