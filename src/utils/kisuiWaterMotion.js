// src/utils/kisuiWaterMotion.js
import gsap from "gsap";

export function initWaterMotion() {
  const bg = document.querySelector(".kisui-water-bg");
  const img = bg?.querySelector("img");
  const whiteLayer = bg?.querySelector(".kisui-water-white"); // ← 追加

  if (!bg || !img) return;

  // GPUレイヤー確保
  bg.style.willChange = "opacity, transform, filter";
  img.style.willChange = "transform, filter";
  if (whiteLayer) whiteLayer.style.willChange = "opacity, transform";

  /* ============================================================
      ① 白膜レイヤーの“呼吸”（世界観の主役）
         ※ 水と光の境界をつなぐレイヤー。破綻させない。
  ============================================================ */
  if (whiteLayer) {
    gsap.to(whiteLayer, {
      opacity: 0.16,              // ← 上品な最大光
      y: -4,                      // ← 少し上へ膨らむ
      duration: 7.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }

  /* ============================================================
      ② 水面（実画像）の“静かな重さ × ゆらぎ”
         ※ scale と y を極小化して“本物の水”を再現
  ============================================================ */
  gsap.to(img, {
    scale: 1.006,                 // ← 限界まで抑えたゆらぎ
    y: 5.5,                       // ← 微重力（上下の揺れ）
    duration: 9.8,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  /* ============================================================
      ③ 白膜 × 水面の“位相ズレ”で本物感を出す
         ※ 上（白膜）と下（水面）が同時に動かないように
  ============================================================ */
  gsap.to(bg, {
    y: 2.6,                       // ← 下層のわずかなゆらぎ
    duration: 9.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1.2,                   // ← ここが位相をつくる
  });

  /* ============================================================
      ④ 水面の“光の呼吸”（filterは yoyo させない）
  ============================================================ */
  gsap.to(img, {
    filter: "brightness(1.018)",  // ← 息を吸う光
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}