//library
import { ReactNode } from "react";

//hook
import { useInternationalizationContext } from "../contexts/InternationalizationContext";

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
      <div className={style.card}>{children}</div>
    </main>
  );
}

export default PrimaryLayout;
