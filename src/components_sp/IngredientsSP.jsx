import waterBg from "../assets/kisui-water-wide.png";
import organicImg from "../assets/kisui-organic7.png";
import organcImg from "../assets/kisui-organic3.png";

export default function IngredientsSP() {
  return (
    <section
      className="
        relative w-full
        pt-[140px] pb-[160px] px-5
        bg-kisui-tone/70
        backdrop-blur-[0.8px]
        overflow-hidden
        kisui-fade
      "
    >
      {/* =========================
          TOP CENTER BLOCK
      ========================== */}
      <div className="max-w-[360px] mx-auto text-center kisui-fade-scope">
        <p
          className="
            text-[11px] tracking-[0.22em]
            text-text-muted mb-4 kisui-fade-item
          "
        >
          INGREDIENTS
        </p>

        <h2
          className="
            text-[22px] tracking-kisui-sm font-light
            text-text-primary leading-[1.62] mb-6
            kisui-fade-item
          "
        >
          肌がよろこぶ瞬間だけを、  
          <br />丁寧に積み重ねました。
        </h2>

        <p
          className="
            text-[12px] leading-[1.9]
            text-text-secondary mb-12 kisui-fade-item
          "
        >
          「毎日触れるものだから、いちばん優しくありたい。」
          <br /><br />
          KISUIは“刺激よりも調和”を選びぬき、
          <br />
          肌が素直に受け入れる処方だけを残しました。
        </p>

        {/* 区切り線 */}
        <div
          className="
            w-[110px] h-[1.3px]
            bg-gradient-to-r from-transparent via-kisui-light/80 to-transparent
            mx-auto mb-[70px]
            kisui-fade-item
          "
        />
      </div>

      {/* =========================
          ORGANIC BACKGROUND
      ========================== */}
      <div
        className="
          absolute left-1/2 top-[360px]
          -translate-x-1/2
          w-[380px] h-[380px]
          opacity-[0.10]
          pointer-events-none select-none
          kisui-fade-item
        "
      >
        <img src={organicImg} alt="" className="w-full h-full object-contain" />

        <div
          className="
            absolute inset-0
            pointer-events-none
            bg-[linear-gradient(to_right,
              rgba(225,235,255,0.7) 0%,
              rgba(255,255,255,0) 25%,
              rgba(255,255,255,0) 75%,
              rgba(225,235,255,0.7) 100%
            )]
          "
        />
      </div>

      {/* =========================
          SINGLE COLUMN LIST (SP)
      ========================== */}
      <div className="max-w-[420px] mx-auto kisui-fade-scope">
        {[
          ["水", "清らかで肌なじみの良い、\nKISUIの核となるベースウォーター。"],
          ["BG", "植物由来の保湿導入。\n肌にうるおいの道をつくるサポート成分。"],
          ["グリセリン", "水分を抱えて離さない“うるおいホールド”。\n長時間しっとり。"],
          ["ヒアルロン酸Na", "角質層にしっとり密着。\nつるんとした透明感をプラス。"],
          ["ペンチレングリコール", "低刺激で肌への負担が少ない。\n快適な保湿補助。"],
          ["加水分解ヒアルロン酸", "通常より細かく浸透しやすい。\nふっくら感を後押し。"],
        ].map(([title, desc], i) => (
          <div
            key={i}
            className="
              kisui-fade-item kisui-fade
              flex items-start gap-3
              pb-6 border-b border-white/[0.1]
              opacity-0 translate-y-[16px]
            "
            style={{ transitionDelay: `${0.06 * i}s` }}
          >
            {/* === 水滴アイコン（SP用に縮小） === */}
            <div
              className="
                relative
                w-[40px] h-[40px]
                rounded-full
                flex items-center justify-center
                group overflow-visible
              "
            >
              <div
                className="
                  absolute inset-0 rounded-full
                  bg-white/5
                  ring-1 ring-white/[0.18]
                  shadow-[inset_0_0_10px_rgba(255,255,255,0.20)]
                  backdrop-blur-[1.4px]
                "
              />

              <img
                src={organcImg}
                alt=""
                className="
                  relative z-[2]
                  w-[38px] h-[38px]
                  opacity-[0.98]
                  object-contain
                  drop-shadow-[0_3px_9px_rgba(255,255,255,0.38)]
                  transition-all duration-[900ms]
                  group-hover:scale-[1.06]
                "
              />

              {/* ハイライト */}
              <div
                className="
                  absolute top-[22%] left-[25%]
                  w-[12px] h-[12px]
                  bg-white/70 rounded-full
                  blur-[5px] opacity-[0.7]
                "
              />
            </div>

            {/* === テキスト（改行対応） === */}
            <div className="flex-1">
              <p className="text-[15px] font-light text-text-primary mb-1">
                {title}
              </p>

              <p className="text-[13px] leading-[1.8] text-text-secondary">
                {desc.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* =========================
          DETAIL BUTTON
      ========================== */}
      <div className="mt-[80px] flex justify-center kisui-fade-scope">
        <button
          className="
            relative
            px-7 py-3
            text-[12px] tracking-[0.16em] font-light
            text-text-primary/90

            rounded-full
            bg-white/[0.05]
            border border-white/25
            backdrop-blur-[2px]

            flex items-center gap-2
            transition-all duration-600
            hover:bg-white/[0.12]
            hover:border-white/35
            hover:scale-[1.02]
            group
            kisui-fade-item
          "
        >
          <span className="relative z-[2]">成分の詳細を見る</span>
          <span
            className="
              relative z-[2]
              text-text-primary/60
              group-hover:text-text-primary/90
              group-hover:translate-x-[3px]
              transition-all duration-600
            "
          >
            →
          </span>
        </button>
      </div>

      {/* =========================
          水面背景
      ========================== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[220px]
          opacity-[0.38] -z-10 overflow-hidden
        "
      >
        <img
          src={waterBg}
          alt=""
          className="w-full h-full object-cover brightness-[1.04] opacity-[0.32]"
        />
      </div>

      {/* ごく薄い光膜 */}
      <div
        className="
          absolute inset-0
          bg-white/[0.03] backdrop-blur-[0.5px]
          -z-[5]
        "
      />
    </section>
  );
}