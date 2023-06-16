import { Tag, Article, Title, Img, Link } from "@fpkit/react";
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
      {!!img && (
        <Link href={route} rel="Cover image">
          <Tag as="figure">
            <Img src={img} alt={title} width={820} height={320} />
          </Tag>
        </Link>
      )}
      <Title elm="h2">
        <Link href={route}>{title}</Link>
      </Title>
      <p>{description}</p>
      <Tag>
        <Link href={route} data-btn="pill" data-variant="primary">
          {(linkText ??= "Continue Reading")}
        </Link>
      </Tag>
    </Article>
  );
};

export default ArticleList;
ArticleList.displayName = "ArticleList";
