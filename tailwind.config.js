module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        btn: "var(--btn)",
        btnColor: "var(--btn-color)",
        softText: "var(--soft-text)",
        panelText: "var(--panel-text)",
        panelBorder: "var(--panel-border)",
        btn: "var(--btn)",
        color: "var(--color)",
        colorSecondary: "var(--color-secondary)",
        secondary: "var(--secondary)",
        secondaryBorder: "var(--secondary-border)",
      },
      screen: {
        sm: "640px", // Small devices (landscape phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (small laptops)
        xl: "1280px", // Extra large devices (desktops)
        "2xl": "1536px", // Larger desktops
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
};
