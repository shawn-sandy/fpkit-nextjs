import { Tag, Article, Text, Title } from "@fpkit/react";
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
  route,
}: ArticleListProps) => {
  return (
    <Article>
      <Title elm="h2">
        <Link href={route}>{title}</Link>
      </Title>
      <p>{description}</p>
      <Tag>
        <Link href={route} data-btn data-variant="primary">
          {(linkText ??= "Continue Reading")}
        </Link>
      </Tag>
    </Article>
  );
};

export default ArticleList;
ArticleList.displayName = "ArticleList";
