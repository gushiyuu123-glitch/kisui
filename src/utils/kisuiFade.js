// src/utils/initKisuiFade.js
export function initKisuiFade() {
  const targets = document.querySelectorAll(".kisui-fade");
  if (!targets.length) return;

  /* ======================================================
      ① IntersectionObserver（単一インスタンス）
         多重登録防止・安定性の核
  ====================================================== */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        // ▼ すでに処理済みならスキップ（多重発火防止）
        if (!entry.isIntersecting || el.dataset.faded === "true") return;

        // ▼ 一度だけ実行するフラグ
        el.dataset.faded = "true";

        // ▼ フェードイン開始
        el.classList.remove("kisui-pre");
        el.classList.add("is-visible");

        // ▼ KISUI特有：水膜ON（Hero/Section同期用）
        el.classList.add("kisui-water-active");

        // ▼ IntersectionObserver から削除（メモリ節約）
        io.unobserve(el);
      });
    },
    {
      root: null,
      threshold: 0.22, // ← KISUI世界観：視認性優先
      rootMargin: "0px 0px -4% 0px", // ← SP時の“少し早く見える”問題を緩和
    }
  );

  /* ======================================================
      ② 初期セットアップ（すべてのターゲットに適用）
  ====================================================== */
  targets.forEach((el) => {
    // ▼ まだ動いていない状態（チラつき防止）
    el.classList.add("kisui-pre");

    // ▼ GPU最適化（賢いwill-change）
    // transform/opacity/filter すべて使う可能性がある要素のみ
    el.style.willChange = "opacity, transform";

    // ▼ 監視スタート
    io.observe(el);
  });

  /* ======================================================
      ③ React 用クリーンアップ（SPA移動でも安全）
  ====================================================== */
  return () => {
    io.disconnect();
    targets.forEach((el) => {
      el.style.willChange = "";
    });
  };
}