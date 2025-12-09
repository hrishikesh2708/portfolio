"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"           // use `.dark`
      defaultTheme="dark"       // default = auto
      enableSystem={false}         // respect OS setting
      storageKey="theme"          // saves preference in localStorage
      enableColorScheme={true}    // improves first-render behavior
    >
      {children}
    </NextThemesProvider>
  );
}