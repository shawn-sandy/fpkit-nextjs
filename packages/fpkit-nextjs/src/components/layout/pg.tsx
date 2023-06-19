import React from "react";
import { Title } from "@fpkit/react";
import { Header, Main } from "./landmarks";
import { PageFooter, ThemeFooterProps } from "./page-footer";

export type PageProps = {
  children: React.ReactNode;
  styles?: {};
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
};

export const PG = ({ children }: Partial<PageProps>) => {
  return <>{children}</>;
};

/**
 * Renders the page header component
 * @param {string} title - The title of the header
 * @param {object} styles - The styles to apply to the header
 * @param {React.ReactNode} children - The children to render inside the header
 * @param {PageProps} props - The page props object
 * @returns {JSX.Element} - The rendered page header component
 */
const HeaderSection = ({
  title = "Header Title",
  styles,
  children,
  ...props
}: Partial<PageProps>): JSX.Element => {
  return (
    <Header styles={styles} {...props}>
      <Title elm="h2">{title}</Title>
      <>{children}</>
    </Header>
  );
};

/**
 * Renders the main section of the page
 * @param {React.ReactNode} children - The children to render inside the main section
 * @param {object} styles - The styles to apply to the main section
 * @param {PageProps} props - The page props object
 * @returns {JSX.Element} - The rendered main section component
 */
const MainSection = ({
  children,
  styles,
  ...props
}: Partial<PageProps>): JSX.Element => {
  return (
    <Main styles={styles} {...props}>
      {children}
    </Main>
  );
};

/**
 * Renders the footer section of the page
 * @param {ThemeFooterProps} props - The props object containing the copyInfo, orgName, styles, and children
 * @returns {JSX.Element} - The rendered footer section component
 */
const FooterSection = ({
  copyInfo,
  orgName,
  styles,
  children,
  ...props
}: ThemeFooterProps): JSX.Element => {
  return (
    <PageFooter styles={styles} {...props}>
      {children}
    </PageFooter>
  );
};

PG.Header = HeaderSection;
PG.Main = MainSection;
PG.Footer = FooterSection;
export default PG;
