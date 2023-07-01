import React from "react";
import { Title } from "@fpkit/react";
import { Header, Main, Section } from "./landmarks";
import Nav from "../nav/nav";
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
export const HeaderSection = ({
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
export const MainSection = ({
  children,
  styles,
  ...props
}: Partial<PageProps>): JSX.Element => {
  return (
    <Main styles={styles} {...props}>
      <Section>{children}</Section>
    </Main>
  );
};

/**
 * Renders the footer section of the page
 * @param {ThemeFooterProps} props - The props object containing the copyInfo, orgName, styles, and children
 * @returns {JSX.Element} - The rendered footer section component
 */
export const FooterSection = ({
  copyInfo,
  orgName,
  styles,
  children,
  ...props
}: ThemeFooterProps): JSX.Element => {
  return (
    <PageFooter
      styles={styles}
      orgName={orgName}
      copyInfo={copyInfo}
      {...props}
    >
      {children}
    </PageFooter>
  );
};

export const NavSection = ({
  children,
  styles,
  ...props
}: Partial<PageProps>): JSX.Element => {
  return (
    <Nav styles={styles} {...props}>
      {children}
    </Nav>
  );
};

/**
 * Renders the header section of the page
 * @param {string} title - The title of the header
 * @param {object} styles - The styles to apply to the header
 * @param {React.ReactNode} children - The children to render inside the header
 * @param {PageProps} props - The page props object
 * @returns {JSX.Element} - The rendered header section component
 */
PG.Header = HeaderSection;
/**
 * Renders the main section of the page
 * @param {React.ReactNode} children - The children to render inside the main section
 * @param {object} styles - The styles to apply to the main section
 * @param {PageProps} props - The page props object
 * @returns {JSX.Element} - The rendered main section component
 */
PG.Main = MainSection;
/**
 * Renders the footer section of the page
 * @param {ThemeFooterProps} props - The props object containing the copyInfo, orgName, styles, and children
 * @example <Page.Footer copyInfo="© 2021" orgName="My Org" />
 * @returns {JSX.Element} - The rendered footer section component
 *
 */
PG.Footer = FooterSection;
/**
 * Renders the nav section of the page
 * @param {React.ReactNode} children - The children to render inside the nav section
 * @param {object} styles - The styles to apply to the nav section
 * @param {PageProps} props - The page props object
 * @returns {JSX.Element} - The rendered nav section component
 * @example
 * <Page.Nav>
 *  <Nav />
 * </Page.Nav>
 * @example
 * <Page.Nav styles={{ backgroundColor: "red" }}>
 * <Nav />
 * </Page.Nav>
 */
PG.Nav = NavSection;
export default PG;
