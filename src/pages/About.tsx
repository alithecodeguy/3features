import { useContext, useEffect, useState } from "react";
import Link from "../components/router/Link";
import RouterContext from "../contexts/RouterContext";
import InternationalizationContext from "../contexts/InternationalizationContext";

type Props = {};

export default function About({}: any) {
  const [animationStatus, setAnimationStatus] = useState(0);
  const routerContext = useContext(RouterContext);
  const internationalizationContext = useContext(InternationalizationContext);
  return (
    <div
      style={{
        backgroundColor: "red",
      }}
    >
      <div>{`${internationalizationContext.translate("About")}`}</div>
      <Link to="/">Home</Link>
    </div>
  );
}
