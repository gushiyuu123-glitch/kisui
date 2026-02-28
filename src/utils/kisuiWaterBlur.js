// src/utils/kisuiWaterBlur.js
import gsap from "gsap";

/* ============================================================================
    KISUI WaterBlur Engine（覚醒ガラス膜・最終形）
    - 「曇りガラス → 目覚め → 水膜」へ変換する3段階式
    - 裕人ルール：blur 0.0〜0.3pxに完全最適化
    - Safari破綻ゼロ / React競合ゼロ
============================================================================ */
export function initWaterBlur() {
  const bg = document.querySelector(".kisui-water-bg");
  if (!bg) return;

  // GPU最適化
  bg.style.willChange = "opacity, filter, transform";

  /* ============================================================
       Step 0：初期状態（深い曇り膜）
  ============================================================ */
  gsap.set(bg, {
    opacity: 0.07,
    filter: "blur(14px) brightness(0.92)",
    scale: 1.028, // ← ガラスの“厚み”
  });

  /* ============================================================
       Step 1：覚醒（ガラスが目を覚ます）
       - blurを一気に溶かす
       - brightnessをゆるく上げる（目が開く演出）
  ============================================================ */
  gsap.to(bg, {
    opacity: 0.16,
    filter: "blur(3px) brightness(1)",
    scale: 1.012, // ← 厚みが収束していく
    duration: 1.8,
    delay: 0.25,
    ease: "power2.out",
  });

  /* ============================================================
       Step 2：最終膜（KISUIの透明膜へ変換）
       - blur 0.28px（裕人ルール安全圏）
       - 透明水膜 × 光膜の静かな状態に到達
  ============================================================ */
  gsap.to(bg, {
    opacity: 0.26,
    filter: "blur(0.28px) brightness(1.03)",
    scale: 1.000, // ← 厚みが完全に落ち着く
    duration: 2.4,
    delay: 1.35,
    ease: "sine.inOut",
  });

  /* ============================================================
       Step 3（Optional）：呼吸（ふわっと光が揺らぐ）
       ※ デフォルトOFF。要望あればONバージョン渡す。
  ============================================================ */
  // gsap.to(bg, {
  //   opacity: 0.28,
  //   duration: 7.5,
  //   repeat: -1,
  //   yoyo: true,
  //   ease: "sine.inOut",
  // });
}