import { Tag } from "@fpkit/react";
import { LayoutProps } from "nextra-theme-blog";

export interface LandmarkProps {
  children: React.ReactNode;
  styles?: {};
}

export const Header = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Tag as="header" {...props}>
      <Tag as="section">{children}</Tag>
    </Tag>
  );
};

export const Main = ({
  children,
  styles = { minHeight: "40vh" },
  ...props
}: LandmarkProps) => {
  return (
    <Tag as="main" styles={styles} {...props}>
      {children}
    </Tag>
  );
};

export const Footer = ({ children, styles, ...props }: LandmarkProps) => {
  return (
    <Tag as="footer" {...props} styles={styles}>
      <Tag as="section">{children}</Tag>
    </Tag>
  );
};

export const Aside = ({ children, styles, ...props }: LandmarkProps) => {
  return (
    <Tag as="aside" styles={styles} {...props}>
      <Tag as="section">{children}</Tag>
    </Tag>
  );
};

export const Section = ({ children, styles, ...props }: LandmarkProps) => {
  return (
    <Tag as="section" styles={styles} {...props}>
      {children}
    </Tag>
  );
};

export const Article = ({ children, styles, ...props }: LandmarkProps) => {
  return (
    <Tag as="article" styles={styles} {...props}>
      {children}
    </Tag>
  );
};
