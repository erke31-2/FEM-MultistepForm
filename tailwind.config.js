/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobileBg": "url('/src/assets/images/bg-sidebar-mobile.svg')",
        "desktopBg": "url('/src/assets/images/bg-sidebar-desktop.svg')",
        "checkMark": "url('/src/assets/images/icon-checkmark.svg')",
        "thankYou": "url('/src/assets/images/icon-thank-you.svg')"
      },
      colors: {
        "marineBlue": "hsl(213, 96%, 18%)",
        "purplishBlue": "hsl(243, 100%, 62%)",
        "pastelBlue": "hsl(228, 100%, 84%)",
        "lightBlue": "hsl(206, 94%, 87%)",
        "strawberryRed": "hsl(354, 84%, 57%)",

        "coolGray": "hsl(231, 11%, 63%)",
        "lightGray": "hsl(229, 24%, 87%)",
        "magnolia": "hsl(217, 100%, 97%)",
        "alabaster": "hsl(231, 100%, 99%)",
        "White": "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        "Ubuntu":  ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
};


// - Marine blue: hsl(213, 96%, 18%)
// - Purplish blue: hsl(243, 100%, 62%)
// - Pastel blue: hsl(228, 100%, 84%)
// - Light blue: hsl(206, 94%, 87%)
// - Strawberry red: hsl(354, 84%, 57%)

// ### Neutral

// - Cool gray: hsl(231, 11%, 63%)
// - Light gray: hsl(229, 24%, 87%)
// - Magnolia: hsl(217, 100%, 97%)
// - Alabaster: hsl(231, 100%, 99%)
// - White: hsl(0, 0%, 100%)
