/**
 * create a componud page layout
 */
import React from "react";
import { Title } from "@fpkit/react";
import { Header } from "./landmarks";

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

const PageHeader = ({
  title = "Header Title",
  styles,
  children,
  ...props
}: Partial<PageProps>): JSX.Element => {
  return (
    <Header {...props}>
      <Title elm="h2">{title}</Title>
      <>{children}</>
    </Header>
  );
};

PG.Header = PageHeader;

export default PG;
