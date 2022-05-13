//library
import { memo, ReactNode } from "react";

//hook
import { useInternationalizationContext } from "../contexts/InternationalizationContext";

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
  const { lang, setLang, translate } = useInternationalizationContext();
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 80,
        gap: 20,
        backgroundColor: "#ccc",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        style={{ width: 100, height: 30 }}
      >
        {langsList.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <div
        style={{
          width: "100vw",
          height: 100,
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          gap: 10,
        }}
      >
        {children}
      </div>
    </main>
  );
}

export default memo(PrimaryLayout);
