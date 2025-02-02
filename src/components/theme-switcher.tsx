"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeSwitcherProps {
  toggleKey?: string;
  showIndicator?: boolean;
}

function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { toggleKey = "t", showIndicator = true } = props;
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(
    function () {
      function handleKeyPress(event: KeyboardEvent): void {
        const target = event.target as HTMLElement;
        const isInput =
          target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement ||
          target.isContentEditable;

        if (!isInput && event.key.toLowerCase() === toggleKey.toLowerCase()) {
          setTheme(theme === "dark" ? "light" : "dark");
        }
      }

      window.addEventListener("keydown", handleKeyPress);

      return function cleanup() {
        window.removeEventListener("keydown", handleKeyPress);
      };
    },
    [theme, setTheme, toggleKey],
  );

  if (!mounted || !showIndicator) {
    return null;
  }

  return (
    <div className="fixed right-4 bottom-4 rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-900 shadow-lg shadow-gray-200 dark:shadow-none">
      <p className="font-mono text-sm">{theme}</p>
    </div>
  );
}

export default ThemeSwitcher;
