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
      <Link href={route}>
        <Title elm="h2">{title}</Title>
      </Link>
      <p>{description}</p>
      <p>
        <Link href={route} data-btn data-variant="primary">
          {(linkText ??= "Continue Reading")}
        </Link>
      </p>
    </Article>
  );
};

export default ArticleList;
ArticleList.displayName = "ArticleList";
