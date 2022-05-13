//library
import { useState, useEffect, ReactNode } from "react";

//context
import InternationalizationContext from "../../contexts/InternationalizationContext";

type Props = {
  children: ReactNode;
};

type ContentType = {
  [key: string]: any;
};

export default function Internationalization({ children }: Props) {
  const [lang, setLang] = useState<string>("en");
  const [content, setContent] = useState<ContentType>({});
  useEffect(() => {
    fetch(`./translate/${lang}.json`)
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, [lang]);

  const translate = (term: string): string => {
    const result = Object.keys(content).find((item: string) => item == term);
    if (result) {
      return content[result];
    } else {
      return "";
    }
  };

  return (
    <InternationalizationContext.Provider value={{ lang, setLang, translate }}>
      {children}
    </InternationalizationContext.Provider>
  );
}
