const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".right-border-radius": {
      right: "50%",
      border: "2px solid #FFC100",
      borderRadius: "1%",
    },
    ".left-border-radius": {
        left: "50%",
        border: "2px solid #FFC100",
        borderRadius: "1%",
      },
  };

  addUtilities(newUtilities, {
    variants: [],
  });
});
