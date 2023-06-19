import { Footer, Section } from "./landmarks";

export type ThemeFooterProps = {
  children?: React.ReactNode;
  copyInfo?: string;
  orgName?: string;
  styles?: {};
};

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
