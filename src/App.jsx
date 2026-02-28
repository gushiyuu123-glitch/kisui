// src/App.jsx
import { useState, useEffect } from "react";

// =============================
//  PC/SP 判定フック（メディアクエリ方式）
// =============================
function useKisuiView() {
  const [isPC, setIsPC] = useState(() =>
    window.matchMedia("(min-width: 1280px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");

    const handle = (e) => {
      setIsPC(e.matches);
    };

    mq.addEventListener("change", handle);

    return () => mq.removeEventListener("change", handle);
  }, []);

  return isPC;
}

// =============================
//  DOM（PC / SP）
// =============================
import AppPC from "./AppPC";
import AppSP from "./AppSP";

export default function App() {
  const isPC = useKisuiView();

  return <>{isPC ? <AppPC /> : <AppSP />}</>;
}