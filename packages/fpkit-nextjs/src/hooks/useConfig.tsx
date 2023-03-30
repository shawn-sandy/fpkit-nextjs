import React from "react";

export type themeConfig = {
  [key: string]: any;
};

export type ThemeOptions = {
  config: themeConfig | {};
  children: React.ReactNode;
};

const components = {
  h1: (children: React.ReactNode) => (
    <h1
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        backgroundImage: "linear-gradient(90deg,#7928CA,#FF0080)",
      }}
    >
      {children}
    </h1>
  ),
};

export const useConfig = ({ config }: ThemeOptions) => {
  const ThemeConfig = { components };

  return ThemeConfig;
};
