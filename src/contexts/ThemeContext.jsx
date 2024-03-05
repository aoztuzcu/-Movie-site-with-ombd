import { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [layout, setLayout] = useState("horizontal");
  const values = { theme, setTheme, layout, setLayout };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
