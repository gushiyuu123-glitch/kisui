import skinBefore from "../assets/kisui-before.png";
import skinAfter from "../assets/kisui-after.png";
import waterBg from "../assets/kisui-water-wide.png";

export default function TrustBlockSP() {
  return (
    <section
      className="
        relative w-full
        pt-[140px] pb-[160px]
        bg-kisui-tone/60
        backdrop-blur-[0.6px]
        overflow-hidden
        kisui-fade
      "
    >
      {/* ===== 光膜（SP最適解） ===== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/65 via-kisui-light/38 to-white/55
          opacity-[0.58]
          pointer-events-none
        "
      />

      {/* ===== 横方向の光（軽量版） ===== */}
      <div
        className="
          absolute top-[28%] left-0 w-full h-[120px]
          bg-white/25
          blur-[32px]
          opacity-[0.26]
          pointer-events-none
        "
      />

      <div className="max-w-[480px] mx-auto px-6 text-center relative z-10">

        {/* ============================= */}
        {/*            見出し             */}
        {/* ============================= */}
        <h2
          className="
            text-[14px]
            tracking-kisui-md
            text-text-primary/70
            mb-12
            kisui-fade-item
          "
        >
          選ばれる理由 第1位 — Why KISUI
        </h2>

        {/* ============================= */}
        {/*        Before / After         */}
        {/* ============================= */}
        <div
          className="
            relative mx-auto w-full
            p-6
            rounded-kisui-xl kisui-fade-item mb-16

            bg-white/18
            backdrop-blur-[1.4px]
            ring-1 ring-white/30
            shadow-[0_12px_36px_rgba(0,0,0,0.06)]
            [box-shadow:inset_0_0_16px_rgba(255,255,255,0.28)]
          "
        >
          {/* 上端光 */}
          <div
            className="
              absolute top-0 left-1/2 -translate-x-1/2
              w-[70%] h-[1px]
              bg-white/55 opacity-[0.85]
            "
          />

          {/* スリット */}
          <div
            className="
              absolute inset-0
              opacity-[0.28]
              pointer-events-none
              mask-image-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
              bg-gradient-to-b from-white/10 via-white/3 to-white/8
            "
          />

          {/* ゆらぎ */}
          <div
            className="
              absolute inset-0
              opacity-[0.15]
              mix-blend-soft-light
              [filter:url(#kisui-ripple)]
            "
          />

          {/* バッジ */}
          <div
            className="
              absolute -top-7 left-1/2 -translate-x-1/2
              px-4 py-1.5
              rounded-full
              text-[10px] tracking-kisui-xs
              text-text-primary/75 font-light
              bg-white/28 backdrop-blur-[1px]
              ring-1 ring-white/35
              [box-shadow:inset_0_0_10px_rgba(255,255,255,0.32)]
            "
          >
            肌が選ぶ理由
          </div>

          {/* 画像（SPは縦積み） */}
          <div className="flex flex-col items-center gap-10">

            <div className="text-center kisui-fade-item delay-[0.1s] scale-[1.02]">
              <img
                src={skinBefore}
                alt="before"
                className="
                  w-[88%] mx-auto
                  rounded-kisui-lg
                  shadow-[0_10px_22px_rgba(0,0,0,0.08)]
                  mb-3
                "
              />
              <p className="text-text-muted text-[12px] tracking-kisui-xs">
                Before
              </p>
            </div>

            <div className="text-[30px] text-text-primary/55 select-none">↓</div>

            <div className="text-center kisui-fade-item delay-[0.16s] scale-[1.03]">
              <img
                src={skinAfter}
                alt="after"
                className="
                  w-[88%] mx-auto
                  rounded-kisui-lg
                  shadow-[0_10px_26px_rgba(0,0,0,0.12)]
                  mb-3
                "
              />
              <p className="text-text-muted text-[12px] tracking-kisui-xs">
                After
              </p>
            </div>
          </div>

          {/* 説明 */}
          <p
            className="
              text-[13px]
              leading-[1.75]
              text-text-primary/75
              tracking-kisui-xs
              max-w-[320px]
              mx-auto
              mt-7
              kisui-fade-item delay-[0.22s]
            "
          >
            ベタつかず、長時間しっとり。<br></br>    
            ひと滴で、肌のうるおいが続く。
          </p>
        </div>

        {/* ============================= */}
        {/*            満足度             */}
        {/* ============================= */}
        <p
          className="
            text-[12px]
            tracking-kisui-sm
            text-text-primary/65
            mb-14
            kisui-fade-item
          "
        >
          ご使用者満足度 <span className="text-text-primary/80">92.4%</span>
        </p>

        {/* ============================= */}
        {/*         3つの理由（SP）        */}
        {/* ============================= */}
        <div
          className="
            grid grid-cols-1 gap-10
            mb-20 kisui-fade-item

            bg-white/12 backdrop-blur-[1px]
            ring-1 ring-white/18
            rounded-kisui-xl
            p-7
          "
        >
          <div className="px-2 kisui-fade-item delay-[0.08s]">
            <h3 className="text-[17px] tracking-kisui-sm text-text-primary/90 font-medium mb-2">
              成分の“透明性”
            </h3>
            <p className="text-[14px] leading-[1.85] text-text-secondary">
              肌に良い希少な水だけを選び、<br></br>    
              無駄を加えず、<br></br>  シンプルに仕上げました。
            </p>
          </div>

          <div className="px-2 kisui-fade-item delay-[0.16s]">
            <h3 className="text-[17px] tracking-kisui-sm text-text-primary/90 font-medium mb-2">
              肌なじみの良さ
            </h3>
            <p className="text-[14px] leading-[1.85] text-text-secondary">
              ひと滴がすっと浸透し、<br></br>  
              ベタつかず自然なうるおいへ。
            </p>
          </div>

          <div className="px-2 kisui-fade-item delay-[0.24s]">
            <h3 className="text-[17px] tracking-kisui-sm text-text-primary/90 font-medium mb-2">
              毎日つづけられる“軽さ”
            </h3>
            <p className="text-[14px] leading-[1.85] text-text-secondary">
              忙しい朝でもスッと馴染む、  <br></br>  
              ストレスフリーの処方です。
            </p>
          </div>
        </div>

        {/* ============================= */}
        {/*         お客様の声（SP）      */}
        {/* ============================= */}
        <div
          className="
            relative mx-auto w-full p-8
            rounded-kisui-xl kisui-fade-item

            bg-white/18
            backdrop-blur-[1.4px]
            ring-1 ring-white/30
            shadow-[0_12px_36px_rgba(0,0,0,0.05)]
            [box-shadow:inset_0_0_16px_rgba(255,255,255,0.28)]
          "
        >
          {/* 上端光 */}
          <div
            className="
              absolute top-0 left-1/2 -translate-x-1/2
              w-[70%] h-[1px]
              bg-white/55 opacity-[0.85]
            "
          />

          {/* スリット */}
          <div
            className="
              absolute inset-0 opacity-[0.28]
              mask-image-[linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]
              bg-gradient-to-b from-white/10 via-white/3 to-white/8
            "
          />

          {/* ゆらぎ */}
          <div
            className="
              absolute inset-0 opacity-[0.15]
              mix-blend-soft-light
              [filter:url(#kisui-ripple)]
            "
          />

          <p className="text-[12px] tracking-kisui-xs text-text-muted mb-3">
            20代後半 / オフィスワーカー
          </p>

          <p className="text-[15px] leading-[1.9] text-text-primary/85 font-light">
            「軽いのにちゃんとうるおう。  
            朝のスキンケアが気持ちよく始まります。」
          </p>
        </div>
      </div>

      {/* ========= 水面レイヤー（軽量） ========= */}
      <div
        className="
          kisui-water-bg
          absolute left-0 bottom-0 w-full
          h-[240px]
          overflow-hidden
          -z-10
          pointer-events-none
          opacity-[0.28]
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