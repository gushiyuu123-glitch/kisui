import skinBefore from "../assets/kisui-before.png";
import skinAfter from "../assets/kisui-after.png";
import waterBg from "../assets/kisui-water-wide.png";

export default function TrustBlock() {
  return (
    <section
      className="
        relative w-full
        pt-[200px] pb-[200px]
        bg-kisui-tone/55
        backdrop-blur-[1px]
        overflow-hidden
        kisui-fade
      "
    >

      {/* ===== 光膜レイヤー（調整済） ===== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/65 via-kisui-light/38 to-white/50
          opacity-[0.60]
          pointer-events-none
        "
      />

      {/* ===== 横方向の光（軽量化） ===== */}
      <div
        className="
          absolute top-[34%] left-0 w-full h-[150px]
          bg-white/30
          blur-[42px]
          opacity-[0.28]
          pointer-events-none
        "
      />

      <div className="max-w-kisui-wide mx-auto px-6 text-center relative z-10">

        {/* ============================= */}
        {/*            見出し             */}
        {/* ============================= */}
        <h2
          className="
            text-[15px]
            tracking-kisui-md
            text-text-primary/70
            mb-20
            kisui-fade-item
          "
        >
          選ばれる理由 第1位 — Why KISUI
        </h2>

        {/* ============================= */}
        {/*     Before / After ガラス     */}
        {/* ============================= */}
        <div
          className="
            relative mx-auto max-w-[760px] p-12
            rounded-kisui-xl kisui-fade-item mb-28

            /* ---- 薄ガラス（最適化） ---- */
            bg-white/18
            backdrop-blur-[2px]
            ring-1 ring-white/35
            shadow-[0_16px_48px_rgba(0,0,0,0.06)]
            [box-shadow:inset_0_0_20px_rgba(255,255,255,0.32)]
          "
        >

          {/* ▼ 上端の光 */}
          <div
            className="
              absolute top-0 left-1/2 -translate-x-1/2
              w-[68%] h-[1px]
              bg-white/50 opacity-[0.85]
            "
          />

          {/* ▼ ガラス縦スリット */}
          <div
            className="
              absolute inset-0
              opacity-[0.30]
              pointer-events-none
              mask-image-[linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]
              bg-gradient-to-b from-white/10 via-white/3 to-white/8
            "
          />

          {/* ▼ ゆらぎ（Ripple） */}
          <div
            className="
              absolute inset-0
              opacity-[0.18]
              pointer-events-none
              mix-blend-soft-light
              [filter:url(#kisui-ripple)]
            "
          />

          {/* 人気バッジ */}
          <div
            className="
              absolute -top-8 left-1/2 -translate-x-1/2
              px-5 py-1.5
              rounded-full
              text-[11px] tracking-kisui-xs
              text-text-primary/75 font-light
              bg-white/28 backdrop-blur-[1px]
              ring-1 ring-white/35
              [box-shadow:inset_0_0_12px_rgba(255,255,255,0.32)]
            "
          >
            肌が選ぶ理由
          </div>

          {/* Before / After Wrapper */}
          <div className="relative flex items-center justify-center gap-[110px]">

            {/* Before */}
            <div className="text-center kisui-fade-item delay-[0.08s] scale-[1.03]">
              <img
                src={skinBefore}
                alt="before"
                className="
                  w-[320px]
                  rounded-kisui-lg
                  shadow-[0_12px_24px_rgba(0,0,0,0.08)]
                  mb-4
                "
              />
              <p className="text-text-muted text-[13px] tracking-kisui-xs">
                Before
              </p>
            </div>

            {/* 中央の矢印（位置最適化） */}
            <div
              className="
                absolute left-1/2 -translate-x-1/2
                top-1/2 -translate-y-[52%]
                text-[34px]
                text-text-primary/60
                tracking-[0.1em]
                select-none pointer-events-none
                kisui-fade-item
              "
            >
              →
            </div>

            {/* After */}
            <div className="text-center kisui-fade-item delay-[0.14s] scale-[1.04]">
              <img
                src={skinAfter}
                alt="after"
                className="
                  w-[320px]
                  rounded-kisui-lg
                  shadow-[0_12px_28px_rgba(0,0,0,0.12)]
                  mb-4
                "
              />
              <p className="text-text-muted text-[13px] tracking-kisui-xs">
                After
              </p>
            </div>

          </div>

          {/* 効果説明 */}
          <p
            className="
              text-[14px]
              leading-[1.8]
              text-text-primary/75
              tracking-kisui-xs
              max-w-[360px]
              mx-auto
              mt-8
              kisui-fade-item delay-[0.22s]
            "
          >
            ベタつかず、長時間しっとり。 <br />
            ひと滴で、肌のうるおいが続く。
          </p>
        </div>

        {/* ============================= */}
        {/*             満足度            */}
        {/* ============================= */}
        <p
          className="
            text-[13px]
            tracking-kisui-sm
            text-text-primary/65
            mb-16
            kisui-fade-item
          "
        >
          ご使用者満足度 <span className="text-text-primary/80">92.4%</span>
        </p>

        {/* ============================= */}
        {/*        ３つの理由（薄ガラス） */}
        {/* ============================= */}
        <div
          className="
            relative grid grid-cols-1 md:grid-cols-3 gap-14
            mb-28 kisui-fade-item

            bg-white/10 backdrop-blur-[1px]
            ring-1 ring-white/18
            rounded-kisui-xl
            p-8
          "
        >
          <div className="hidden md:block absolute left-1/3 top-0 h-full w-[1px] bg-line-faint" />
          <div className="hidden md:block absolute left-2/3 top-0 h-full w-[1px] bg-line-faint" />

          <div className="px-4 kisui-fade-item delay-[0.08s]">
            <h3 className="text-[18px] tracking-kisui-sm text-text-primary/90 font-medium mb-3">
              成分の“透明性”
            </h3>
            <p className="text-[15px] leading-[1.9] text-text-secondary">
              肌に良い希少な水だけを選び、<br></br>
              無駄を加えず、<br></br>シンプルに仕上げました。
            </p>
          </div>

          <div className="px-4 kisui-fade-item delay-[0.16s]">
            <h3 className="text-[18px] tracking-kisui-sm text-text-primary/90 font-medium mb-3">
              肌なじみの良さ
            </h3>
            <p className="text-[15px] leading-[1.9] text-text-secondary">
              ひと滴がすっと浸透し、<br></br>
              ベタつかず自然なうるおいへ。
            </p>
          </div>

          <div className="px-4 kisui-fade-item delay-[0.24s]">
            <h3 className="text-[18px] tracking-kisui-sm text-text-primary/90 font-medium mb-3">
              毎日つづけられる“軽さ”
            </h3>
            <p className="text-[15px] leading-[1.9] text-text-secondary">
              忙しい朝でもスッと馴染む、<br></br>
              ストレスフリーの処方です。
            </p>
          </div>
        </div>

        {/* ============================= */}
        {/*       お客様の声（薄ガラス） */}
        {/* ============================= */}
        <div
          className="
            relative mx-auto max-w-[620px] p-12
            rounded-kisui-xl kisui-fade-item

            bg-white/18
            backdrop-blur-[2px]
            ring-1 ring-white/35
            shadow-[0_16px_48px_rgba(0,0,0,0.05)]
            [box-shadow:inset_0_0_20px_rgba(255,255,255,0.32)]
          "
        >
          {/* 上端光 */}
          <div
            className="
              absolute top-0 left-1/2 -translate-x-1/2
              w-[68%] h-[1px]
              bg-white/55 opacity-[0.85]
            "
          />

          {/* スリット */}
          <div
            className="
              absolute inset-0 opacity-[0.30]
              mask-image-[linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]
              bg-gradient-to-b from-white/10 via-white/3 to-white/8
            "
          />

          {/* Ripple */}
          <div
            className="
              absolute inset-0 opacity-[0.18]
              mix-blend-soft-light
              [filter:url(#kisui-ripple)]
            "
          />

          <p className="text-[14px] tracking-kisui-xs text-text-muted mb-4">
            20代後半 / オフィスワーカー
          </p>

          <p className="text-[17px] leading-[2] text-text-primary/85 font-light">
            「軽いのにちゃんとうるおう。
            朝のスキンケアが気持ちよく始まります。
            無香料で職場でも使いやすいのが嬉しいです。」
          </p>
        </div>
      </div>

      {/* ========= 水面レイヤー ========= */}
      <div
        className="
          kisui-water-bg
          absolute left-0 bottom-0 w-full
          h-[320px]
          overflow-hidden
          -z-10
          pointer-events-none
          opacity-[0.30]
        "
      >
        <img
          src={waterBg}
          alt=""
          className="
            w-full h-full object-cover
            brightness-[1.06] contrast-[1.04]
            opacity-[0.36]
          "
        />
      </div>
    </section>
  );
}