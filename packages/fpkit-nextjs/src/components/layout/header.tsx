import React from "react";
import { Title, Text, Tag } from "@fpkit/react";
import { Header, Section } from "./landmarks";
/** set types  */
export interface HeaderProps {
  title?: React.ReactNode;
  ctaLink?: string;
  ctaLabel?: React.ReactNode;
  children?: React.ReactNode;
}

export type BaseProps = { children: React.ReactNode };
export const HeaderBase = ({ children }: BaseProps) => {
  return <Header>{children}</Header>;
};

export const ThemeHeader = ({
  title,
  ctaLink,
  ctaLabel,
  children,
}: HeaderProps) => {
  if (!title) {
    throw new Error("ThemeHeader requires a title prop");
  }
  return (
    <HeaderBase>
      {/* display the children if undefined else display the default header */}
      {children ? (
        children
      ) : (
        <DefaultHeader title={title} ctaLink={ctaLink} ctaLabel={ctaLabel} />
      )}
    </HeaderBase>
  );
};

ThemeHeader.displayName = "Header";
export default ThemeHeader;

function DefaultHeader({ title, ctaLink, ctaLabel }: HeaderProps) {
  return (
    <Section>
      <Title
        elm="h2"
        styles={{
          "--fs": "var(--h1)",
        }}
      >
        {title}
      </Title>
      <Text elm="p">
        <Tag
          as="a"
          href={ctaLink}
          data-btn
          data-variant="primary"
          data-style="pill"
        >
          {ctaLabel || "Get Started"}
        </Tag>
      </Text>
    </Section>
  );
}
