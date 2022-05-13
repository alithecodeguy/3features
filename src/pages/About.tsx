//library
import { useContext, useState } from "react";

//component
import Link from "../components/router/Link";

//context
import RouterContext from "../contexts/RouterContext";

//hook
import { useInternationalizationContext } from "../contexts/InternationalizationContext";

export default function About() {
  const routerContext = useContext(RouterContext);
  const { translate } = useInternationalizationContext();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <span style={{ fontSize: 14 }}>
        {`${translate("PageNameLabel")}`} : {`${translate("About")}`}
      </span>
      <span style={{ fontSize: 32 }}>{`${translate("Welcome")}`}</span>
      <Link to="/">home</Link>
    </div>
  );
}
