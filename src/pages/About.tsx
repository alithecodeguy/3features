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

function About({}: Props) {
  const { translate } = useInternationalizationContext();
  return (
    <section className={style.main}>
      <span className={style.pageLabelContainer}>
        {`${translate("PageNameLabel")}`} : {`${translate("About")}`}
      </span>
      <span className={style.welcomeContainer}>{`${translate(
        "Welcome"
      )}`}</span>
      <Link to="/">home</Link>
    </section>
  );
}

export default memo(About);
