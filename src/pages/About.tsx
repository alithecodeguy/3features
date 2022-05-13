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
        backgroundColor: "red",
      }}
    >
      <div>{`${translate("About")}`}</div>
      <Link to="/">Home</Link>
    </div>
  );
}
