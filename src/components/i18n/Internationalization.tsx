//library
import { useState, useEffect, ReactNode } from "react";

//context
import InternationalizationContext from "../../contexts/InternationalizationContext";

//type
import { InternationalizationContextType } from "../../contexts/InternationalizationContext";

type Props = {
  children: ReactNode;
};

type ContentType = {
  [key: string]: string;
};

export default function Internationalization({ children }: Props) {
  const [lang, setLang] = useState<string>("en");
  const [content, setContent] = useState<ContentType>({});
  useEffect(() => {
    fetch(`./translate/${lang}.json`)
      .then((res) => res.json())
      .then((data: ContentType) => setContent(data))
      .catch((e) => console.log(e));
  }, [lang]);

  const translate = (term: string): string => {
    const result: string | undefined = Object.keys(content).find(
      (item: string) => item == term
    );
    if (result) {
      return content[result] as string;
    } else {
      return "";
    }
  };

  return (
    <InternationalizationContext.Provider
      value={{ lang, setLang, translate } as InternationalizationContextType}
    >
      {children}
    </InternationalizationContext.Provider>
  );
}
