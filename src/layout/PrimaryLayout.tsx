//library
import { memo, ReactNode } from "react";

//hook
import { useInternationalizationContext } from "../contexts/InternationalizationContext";

type Props = {
  children: ReactNode;
};

function PrimaryLayout({ children }: Props) {
  const { lang, setLang, translate } = useInternationalizationContext();
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ccc",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          marginTop: 80,
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
      <label>
        <input
          type="checkbox"
          defaultChecked={true}
          onChange={() => setLang(lang == "en" ? "fa" : "en")}
        />
        {`${translate("changeLanguageButtonLabel") as string}`}
      </label>
    </main>
  );
}

export default memo(PrimaryLayout);
