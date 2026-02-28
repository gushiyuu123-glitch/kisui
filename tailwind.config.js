/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    fontFamily: {
      sans: ["'Noto Sans JP'", "system-ui", "sans-serif"],
      serif: ["'Noto Serif JP'", "serif"],
      logo: ["'Cinzel'", "serif"],
    },

    extend: {
      /* ===============================
         🌊 COLOR TOKENS（KISUI PALETTE）
         - Aqua（青系：水）
         - Mint（薄緑：自然）
         - Veil（白膜）
         - Silver（広告系）
      =============================== */
      colors: {
        /* ------ 基礎背景 ------ */
        bg: {
          DEFAULT: "#f6f8fa",
          soft: "#f8fafc",
          deep: "#e4ecf2",
          veil: "rgba(255,255,255,0.38)",
        },

        /* ------ テキスト ------ */
        text: {
          primary: "#111",
          secondary: "rgba(0,0,0,0.65)",
          muted: "rgba(0,0,0,0.48)",
          faint: "rgba(0,0,0,0.28)",
          white: "rgba(255,255,255,0.92)",
        },

        /* ------------------------------------
           🌊 Water / Aqua（綺水の青）
        ------------------------------------ */
        aqua: {
          50: "#F5FBFF",
          100: "#E4F1F8",   // 明るい水色（ライト膜）
          200: "#C7DCE8",
          300: "#AFC7D8",
          400: "#8EB2CC",
        },

        /* ------------------------------------
           🌿 Mint / Herb（薄緑：自然・植物）
        ------------------------------------ */
        mint: {
          50: "#F4FFF9",
          100: "#E2F8ED",
          200: "#C9EFDF",
          300: "#A8E5CD",
          400: "#7CD9B7",
        },

        /* ------------------------------------
           Veil（白膜 × 上品な光）
        ------------------------------------ */
        veil: {
          soft: "rgba(255,255,255,0.32)",
          line: "rgba(255,255,255,0.12)",
          haze: "rgba(255,255,255,0.06)",
        },

        /* ------------------------------------
           Silver（高級感 × 美容広告）
        ------------------------------------ */
        silver: {
          soft: "#e8edf1",
          line: "#ccd4da",
        },

        /* ------------------------------------
           Line（UI構造ライン）
        ------------------------------------ */
        line: {
          soft: "rgba(17,17,17,0.09)",
          faint: "rgba(17,17,17,0.05)",
          whiteSoft: "rgba(255,255,255,0.14)",
        },

        /* ------------------------------------
           KISUIトーン（背景用）
        ------------------------------------ */
        kisui: {
          light: "#E4F1F8",
          soft: "#C7DCE8",
          line: "#AFC7D8",
          tone: "#F3F9FC", // ← KISUIの基礎トーン
          mint: "#E6F4EC", // ← 淡ミント追加
        },
      },

      /* ===============================
         📏 LETTER SPACING（ブランド専用）
      =============================== */
      letterSpacing: {
        "kisui-xs": "0.08em",
        "kisui-sm": "0.12em",
        "kisui-md": "0.18em",
        "kisui-lg": "0.24em",
        "kisui-xl": "0.30em",
      },

      /* ===============================
         💎 SHADOW / BLUR（白膜・光膜）
      =============================== */
      boxShadow: {
        "kisui-card": "0 18px 40px rgba(15,23,42,0.08)",
        "kisui-soft": "0 10px 30px rgba(148,163,184,0.32)",
        "kisui-glow": "0 0 32px rgba(255,255,255,0.28)", // ← 水膜Glow
        "kisui-inset": "inset 0 0 12px rgba(255,255,255,0.22)",
      },

      /* blur クラッシュ防止：名前変更 */
      blur: {
        "kisui-xxs": "0.18px",
        "kisui-xs": "0.3px",
        "kisui-sm": "0.6px",
        "kisui-md": "1.2px",
      },

      /* ===============================
         🟦 RADIUS / SPACING
      =============================== */
      borderRadius: {
        "kisui-sm": "10px",
        "kisui-md": "16px",
        "kisui-lg": "22px",
        "kisui-xl": "28px",
        "kisui-2xl": "38px",
      },

      spacing: {
        13: "3.25rem",
        18: "4.5rem",
        22: "5.5rem",
        28: "7rem",
      },

      /* ===============================
         📐 MAX WIDTH（読みやすさ最適化）
      =============================== */
      maxWidth: {
        "kisui-body": "760px",
        "kisui-wide": "1080px",
        "kisui-max": "1280px",
      },

      /* ===============================
         ⚡ TRANSITION（静か × 高級感）
      =============================== */
      transitionDuration: {
        kisui: "650ms",
        soft: "900ms",
      },

      /* ===============================
         BACKDROP（高級系の膜感）
      =============================== */
      backdropBlur: {
        kisui: "1.2px",
        strong: "2.4px",
      },
    },
  },

  plugins: [],
};