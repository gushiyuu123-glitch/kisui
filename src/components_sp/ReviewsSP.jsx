// src/components/Reviews.jsx
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

/* ===============================
   💧 Droplet SVG（水滴スコア）
================================ */
function DropletIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-[22px] h-[22px]" aria-hidden="true">
      <defs>
        <radialGradient id="kisuiDropletFill" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#E4F1F8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#AFC7D8" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="kisuiDropletGlow" cx="50%" cy="40%" r="75%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="16" cy="16" r="14" fill="url(#kisuiDropletGlow)" opacity="0.9" />
      <path
        d="M16 4C16 4 9.5 12.2 9.5 17.2C9.5 21.6 12.3 24.8 16 24.8C19.7 24.8 22.5 21.6 22.5 17.2C22.5 12.2 16 4 16 4Z"
        fill="url(#kisuiDropletFill)"
        stroke="rgba(175,199,216,0.9)"
        strokeWidth="0.7"
      />
      <ellipse cx="14" cy="12" rx="2.6" ry="1.6" fill="#ffffff" opacity="0.78" />
    </svg>
  );
}

export default function Reviews() {
  const reviews = [
    { name: "29歳 / オフィスワーカー", text: "軽いのにちゃんとうるおいます。\n無香料で使いやすいです。", score: 5 },
    { name: "32歳 / 会社員", text: "水みたいに軽いのに、\nしっとり続くのが不思議。", score: 4 },
    { name: "27歳 / 美容好き", text: "ガラスのような透明感。\n朝のスキンケアが気持ち良くなりました。", score: 5 },
    { name: "35歳 / 主婦", text: "敏感肌でもしみない。\n毎日使える“安心感”があります。", score: 5 },
    { name: "25歳 / 営業職", text: "ベタつかずにサラッと入る。\n昼間の乾燥が減りました。", score: 4 },
    { name: "30歳 / 看護師", text: "香りがないので職場でも使いやすく、\n肌がふっくらします。", score: 5 },
    { name: "24歳 / 学生", text: "ボトルが可愛い。\n洗面台に置いても生活になじみます。", score: 4 },
    { name: "40歳 / 会社員", text: "夜まで乾燥しにくく、\nゴワつきが和らいだ気がします。", score: 5 },
    { name: "28歳 / 事務", text: "朝の化粧ノリが変わりました。\n軽いのに保湿力が高いです。", score: 5 },
  ];

  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const [page, setPage] = useState(0);
  const itemsRef = useRef([]);

  /* ===============================
        自動ループ（8.5s）
  =============================== */
  useEffect(() => {
    const t = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 8500);
    return () => clearInterval(t);
  }, [totalPages]);

  /* ===============================
        GSAP ページ切替アニメ
  =============================== */
  useEffect(() => {
    // 現在の3カードに対して淡フェード
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 20, filter: "blur(1px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power2.out",
          delay: i * 0.12, // 階段ディレイ
        }
      );
    });
  }, [page]);

  const current = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      className="
        relative w-full
        pt-[180px] pb-[200px]
        bg-kisui-tone/45
        backdrop-blur-[1px]
        overflow-hidden
        kisui-fade
      "
    >
      {/* 背景グラデ */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/85 via-white/72 to-kisui-light/40
        "
      />

      {/* 中央の縦光 */}
      <div
        className="
          absolute inset-y-[10%] left-1/2 -translate-x-1/2
          w-[60%]
          bg-white/24
          blur-[80px]
          opacity-[0.38]
        "
      />

      <div className="relative z-10 max-w-kisui-wide mx-auto px-6">
        {/* 見出し */}
        <div className="mb-16 text-center kisui-fade-item">
          <h2 className="text-[15px] tracking-kisui-md text-text-primary/70 mb-2">
            KISUIを選んだ人の“実感”
          </h2>
          <p className="text-[11px] tracking-[0.18em] text-text-muted opacity-[0.65] mt-4">
            — Reviews —
          </p>
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {current.map((r, i) => (
            <div
              key={r.name + i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="
                relative p-8 rounded-kisui-xl
                bg-white/40 backdrop-blur-[2px]
                ring-1 ring-white/40
                shadow-[0_8px_24px_rgba(0,0,0,0.05)]
              "
            >
              <p className="text-[13px] tracking-kisui-xs text-text-muted mb-4">
                {r.name}
              </p>

              <p className="text-[15px] leading-[1.9] text-text-primary/85 font-light mb-6">
                {r.text.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              <div className="flex gap-1.5">
                {Array.from({ length: r.score }).map((_, idx) => (
                  <DropletIcon key={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ページドット */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx)}
              className={`
                w-[9px] h-[9px] rounded-full transition-all duration-500
                ${idx === page ? "bg-aqua-300" : "bg-aqua-100/70"}
              `}
            />
          ))}
        </div>

        <p className="text-center text-[13px] tracking-kisui-xs text-text-primary/55 mt-12">
          ※ 実際に寄せられた声をイメージとして<br />掲載しています。
        </p>
      </div>
    </section>
  );
}