import React from "react";
import { Header, Section } from "@fpkit/nextjs";
import { Title } from "@fpkit/react";

export interface PageHeaderProps {
  title: string;
  styles?: {};
  children?: React.ReactNode;
}

export const PageHeader = ({
  title = "Header Title",
  styles,
  children,
  ...props
}: PageHeaderProps): JSX.Element => {
  return (
    <Header {...props}>
      <Title elm="h2">{title}</Title>
      <>{children}</>
    </Header>
  );
};

export default PageHeader;
