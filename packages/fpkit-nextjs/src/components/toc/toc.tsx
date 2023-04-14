import { Tag } from "@fpkit/react";

export type TocTypes = {
  children: React.ReactNode | string;
  className?: string;
};

export const Toc = ({ children, className }: TocTypes) => {
  return (
    <Tag as="li" data-style>
      {children ?? "No Table of Contents"}
    </Tag>
  );
};

export default Toc;
Toc.displayName = "Toc";
