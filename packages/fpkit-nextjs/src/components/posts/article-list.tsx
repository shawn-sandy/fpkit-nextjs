import { Tag, Article, Title, Img } from "@fpkit/react";
import Link from "next/link";
import React from "react";

export type ArticleListProps = {
  description: string;
  title: string;
  route: string;
  linkText?: string;
  img?: string;
};

export const ArticleList = ({
  title,
  description,
  linkText,
  route,
  img,
}: ArticleListProps) => {
  return (
    <Article>
      <Tag as="figure">
        <Img src={img ?? ""} alt={title} width={820} height={320} />
      </Tag>
      <Title elm="h2">
        <a href={route}>{title}</a>
      </Title>
      <p>{description}</p>
      <Tag>
        <a href={route} data-btn data-variant="primary">
          {(linkText ??= "Continue Reading")}
        </a>
      </Tag>
    </Article>
  );
};

export default ArticleList;
ArticleList.displayName = "ArticleList";
