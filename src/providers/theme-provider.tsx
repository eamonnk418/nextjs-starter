"use client";

import { ThemeProvider as GardenThemeProvider } from "@zendeskgarden/react-theming";
import { useServerInsertedHTML } from "next/navigation";
import { ReactNode, useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [styledComponentStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentStyleSheet.getStyleElement();
    styledComponentStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return <>{children}</>;
  }

  return (
    <StyleSheetManager sheet={styledComponentStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GardenThemeProvider>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </GardenThemeProvider>
  );
};
