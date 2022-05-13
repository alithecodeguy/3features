//library
import { useState, ReactNode, useEffect } from "react";

//context
import ThemeContext from "../../contexts/ThemeContext";

//type
import { ThemeContextType } from "../../contexts/ThemeContext";

type Props = {
  children: ReactNode;
};

export default function Theme({ children }: Props) {
  const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false);

  const setDarkTheme = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLightTheme = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  useEffect(() => {
    if (isDarkModeActive) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, [isDarkModeActive]);

  return (
    <ThemeContext.Provider
      value={{ isDarkModeActive, setIsDarkModeActive } as ThemeContextType}
    >
      {children}
    </ThemeContext.Provider>
  );
}
