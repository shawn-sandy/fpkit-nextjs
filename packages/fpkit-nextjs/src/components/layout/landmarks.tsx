import React from "react";
import { Tag } from "@fpkit/react";
import { LayoutProps } from "nextra-theme-blog";

/**
 * Props for the Landmark components
 */
export interface LandmarkProps {
  children: React.ReactNode;
  styles?: {};
}

/**
 * Header component
 * @param styles - styles for the header
 * @param children - children of the header
 * @param props - additional props for the header
 * @returns a header element with children wrapped in a section element
 */
export const Header = ({ styles, children, ...props }: LandmarkProps) => {
  return (
    <Tag as="header" styles={styles} {...props}>
      <Tag as="section">
        <>{children}</>
      </Tag>
    </Tag>
  );
};

/**
 * Main component
 * @param styles - styles for the main element
 * @param children - children of the main element
 * @param props - additional props for the main element
 * @returns a main element with children
 */
export const Main = ({
  children,
  styles = { minHeight: "40vh" },
  ...props
}: LandmarkProps) => {
  return (
    <Tag as="main" styles={styles} {...props}>
      <>{children}</>
    </Tag>
  );
};

/**
 * Footer component
 * @param styles - styles for the footer element
 * @param children - children of the footer element
 * @param props - additional props for the footer element
 * @returns a footer element with children wrapped in a section element
 */
export const Footer = ({ children, styles, ...props }: LandmarkProps) => {
  return (
    <Tag as="footer" {...props} styles={styles}>
      <Tag as="section">
        <>{children}</>
      </Tag>
    </Tag>
  );
};

/**
 * Aside component
 * @param styles - styles for the aside element
 * @param children - children of the aside element
 * @param props - additional props for the aside element
 * @returns an aside element with children wrapped in a section element
 */
export const Aside = ({ children, styles, ...props }: LandmarkProps) => {
  return (
    <Tag as="aside" styles={styles} {...props}>
      <>{children}</>
    </Tag>
  );
};

/**
 * Section component
 * @param styles - styles for the section element
 * @param children - children of the section element
 * @param props - additional props for the section element
 * @returns a section element with children
 */
export const Section = ({ children, styles, ...props }: LandmarkProps) => {
  return (
    <Tag as="section" styles={styles} {...props}>
      <>{children}</>
    </Tag>
  );
};

/**
 * Article component
 * @param styles - styles for the article element
 * @param children - children of the article element
 * @param props - additional props for the article element
 * @returns an article element with children
 */
export const Article = ({ children, styles, ...props }: LandmarkProps) => {
  return (
    <Tag as="article" styles={styles} {...props}>
      <>{children}</>
    </Tag>
  );
};
