//library
import { memo } from "react";

//component
import Link from "../components/router/Link";

//hook
import { useInternationalizationContext } from "../contexts/InternationalizationContext";

//style
import style from "./common.module.css";

//types
type Props = {};

function Home({}: Props) {
  const { translate } = useInternationalizationContext();
  return (
    <section className={style.main}>
      <span className={style.pageLabelContainer}>
        {`${translate("PageNameLabel")}`} : {`${translate("Home")}`}
      </span>
      <span className={style.welcomeContainer}>{`${translate(
        "Welcome"
      )}`}</span>
      <Link to="/about">about</Link>
    </section>
  );
}

export default memo(Home);
