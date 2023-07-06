import { PageOpts, MdxFile } from "nextra";
import { Article, Tag, Title, Link } from "@fpkit/react";
import React from "react";

export type listProps = Pick<PageOpts, "pageMap">;

export type PostsListProps = {
  showDescription?: boolean;
  elm?: "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "article" | "li";
  postList?: MdxFile[];
};

/*
 * PostsList component
 *
 * Renders a list of posts.
 *
 * @param {PostsListProps} props - The props for the PostsList component.
 * @param {boolean} [props.showDescription=false] - Show post description.
 * @param {("h2" | "h3" | "h4" | "h5" | "h6")} [props.elm="h2"] - Heading element.
 * @param {("article" | "li")} [props.as="article"] - Wrapper element.
 * @param {MdxFile[]} [props.postList] - List of posts.
 *
 * @returns {JSX.Element} - The PostsList component.
 */
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
              <Article styles={{ paddingBlock: "1rem" }}>
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
                <hr />
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
