// src/AppSP.jsx
import { useEffect } from "react";

// =============================
//  Sections（SP用）
// =============================
import KisuiHeroSP from "./components_sp/KisuiHeroSP";
import PhilosophySP from "./components_sp/PhilosophySP";
import TrustBlockSP from "./components_sp/TrustBlockSP";
import ProductSectionSP from "./components_sp/ProductSectionSP";
import IngredientsSP from "./components_sp/IngredientsSP";
import ReviewsSP from "./components_sp/ReviewsSP";
import BridgeSectionSP from "./components_sp/BridgeSectionSP";
import CTASP from "./components_sp/CTASP";
import KisuiFAQSP from "./components_sp/KisuiFAQSP";
import KisuiContactSP from "./components_sp/KisuiContactSP";
import KisuiFooterSP from "./components_sp/KisuiFooterSP";
import DropletMenuSP from "./components_sp/DropletMenuSP";

// =============================
//  Motion System（SP用）
// =============================
import { initKisuiFade } from "./utils/kisuiFade";

// =============================
//  ★ SP専用 Styles（PCとは完全分離）
// =============================
import "./styles_sp/kisuiFadeSP.css";
import "./styles_sp/kisuiWaterSP.css";
import "./styles_sp/kisuiRippleSP.css";
import "./styles_sp/kisuiLayoutSP.css";
// src/AppSP.jsx
export default function AppSP() {
  useEffect(() => {
    setTimeout(() => {
      initKisuiFade();
    }, 0);
  }, []);

  return (
    <>
      {/* ←←← ここに DropletMenuSP を出す（絶対に外） */}
      <DropletMenuSP />

      <div className="relative w-full min-h-screen bg-bg overflow-hidden">

        <section id="kisui-hero">
          <KisuiHeroSP />
        </section>

        <section id="kisui-philosophy">
          <PhilosophySP />
        </section>

        <section id="kisui-trust">
          <TrustBlockSP />
        </section>

        <section id="kisui-products">
          <ProductSectionSP />
        </section>

        <section id="kisui-ingredients">
          <IngredientsSP />
        </section>

        <section id="kisui-reviews">
          <ReviewsSP />
        </section>

        <section id="kisui-bridge">
          <BridgeSectionSP />
        </section>

        <section id="kisui-purchase">
          <CTASP />
        </section>

        <section id="kisui-faq">
          <KisuiFAQSP />
        </section>

        <section id="kisui-contact">
          <KisuiContactSP />
        </section>

        <section id="kisui-footer">
          <KisuiFooterSP />
        </section>

      </div>
    </>
  );
}