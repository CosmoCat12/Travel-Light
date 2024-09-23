import useTheme from "../hooks/useTheme";
import dark from "../assets/1664849-200.png";
import light from "../assets/2853779-200.png";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={styles.button}
    >
      {theme === "light" ? (
        <img src={dark} alt="dark theme" style={styles.dark} />
      ) : (
        <img src={light} alt="light theme" style={styles.light} />
      )}
    </button>
  );
};

const styles = {
  button: {
    background: "transparent", // Прозрачный фон
    border: "none", // Без рамки
    cursor: "pointer", // Курсор-указатель
    padding: 0, // Без отступов
  },
  dark: {
    width: "60px", // Настройте размер иконки
    height: "60px",
  },
  light: {
    width: "60px", // Настройте размер иконки
    height: "60px",
  },
};

export default ThemeToggle;
