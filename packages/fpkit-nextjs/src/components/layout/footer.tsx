import { Footer, Section } from "./landmarks";

export type ThemeFooterProps = {
  children?: React.ReactNode;
};

export const ThemeFooter = ({ children }: ThemeFooterProps) => {
  return (
    <Footer>
      {!!children && <Section>{children}</Section>}
      <div>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </Footer>
  );
};

export default ThemeFooter;
ThemeFooter.displayName = "ThemeFooter";
