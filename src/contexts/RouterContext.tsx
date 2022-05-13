//library
import { createContext } from "react";

type RouterContextType = {
  location: string;
  push: (lang: string) => void;
};

const RouterContext = createContext<RouterContextType>({
  location: "",
  push: (to: string) => {},
});

export default RouterContext;
