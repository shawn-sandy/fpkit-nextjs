import { Tag } from "@fpkit/react";

export type TocTypes = {
  children: React.ReactNode | string;
  className?: string;
};

export const Toc = ({ children, className }: TocTypes) => {
  return (
    <Tag as="div" className={`toc ${className}`} data-style>
      {children}
    </Tag>
  );
};

export default Toc;
