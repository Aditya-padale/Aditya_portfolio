import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "aurora";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "aurora",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "aurora",
  storageKey = "portfolio-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark", "aurora");
    root.classList.add(theme);
    localStorage.setItem(storageKey, theme);
    // Set background for aurora theme
    if (theme === "aurora") {
      root.style.background = "linear-gradient(135deg, #F6E8FF 0%, #E0F7FA 100%)";
    } else {
      root.style.background = "";
    }
  }, [theme, storageKey]);

  const value = {
    theme,
    setTheme: (theme: Theme) => setTheme(theme),
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Cycle through aurora -> dark -> light -> aurora
  const nextTheme = theme === "aurora" ? "dark" : theme === "dark" ? "light" : "aurora";
  return (
    <button
      onClick={() => setTheme(nextTheme)}
      className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-[#F6E8FF] to-[#E0F7FA] text-[#1E293B] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-all duration-300 border border-[#E0F7FA]"
      aria-label={`Switch to ${nextTheme} mode`}
    >
      {theme === "aurora" ? (
        <i className="fas fa-magic"></i>
      ) : theme === "light" ? (
        <i className="fas fa-moon"></i>
      ) : (
        <i className="fas fa-sun"></i>
      )}
    </button>
  );
}
