module.exports = {
  content: [
    "./src/**/*.{html,ts}", // already correct
    "./src/**/*.component.html", // ensure .component.html files are scanned
    "./src/**/*.component.ts"    // ensure standalone components are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula"],
  },
};
