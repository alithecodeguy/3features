//library
import { createContext, useContext } from "react";

export type ThemeContextType = {
  isDarkModeActive: boolean;
  setIsDarkModeActive: (status: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkModeActive: false,
  setIsDarkModeActive: (status: boolean) => {},
});

export function useThemeContext() {
  return useContext(ThemeContext);
}

export default ThemeContext;
