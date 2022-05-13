import { useState, useContext, memo } from "react";
import InternationalizationContext from "../contexts/InternationalizationContext";

// import translate from "../contexts/InternationalizationContext";

type Props = {
  children: JSX.Element;
};

function PrimaryLayout({ children }: Props) {
  const internationalizationContext = useContext(InternationalizationContext);
  // console.log("xxx");
  // console.log(internationalizationContext);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>
        <input
          type="checkbox"
          defaultChecked={true}
          onChange={() =>
            internationalizationContext.setLang(
              internationalizationContext.lang == "en" ? "fa" : "en"
            )
          }
        />
        {`${internationalizationContext.translate(
          "changeLanguageButtonLabel"
        )}`}
      </label>
      <div>{children}</div>
    </div>
  );
}

export default memo(PrimaryLayout);
