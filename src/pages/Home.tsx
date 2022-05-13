//library
import { memo } from "react";

//component
import Link from "../components/router/Link";

//hook
import { useInternationalizationContext } from "../contexts/InternationalizationContext";

type Props = {};

function Home({}: Props) {
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
        {`${translate("PageNameLabel")}`} : {`${translate("Home")}`}
      </span>
      <span style={{ fontSize: 32 }}>{`${translate("Welcome")}`}</span>
      <Link to="/about">about</Link>
    </div>
  );
}

export default memo(Home);
