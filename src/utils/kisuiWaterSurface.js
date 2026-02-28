// utils/kisuiWaterSurface.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ========================================================
   KISUI Water Surface Engine（完全静音・高級版）
   - 水面の“重さ”を再現
   - blur の破綻完全回避
   - React / GSAP の競合ゼロ
   - 多重発火ゼロ
======================================================== */
export function initWaterSurfaceMotion(targetSelector, opts = {}) {
  const {
    speed = 7.6,          // 呼吸速度
    intensity = 26,       // 揺れ幅（後で縮小）
    blur = 0.3,           // 自然な光膜ぼかし
  } = opts;

  let tween = null;
  let initialized = false;

  /* --------------------------------------------------------
      ELEMENTS
  -------------------------------------------------------- */
  const imgSel = `${targetSelector} img`;

  function startMotion() {
    const el = document.querySelector(imgSel);
    if (!el || tween) return;

    // GPU レイヤー最適化
    el.style.willChange = "transform";

    /* --------------------------------------------------------
         水面（実画像）の本物ゆらぎ
         - intensity を “本物の水幅” に変換
         - 開始位相をランダム化（自然な揺れ）
    -------------------------------------------------------- */
    const naturalY = intensity * 0.45; // ← 実在水幅に寄せる
    const delay = Math.random() * 0.6; // ← 位相ズレ

    tween = gsap.to(el, {
      y: naturalY,
      duration: speed,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay,

      // filter の破綻回避（数値だけ変化させる）
      onUpdate: () => {
        const t = gsap.getProperty(el, "y");
        const ratio = Math.abs(t / naturalY); // 呼吸比率
        gsap.set(el, {
          filter: `blur(${blur * ratio}px) brightness(${1 + ratio * 0.015})`,
        });
      },
    });
  }

  function stopMotion() {
    if (tween) {
      tween.kill();
      tween = null;
      gsap.set(imgSel, {
        y: 0,
        filter: "blur(0px) brightness(1)",
      });
    }
  }

  /* --------------------------------------------------------
      ScrollTrigger（境界でふわっと起動）
  -------------------------------------------------------- */
  function init() {
    if (initialized) return;
    initialized = true;

    ScrollTrigger.create({
      trigger: targetSelector,
      start: "top 85%",
      onEnter: () => {
        // 呼吸開始を“ふわっ”と
        gsap.delayedCall(0.06, startMotion);
      },
      onLeaveBack: stopMotion,
    });
  }

  init();

  // React クリーンアップ
  return () => {
    stopMotion();
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}