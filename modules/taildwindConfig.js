tailwind.config = {
  theme: {
    extend: {
      colors: {
        bm: {
          primary: "#16376d",
          light: "#255096",
          dark: "#0d2347",
          accent: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Chakra Petch", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        'bounce-short': 'bounce-short 0.5s ease-in-out 1',
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        'bounce-short': {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20%)' }
                        }
      },
    },
  },
};
