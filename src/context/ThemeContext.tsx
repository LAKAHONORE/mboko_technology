import { createContext, ReactNode, useEffect, useState } from "react";

type Theme = "dark" | "light"; 

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: (newTheme: string) => void;
}

interface ThemeProviderProps {
  children?: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" ? "dark" : "light";
  });

  const toggleTheme = (newTheme: string) => {
    setTheme(() => {
      const updatedTheme = newTheme === "light" ? "light" : "dark";
      localStorage.setItem("theme", updatedTheme);
      return updatedTheme;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
