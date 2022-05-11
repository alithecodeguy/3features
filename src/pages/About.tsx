import { useContext, useEffect, useState } from "react";
import Link from "../components/router/Link";
import RouterContext from "../contexts/RouterContext";

type Props = {};

export default function About({}: any) {
  const [animationStatus, setAnimationStatus] = useState(0);
  const routerContext = useContext(RouterContext);
  useEffect(() => {
    setAnimationStatus(1);
    setTimeout(() => setAnimationStatus(2), 1000);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "red",
      }}
    >
      <Link to="/">Home</Link>
    </div>
  );
}
