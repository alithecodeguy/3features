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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>
        <input
          type="checkbox"
          defaultChecked={true}
          onChange={() => setLang(lang == "en" ? "fa" : "en")}
        />
        {`${translate("changeLanguageButtonLabel") as string}`}
      </label>
      <div>{children}</div>
    </div>
  );
}

export default memo(PrimaryLayout);
