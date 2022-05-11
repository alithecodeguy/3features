//library
import { createContext } from "react";

const RouterContext = createContext({
  location: "",
  push: (to: string) => {},
});

export default RouterContext;
