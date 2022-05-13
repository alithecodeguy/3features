//library
import { createContext } from "react";

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

export default InternationalizationContext;
