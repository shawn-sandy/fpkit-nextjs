import { Header, Title, Button, Text } from "@fpkit/react";
import React from "react";

/** set types  */
export interface HeaderProps {
  title: React.ReactNode;
  ctaLink: string;
  ctaLabel?: React.ReactNode;
  children?: React.ReactNode;
}

export type BaseProps = { children: React.ReactNode };
export const Base = ({ children }: BaseProps) => {
  return <Header>{children}</Header>;
};

export const ThemeHeader = ({ title, ctaLink, ctaLabel }: HeaderProps) => {
  if (!title) {
    throw new Error("ThemeHeader requires a title prop");
  }
  return (
    <Base>
      <Title elm="h2" styles={{ "--fs": "var(--h1)" }}>
        {title}
      </Title>
      <Text elm="p">
        <Button type="button" data-variant="primary" data-style="pill">
          {ctaLabel || "Get Started"}
        </Button>
      </Text>
    </Base>
  );
};

ThemeHeader.displayName = "Header";
export default ThemeHeader;
