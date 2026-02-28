// src/components/WaterAura.jsx
import React from "react";
import waterBg from "../assets/kisui-water-wide.png"; // ← 大判推奨

export default function WaterAura({
  children,
  opacity = 0.32,       // 水面の強さ（調整可）
  blur = 8,             // グラス膜
  veilFrom = "white/60",
  veilVia = "white/32",
  veilTo = "white/8",
  className = "",
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* ======== 水面レイヤー ======== */}
      <div className="absolute inset-0 -z-20">
        <img
          src={waterBg}
          className="w-full h-full object-cover"
          style={{ opacity }}
          alt=""
        />
      </div>

      {/* ======== グラス膜（曇り） ======== */}
      <div
        className="absolute inset-0 -z-10 backdrop-blur-xl"
        style={{ backdropFilter: `blur(${blur}px)` }}
      />

      {/* ======== 光膜（上からの白いベール） ======== */}
      <div
        className={`
          absolute inset-0 -z-5
          bg-gradient-to-b
          from-${veilFrom} via-${veilVia} to-${veilTo}
        `}
      />

      {/* ======== 中身（任意） ======== */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}