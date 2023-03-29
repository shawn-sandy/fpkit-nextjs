import { PageOpts } from "nextra";
import { Tag, Title } from "@fpkit/react";
import Link from "next/link";
import React from "react";

export type listProps = Pick<PageOpts, "pageMap">;

export type PostsListProps = {
  showDescription?: boolean;
  elm?: "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "article" | "li";
  postList?: Array<PageOpts>;
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
        const { title, description } = item.frontMatter;
        return (
          <Tag as={as} key={React.useId()} {...props}>
            {!!showDescription ? (
              <>
                <Title elm={elm}>
                  <Link href={route}>{title}</Link>
                </Title>
                <p>{description}</p>
                <hr />
              </>
            ) : (
              <Link href={route}>{item.frontMatter.title}</Link>
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
