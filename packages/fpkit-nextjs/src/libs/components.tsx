type ComponentTypes = {
  [key: string]: any;
  children: React.ReactNode | string;
};

export const themeComponents = {
  h1: ({ children }: ComponentTypes) => (
    <h1
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        backgroundImage: "linear-gradient(90deg,#7928CA,#FF0080)",
      }}
    >
      {children}
    </h1>
  ),
  p: ({ children }: ComponentTypes) => <p>{children}</p>,
};
