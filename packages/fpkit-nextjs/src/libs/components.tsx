import Tag from "@fpkit/react";

type ComponentTypes = {
  [key: string]: any;
  children: React.ReactNode | string;
};

export const MDXComponents = {
  h1: ({ children }: ComponentTypes) => <h1 data-style>{children}</h1>,
  p: ({ children }: ComponentTypes) => <p data-style>{children}</p>,
  table: ({ children }: ComponentTypes) => (
    <div data-fp-scroll>
      <table>{children}</table>
    </div>
  ),
};
