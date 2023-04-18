import { Tag, Article, Text } from "@fpkit/react";
import React from "react";
import Link from "next/link";

export type ArticleListProps = {
  title: string;
  description: string;
  route: string;
  linkText?: string;
};

export const ArticleList = ({
  title,
  description,
  linkText,
}: ArticleListProps) => {
  return (
    <Article>
      <h3>{title}</h3>
      <Text elm="p">{description}</Text>
      <Tag as="p">
        <a href="/" data-btn data-variant="primary">
          {(linkText ??= "Continue Reading")}
        </a>
      </Tag>
    </Article>
  );
};

export default ArticleList;
ArticleList.displayName = "ArticleList";
