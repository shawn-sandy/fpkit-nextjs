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
  dataStyles?: string;
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

export const Toc = ({ items, dataStyles }: TocTypes) => {
  return (
    <Tag as="ul" data-fp-list={`unstyled ${dataStyles}`}>
      {!!items &&
        items.map((item: TocItemTypes) => (
          <TocItems key={React.useId()} {...item} />
        ))}
    </Tag>
  );
};

export const TocItems = ({ depth, value, id }: TocItemTypes) => {
  return (
    <li>
      <a href={`#${id}`}>{value}</a>
    </li>
  );
};

export default Toc;
Toc.displayName = "Toc";
