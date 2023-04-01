import { PageOpts, MdxFile } from "nextra";
import { Article, Tag, Title } from "@fpkit/react";
import Link from "next/link";
import React from "react";

export type listProps = Pick<PageOpts, "pageMap">;

export type PostsListProps = {
  showDescription?: boolean;
  elm?: "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "article" | "li";
  postList?: MdxFile[];
};

export const PostsList = ({
  showDescription = false,
  elm = "h2",
  as = "article",
  postList,
  ...props
}: PostsListProps) => {
  return (
    <>
      {postList?.map((item) => {
        const { route } = item;
        return (
          <Tag as={as} key={React.useId()} {...props}>
            {!!showDescription ? (
              <Article styles={{ paddingBlock: "2rem" }}>
                <Title elm={elm}>
                  <Link href={route}>{item.frontMatter?.title}</Link>
                </Title>
                <p>{item.frontMatter?.description}</p>
                <p>
                  <Link
                    href={route}
                    data-btn
                    data-variant="primary"
                    data-style="pill"
                  >
                    Continue Reading
                  </Link>
                </p>
              </Article>
            ) : (
              <Link href={route}>{item.frontMatter?.title}</Link>
            )}
          </Tag>
        );
        return null;
      })}
    </>
  );
};

export default PostsList;
PostsList.displayName = "PostsList";
