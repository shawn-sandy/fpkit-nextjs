import { Footer } from "./landmarks";

export const ThemeFooter = () => {
  return (
    <Footer>
      <p>&copy; {new Date().getFullYear()}</p>
    </Footer>
  );
};

export default ThemeFooter;
ThemeFooter.displayName = "ThemeFooter";
