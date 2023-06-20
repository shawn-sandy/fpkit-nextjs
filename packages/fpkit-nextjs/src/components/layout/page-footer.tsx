import React from "react";
import { Footer, Section } from "./landmarks";

/**
 * Props for the PageFooter component
 */
export type ThemeFooterProps = {
  children?: React.ReactNode;
  copyInfo?: string;
  orgName?: string;
  styles?: {};
};

/**
 * The PageFooter component
 * @param orgName The name of the organization
 * @param copyInfo The copy information to display
 * @param styles The styles to apply to the component
 * @param children The child components to render
 * @example <PageFooter copyInfo="All rights reserved" orgName="My Org" />
 * @example <PageFooter copyInfo="All rights reserved" orgName="My Org"><p>Thank you for visiting our website! If you have any questions or comments, please don't hesitate to contact us.</p></PageFooter>
 * @returns The rendered PageFooter component
 */
export const PageFooter = ({
  orgName = "FPKit",
  copyInfo = "All right reserved",
  styles,
  children,
  ...props
}: ThemeFooterProps) => {
  return (
    <Footer styles={styles} {...props}>
      {!!children && <Section>{children}</Section>}
      <p>
        {copyInfo} &copy; {orgName} {new Date().getFullYear()}
      </p>
    </Footer>
  );
};

export default PageFooter;
PageFooter.displayName = "ThemeFooter";
