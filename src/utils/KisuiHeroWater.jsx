// src/utils/KisuiHeroWater.jsx
import { useEffect, useRef } from "react";

export default function KisuiHeroWater({ strength = 3 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let t = 0;

    function render() {
      const w = (canvas.width = canvas.offsetWidth);
      const h = (canvas.height = canvas.offsetHeight);

      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      /* ========================================================
          KISUI専用：水膜“半径”のダイナミック計算
          - 画面に依存しない
          - 中心・周辺が両方美しく光る
      ======================================================== */
      const baseRadius = Math.min(w, h) * 0.42 * strength;
      const breathing = Math.sin(t * 0.9) * (12 * strength);

      /* ========================================================
          【レイヤー1】深い白膜（基礎の光）
          - 中心付近を明るく
          - ゆらぎは弱め（奥の層）
      ======================================================== */
      const r1 = baseRadius + breathing;

      const grd1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, r1);
      grd1.addColorStop(0, "rgba(255,255,255,0.45)");
      grd1.addColorStop(0.55, "rgba(255,255,255,0.12)");
      grd1.addColorStop(1, "rgba(255,255,255,0)");

      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = grd1;
      ctx.fillRect(0, 0, w, h);

      /* ========================================================
          【レイヤー2】表層の水膜（高級ガラス膜）
          - 呼吸の中心
          - わずかに周波数をズラす（自然な揺れ）
      ======================================================== */
      const breathing2 = Math.sin(t * 1.15 + 0.8) * (18 * strength);
      const r2 = baseRadius * 0.82 + breathing2;

      const grd2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, r2);
      grd2.addColorStop(0, "rgba(255,255,255,0.38)");
      grd2.addColorStop(0.6, "rgba(255,255,255,0.08)");
      grd2.addColorStop(1, "rgba(255,255,255,0)");

      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = grd2;
      ctx.fillRect(0, 0, w, h);

      /* ========================================================
          【微ノイズ】水膜の“生っぽさ”を作る
          - なくても動くが、あると圧倒的に本物
          - 0.004〜0.008 程度のわずかな揺らぎ
      ======================================================== */
      t += 0.008 + Math.sin(t * 0.2) * 0.004;

      requestAnimationFrame(render);
    }

    render();
  }, [strength]);

  return (
    <canvas
      ref={canvasRef}
      className="
        absolute inset-0
        z-[0]
        opacity-[0.54]
        pointer-events-none select-none
      "
    />
  );
}