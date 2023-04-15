import React from "react";
import { Tag } from "@fpkit/react";

/**
 * @typedef TocTypes
 * @property {Array<any>} items
 * @property {React.ReactNode | string} children
 * @property {string} className
 */
export type TocTypes = {
  items: Array<any>;
  children?: React.ReactNode | string;
  className?: string;
};

/**
 * @typedef TocItemTypes
 * @property {number} depth
 * @property {string} value
 * @property {string} id
 */
export type TocItemTypes = {
  depth: number;
  value: string;
  id: string;
};

export const Toc = ({ items, className }: TocTypes) => {
  return (
    <Tag as="ul" data-style>
      {!!items &&
        items.map((item: TocItemTypes) => <TocItems key={item.id} {...item} />)}
    </Tag>
  );
};

export const TocItems = ({ depth, value, id }: TocItemTypes) => {
  return (
    <li data-list="unstyled">
      <a href={`#${id}`}>{value}</a>
    </li>
  );
};

export default Toc;
Toc.displayName = "Toc";
