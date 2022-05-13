import { memo } from "react";
import Link from "../components/router/Link";

type Props = {};

function Home({}: Props) {
  console.log("xxx");
  return (
    <div style={{ height: "20vh", width: "20vw", backgroundColor: "blue" }}>
      <Link to="/about">about</Link>
    </div>
  );
}

export default memo(Home);
