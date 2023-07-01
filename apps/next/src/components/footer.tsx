import React from "react";

import { PG } from "@fpkit/nextjs";

export const Footer = () => {
  return (
    <PG.Footer orgName="Org Name">
      <p>
        Thank you for visiting our website! If you have any questions or
        comments, please don&apos;t hesitate to contact us.
      </p>
    </PG.Footer>
  );
};
export default Footer;
Footer.displayName = "Footer";
