//library
import { useContext, ReactNode, MouseEvent } from "react";

import RouterContext from "../../contexts/RouterContext";

type Props = {
  to: string;
  children: ReactNode;
};

export default function Link({ to, children }: Props) {
  const { push } = useContext(RouterContext);

  function handleClick(e: MouseEvent) {
    e.preventDefault();
    push(to);
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
