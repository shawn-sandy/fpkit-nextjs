import React from "react";
import { Title, Text, Tag } from "@fpkit/react";
import { Header, Section } from "./landmarks";
/** set types  */
export interface HeaderProps {
  title?: React.ReactNode;
  link?: string;
  linkLabel?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

export type BaseProps = { children: React.ReactNode };
export const HeaderBase = ({ children }: BaseProps) => {
  return <Header>{children}</Header>;
};

export function DefaultHeader({
  title,
  link,
  linkLabel,
  description,
}: HeaderProps) {
  return (
    <Section>
      <Title elm="h2">
        <>{title}</>
      </Title>
      {description && (
        <Text elm="p">
          <>{description}</>
        </Text>
      )}
      <Text elm="p">
        <Tag
          as="a"
          href={link}
          data-btn
          data-variant="primary"
          data-style="pill"
        >
          <>{linkLabel || "Get Started"}</>
        </Tag>
      </Text>
    </Section>
  );
}

export const PageHeader = ({
  title,
  link,
  linkLabel,
  description,
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
        <DefaultHeader
          title={title}
          link={link}
          linkLabel={linkLabel}
          description={description}
        />
      )}
    </HeaderBase>
  );
};
export default PageHeader;
PageHeader.displayName = "Header";
