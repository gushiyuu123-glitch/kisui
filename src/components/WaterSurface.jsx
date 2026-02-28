// components/WaterSurface.jsx
import { useEffect } from "react";
import { initWaterSurfaceMotion } from "../utils/kisuiWaterSurface";
import waterBg from "../assets/kisui-water-wide.png";

export default function WaterSurface({
  id,
  position = "center",
  height = "380px",
  speed = 7,
  intensity = 26,
  blur = 0.3,
}) {
  useEffect(() => {
    initWaterSurfaceMotion(`#${id}`, { speed, intensity, blur });
  }, []);

  const positionStyle = {
    top: position === "top" ? 0 : "auto",
    bottom: position === "bottom" ? 0 : "auto",
    transform:
      position === "center" ? "translateY(-50%)" : "translateY(0)",
    top: position === "center" ? "50%" : undefined,
  };

  return (
    <div
      id={id}
      className="absolute left-0 w-full overflow-hidden -z-10 pointer-events-none"
      style={{ height, ...positionStyle }}
    >
      <img
        src={waterBg}
        className="w-full h-full object-cover opacity-[0.38] brightness-[1.06]"
        alt=""
      />
    </div>
  );
}