// ==============================================
// KISUI FAQ — ULTIMATE+（水膜×青膜×Dior×膜フェード）
// >>> Minimal 4Q + Extra FAQ 展開ボタン付き — 完全版
// ==============================================

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import dropletIcon from "../assets/kisui-organic6.png";
import bgWater from "../assets/kisui-bg-water.png";

gsap.registerPlugin(ScrollTrigger);

export default function KisuiFAQ() {
  const wrapRef = useRef(null);
  const lineRef = useRef(null);

  const [openIndex, setOpenIndex] = useState(-1);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* 水膜パララックス */
      gsap.to(wrapRef.current, {
        backgroundPositionY: "60px",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* Dior縦ラインの呼吸 */
      gsap.to(lineRef.current, {
        scaleY: 1.08,
        opacity: 0.60,
        duration: 7.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* タイトルの膜フェード */
      gsap.fromTo(
        ".faq-title",
        { opacity: 0, y: 22, filter: "blur(0.3px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0)",
          duration: 1.35,
          ease: "power2.out",
          scrollTrigger: { trigger: wrapRef.current, start: "top 85%" },
        }
      );

      /* カードの膜フェード */
      gsap.utils.toArray(".faq-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 26, filter: "blur(0.25px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0)",
            duration: 1.25,
            delay: i * 0.10,
            ease: "power2.out",
            scrollTrigger: { trigger: wrapRef.current, start: "top 82%" },
          }
        );
      });

      /* 水滴アイコン */
      gsap.utils.toArray(".faq-droplet").forEach((icon) => {
        gsap.to(icon, {
          opacity: 0.88,
          scale: 1.02,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleToggle = (i) => setOpenIndex((p) => (p === i ? -1 : i));

  return (
    <section
      id="kisui-faq"
      ref={wrapRef}
      className="
        relative w-full
        py-[220px]
        px-6
        bg-cover bg-center
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${bgWater})`,
        backgroundColor: "rgba(178,198,218,0.20)",
        backgroundBlendMode: "lighten",
      }}
    >
      {/* 上フェード */}
      <div
        className="
          absolute top-0 left-0 w-full h-[180px]
          bg-gradient-to-t
          from-transparent via-white/40 to-white/80
          pointer-events-none z-[2]
        "
      />

      {/* 下フェード */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-[200px]
          bg-gradient-to-b
          from-transparent via-white/35 to-white/78
          pointer-events-none z-[2]
        "
      />

      {/* 白膜 */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/85 via-white/52 to-white/10
          pointer-events-none
        "
      />

      {/* Diorライン */}
      <div
        ref={lineRef}
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[1px] h-full bg-white/35
          blur-[0.3px] opacity-[0.55]
        "
      />

      {/* タイトル */}
      <div className="relative z-10 mb-[120px] text-center">
        <h2
          className="
            faq-title
            text-[16px] md:text-[17px]
            tracking-[0.22em]
            text-text-primary/70
          "
        >
          よくあるご質問 — FAQ —
        </h2>
      </div>

      {/* 全FAQ構造 */}
      <div
        className="
          relative z-10
          max-w-[820px] mx-auto
          flex flex-col gap-8
        "
      >
        {/* メイン4項目 */}
        {faqList.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <FAQCard
              key={i}
              index={i}
              item={item}
              isOpen={isOpen}
              onClick={() => handleToggle(i)}
            />
          );
        })}

        {/* 追加FAQ（もっと見る） */}
        <div
          className={`
            transition-all duration-700
            overflow-hidden
            ${showMore ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          {extraFaqList.map((item, i) => {
            const index = i + faqList.length;
            const isOpen = openIndex === index;
            return (
              <FAQCard
                key={index}
                index={index}
                item={item}
                isOpen={isOpen}
                onClick={() => handleToggle(index)}
              />
            );
          })}
        </div>

        {/* もっと見るボタン */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowMore((v) => !v)}
            className="
              px-8 py-3
              text-[13px] tracking-[0.18em]
              rounded-full
              bg-white/40
              backdrop-blur-[2px]
              ring-1 ring-white/50
              shadow-[0_0_12px_rgba(160,190,220,0.35)]
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
   FAQカードコンポーネント（そのまま動作）
===================================================== */
function FAQCard({ item, isOpen, onClick }) {
  return (
    <div
      className={`
        faq-item
        relative
        rounded-[24px]
        overflow-hidden
        backdrop-blur-[2.4px]
        ring-1 ring-white/40
        shadow-[0_18px_55px_rgba(0,0,0,0.10)]
        transition-all duration-500
        ${isOpen ? "bg-white/22" : "bg-white/12"}
      `}
    >
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/36 via-transparent to-transparent
          pointer-events-none
        "
      />

      <button
        type="button"
        onClick={onClick}
        className="
          relative z-10
          w-full text-left
          px-6 md:px-8
          pt-5 pb-4
          flex items-center gap-4
        "
      >
        <img
          src={dropletIcon}
          className="
            faq-droplet
            w-[26px] h-[26px]
            opacity-[0.82]
            drop-shadow-[0_0_6px_rgba(180,215,255,0.60)]
            drop-shadow-[0_0_12px_rgba(150,185,255,0.42)]
            filter drop-shadow(0 0 3px rgba(255,255,255,0.28))
          "
          alt=""
        />

        <div className="flex-1 flex items-center gap-4">
          <p className="text-[14px] tracking-[0.18em] text-text-primary/70">
            {item.q}
          </p>

          {/* Apple式 + / - */}
          <div
            className="
              ml-auto flex items-center justify-center
              w-[22px] h-[22px]
              rounded-full bg-white/45
              shadow-[0_0_6px_rgba(0,0,0,0.06)]
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

      <div
        className={`
          relative z-10
          px-6 md:px-8 pb-6
          transition-all duration-500
          overflow-hidden
          ${isOpen ? "max-h-[220px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-[15px] leading-[2] text-text-primary/80 pt-1">
          {item.a}
        </p>
      </div>
    </div>
  );
}

/* =====================================================
   FAQデータ — メイン4 + 追加3
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
  q: "Q｜男性の肌でも使えますか？",
  a: "はい。仕上がりはサラっと軽く、清潔感を損なわない処方のため、男女問わず快適にお使いいただけます。",
},
{
  q: "Q｜普段のスキンケアと併用できますか？",
  a: "はい。洗顔後すぐ、いつもの化粧水と同じタイミングでお使いいただけます。",
},
];