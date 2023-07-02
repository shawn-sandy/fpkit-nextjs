import React from "react";

import { PG } from "@fpkit/nextjs";

export type FooterProps = {
  children?: React.ReactNode;
  orgName?: string;
};

export const Footer = ({ children, orgName = "Org Name" }: FooterProps) => {
  return <PG.Footer orgName={orgName}>{children}</PG.Footer>;
};
export default Footer;
Footer.displayName = "Footer";
