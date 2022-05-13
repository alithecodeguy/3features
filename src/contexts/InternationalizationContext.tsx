//library
import { createContext, useContext } from "react";

export type InternationalizationContextType = {
  lang: string;
  setLang: (lang: string) => void;
  translate: (term: string) => string;
};

const InternationalizationContext =
  createContext<InternationalizationContextType>({
    lang: "en",
    setLang: (lang: string) => {},
    translate: (term: string) => "",
  });

export function useInternationalizationContext() {
  return useContext(InternationalizationContext);
}

export default InternationalizationContext;
