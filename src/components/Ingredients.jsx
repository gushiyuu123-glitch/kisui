import waterBg from "../assets/kisui-water-wide.png";
import organicImg from "../assets/kisui-organic7.png";
import organcImg from "../assets/kisui-organic3.png";
export default function Ingredients() {
  return (
    <section
      className="
        relative w-full
        py-[200px] px-6
        bg-kisui-tone/70
        backdrop-blur-[1px]
        overflow-hidden
        kisui-fade
      "
    >
      {/* =========================
          TOP CENTER BLOCK
      ========================== */}
      <div className="max-w-[720px] mx-auto text-center kisui-fade-scope">
        <p
          className="
            text-[13px] tracking-[0.22em]
            text-text-muted mb-5 kisui-fade-item
          "
        >
          INGREDIENTS
        </p>

        <h2
          className="
            text-[28px] tracking-kisui-sm font-light
            text-text-primary leading-[1.65] mb-8
            kisui-fade-item
          "
        >
          肌がよろこぶ瞬間だけを、  
          <br />丁寧に積み重ねました。
        </h2>

        <p
          className="
            text-[16px] leading-[1.9]
            text-text-secondary mb-16 kisui-fade-item
          "
        >
          「毎日触れるものだから、いちばん優しくありたい」。
          <br />
          KISUIは“刺激よりも調和”を選びぬき、
          <br />
          肌が素直に受け入れる処方だけを残しました。
        </p>

        {/* 区切り線 */}
        <div
          className="
            w-[140px] h-[1.4px]
            bg-gradient-to-r from-transparent via-kisui-light/80 to-transparent
            mx-auto mb-[90px]
            kisui-fade-item
          "
        />
      </div>

      {/* =========================
          ORGANIC BACKGROUND
      ========================== */}
      <div
        className="
          absolute left-1/2 top-[460px]
          -translate-x-1/2
          w-[600px] h-[600px]
          opacity-[0.08]
          pointer-events-none select-none
          kisui-fade-item
        "
      >
        {/* 元画像 */}
        <img
          src={organicImg}
          alt=""
          className="w-full h-full object-contain"
        />
  

        {/* 左右フェード */}
        <div
          className="
            absolute inset-0
            pointer-events-none
            bg-[linear-gradient(to_right,
              rgba(220,235,255,0.7) 0%,
              rgba(255,255,255,0) 20%,
              rgba(255,255,255,0) 80%,
              rgba(220,235,255,0.7) 100%
            )]
          "
        />
      </div>

      {/* =========================
          2 COLUMNS INGREDIENT LIST
      ========================== */}
      <div
        className="
          max-w-[980px] mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-[110px]
          kisui-fade-scope
        "
      >
        {[
          ["水", "清らかで肌なじみの良い、KISUIの核となるベースウォーター。"],
          ["BG", "植物由来の保湿導入。肌にうるおいの道をつくるサポート成分。"],
          ["グリセリン", "水分を抱えて離さない“うるおいホールド”。長時間しっとり。"],
          ["ヒアルロン酸Na", "角質層にしっとり密着。つるんとした透明感をプラス。"],
          ["ペンチレングリコール", "低刺激で肌への負担が少ない快適な保湿補助。"],
          ["加水分解ヒアルロン酸", "通常より細かく浸透しやすい。ふっくら感を後押し。"],
        ].map(([title, desc], i) => (
          <div
            key={i}
            className="
              kisui-fade-item kisui-fade
              flex items-start gap-4
              pb-7 border-b border-white/[0.08]
              opacity-0 translate-y-[16px]
            "
            style={{ transitionDelay: `${0.06 * i}s` }}
          >
   {/* 本体：滴（ガラス水滴 × ハイライト × 霞） */}
<div
  className="
    relative
    w-[46px] h-[46px]
    rounded-full
    overflow-visible
    flex items-center justify-center
    group
  "
>
  {/* === 水滴の縁（ガラス縁） === */}
  <div
    className="
      absolute inset-0
      rounded-full
      bg-white/5
      ring-1 ring-white/[0.18]
      shadow-[inset_0_0_12px_rgba(255,255,255,0.20)]
      backdrop-blur-[1.6px]
    "
  />

  {/* === 水滴内部の画像（あなたのしずく画像） === */}
  <img
    src={organcImg}
    alt=""
    className="
      relative z-[2]
      w-[44px] h-[44px]
      object-contain
      opacity-[0.98]
      drop-shadow-[0_4px_12px_rgba(255,255,255,0.34)]
      transition-all duration-[900ms]
      group-hover:scale-[1.08]
      group-hover:drop-shadow-[0_6px_16px_rgba(255,255,255,0.48)]
    "
  />

  {/* === ハイライト（光の粒） === */}
  <div
    className="
      absolute
      top-[22%] left-[24%]
      w-[14px] h-[14px]
      rounded-full
      bg-white/70
      blur-[6px]
      opacity-[0.65]
      pointer-events-none
      transition-all duration-[900ms]
      group-hover:opacity-[0.85] group-hover:blur-[9px]
    "
  />

  {/* === 水滴下部の影（縦に潰れた影） === */}
  <div
    className="
      absolute bottom-[-3px] left-1/2
      w-[22px] h-[8px]
      -translate-x-1/2
      bg-black/25
      blur-[6px]
      opacity-[0.28]
      rounded-full
      pointer-events-none
    "
  />

  {/* === 水膜の滲み（超薄い光） === */}
  <div
    className="
      absolute inset-0
      rounded-full
      bg-white/8
      blur-[16px]
      opacity-[0.28]
      pointer-events-none
      transition-all duration-700
      group-hover:opacity-[0.38]
    "
  />
</div>

            {/* ====== テキスト ====== */}
            <div className="flex-1">
              <p className="text-[17px] font-light text-text-primary mb-1">
                {title}
              </p>
              <p className="text-[14px] leading-[1.85] text-text-secondary">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* =========================
          DETAIL BUTTON (PREMIUM)
      ========================== */}
      <div className="mt-[100px] flex justify-center kisui-fade-scope">
        <button
          className="
            relative
            px-8 py-3.5
            text-[13px] tracking-[0.18em] font-light
            text-text-primary/90

            rounded-full
            bg-white/[0.05]
            border border-white/25
            backdrop-blur-[2.6px]

            flex items-center gap-3
            transition-all duration-600
            hover:bg-white/[0.14]
            hover:border-white/40
            hover:scale-[1.022]
            hover:shadow-[0_0_28px_rgba(255,255,255,0.12)]
            group
            kisui-fade-item
          "
        >
          {/* 内側の光膜 */}
          <span
            className="
              absolute inset-0 rounded-full
              pointer-events-none
              opacity-0
              transition-all duration-700
              group-hover:opacity-40
              bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.42),rgba(255,255,255,0))]
            "
          />

          <span className="relative z-[2]">成分の詳細を見る</span>

          <span
            className="
              relative z-[2]
              text-text-primary/60
              transition-all duration-600
              group-hover:text-text-primary/90
              group-hover:translate-x-[3px]
            "
          >
            →
          </span>
        </button>
      </div>

      {/* =========================
          背景：水面
      ========================== */}
      <div
        className="
          absolute left-0 bottom-0 w-full h-[300px]
          opacity-[0.36] overflow-hidden pointer-events-none -z-10
        "
      >
        <img
          src={waterBg}
          className="w-full h-full object-cover brightness-[1.04] opacity-[0.30]"
          alt=""
        />
      </div>

      <div
        className="
          absolute inset-0
          bg-white/[0.03] backdrop-blur-[0.6px]
          -z-[5]
        "
      />
    </section>
  );
}