//library
import { ReactNode } from "react";

//hook
import { useInternationalizationContext } from "../contexts/InternationalizationContext";
import { useThemeContext } from "../contexts/ThemeContext";

//icons
import Sun from "../components/icons/Sun";
import Moon from "../components/icons/Moon";

//style
import style from "./PrimaryLayout.module.css";

type Props = {
  children: ReactNode;
};

const langsList = [
  {
    label: "فارسی",
    value: "fa",
  },
  {
    label: "English",
    value: "en",
  },
];

function PrimaryLayout({ children }: Props) {
  const { lang, setLang } = useInternationalizationContext();
  const { isDarkModeActive, setIsDarkModeActive } = useThemeContext();
  return (
    <main className={style.main}>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className={style.comboBox}
      >
        {langsList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        onClick={() => setIsDarkModeActive(!isDarkModeActive)}
        style={{
          borderRadius: "50%",
          padding: 4,
          cursor: "pointer",
          backgroundColor: isDarkModeActive ? "#000" : "rgb(111,190,248)",
        }}
      >
        {isDarkModeActive ? <Moon /> : <Sun />}
      </button>
      <div className={style.card}>{children}</div>
    </main>
  );
}

export default PrimaryLayout;
