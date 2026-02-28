// src/AppPC.jsx
import { useEffect } from "react";

// =============================
//  Sections
// =============================
import KisuiHero from "./components/KisuiHero";
import Philosophy from "./components/Philosophy";
import TrustBlock from "./components/TrustBlock";
import ProductSection from "./components/ProductSection";
import Ingredients from "./components/Ingredients";
import Reviews from "./components/Reviews";
import BridgeSection from "./components/BridgeSection";
import CTA from "./components/CTA";
import KisuiFAQ from "./components/KisuiFAQ.jsx";
import KisuiContact from "./components/KisuiContact.jsx";
import KisuiFooter from "./components/KisuiFooter.jsx";
import DropletMenu from "./components/DropletMenu.jsx";

// =============================
//  Motion System（KISUI 世界観）
// =============================
import { initKisuiFade } from "./utils/kisuiFade";
import { initWaterBlur } from "./utils/kisuiWaterBlur";
import { initWaterMotion } from "./utils/kisuiWaterMotion";
import { initKisuiRipple } from "./utils/kisuiRipple";

// =============================
//  Styles
// =============================
import "./styles/kisuiFade.css";
import "./styles/ripple.css";

export default function AppPC() {
  useEffect(() => {
    setTimeout(() => {
      initKisuiFade();
      initWaterBlur();
      initWaterMotion();
      initKisuiRipple();
    }, 0);
  }, []);

  return (
    <>
      {/* ================================================
          🌊 SVG Ripple Filter（全体で1回だけ）
      ================================================= */}
      <svg width="0" height="0">
        <filter id="kisui-ripple">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="3"
            seed="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" />
        </filter>
      </svg>

      <div className="w-full min-h-screen bg-bg relative overflow-hidden">
        <DropletMenu />

        <section id="kisui-hero">
          <KisuiHero />
        </section>

        <section id="kisui-philosophy">
          <Philosophy />
        </section>

        <section id="kisui-trust">
          <TrustBlock />
        </section>

        <section id="kisui-products">
          <ProductSection />
        </section>

        <section id="kisui-ingredients">
          <Ingredients />
        </section>

        <section id="kisui-reviews">
          <Reviews />
        </section>

        <section id="kisui-bridge">
          <BridgeSection />
        </section>

        <section id="kisui-purchase">
          <CTA />
        </section>

        <section id="kisui-faq">
          <KisuiFAQ />
        </section>

        <section id="kisui-contact">
          <KisuiContact />
        </section>

        <section id="kisui-footer">
          <KisuiFooter />
        </section>
      </div>
    </>
  );
}