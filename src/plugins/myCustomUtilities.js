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
    ".bg-clip-text": {
      "-webkit-background-clip": "text",
      "background-clip": "text",
    },
  };

  addUtilities(newUtilities, {
    variants: [],
  });
});
