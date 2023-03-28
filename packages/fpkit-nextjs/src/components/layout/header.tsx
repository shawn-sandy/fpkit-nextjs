import React from "react";
import { Title, Text, Tag } from "@fpkit/react";
import { Header, Section } from "./landmarks";
/** set types  */
export interface HeaderProps {
  title?: React.ReactNode;
  link?: string;
  linkLabel?: React.ReactNode;
  children?: React.ReactNode;
}

export type BaseProps = { children: React.ReactNode };
export const HeaderBase = ({ children }: BaseProps) => {
  return <Header>{children}</Header>;
};

function DefaultHeader({ title, link, linkLabel }: HeaderProps) {
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
          href={link}
          data-btn
          data-variant="primary"
          data-style="pill"
        >
          {linkLabel || "Get Started"}
        </Tag>
      </Text>
    </Section>
  );
}

export const ThemeHeader = ({
  title,
  link,
  linkLabel,
  children,
}: HeaderProps) => {
  if (!title) {
    throw new Error("ThemeHeader requires a title prop");
  }
  return (
    <HeaderBase>
      {children ? (
        children
      ) : (
        <DefaultHeader title={title} link={link} linkLabel={linkLabel} />
      )}
    </HeaderBase>
  );
};
ThemeHeader.displayName = "Header";
export default ThemeHeader;
