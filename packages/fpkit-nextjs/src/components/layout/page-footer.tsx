import { Footer, Section } from "./landmarks";

export type ThemeFooterProps = {
  children?: React.ReactNode;
  copyInfo?: string;
  orgName?: string;
};

export const PageFooter = ({
  orgName = "FPKit",
  copyInfo = "All right reserved",
  children,
}: ThemeFooterProps) => {
  return (
    <Footer>
      {!!children && <Section>{children}</Section>}
      <div>
        <p>
          {copyInfo} &copy; {orgName} {new Date().getFullYear()}
        </p>
      </div>
    </Footer>
  );
};

export default PageFooter;
PageFooter.displayName = "ThemeFooter";