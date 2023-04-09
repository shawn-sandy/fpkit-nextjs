import { FilterMdxPages } from './filter-mdx-pages';
import { describe, it, assert } from "vitest";
import FilterPageType from "./filter-mdx-pages";
import { MdxFile, PageMapItem } from "nextra";

describe("test _fpkit_nextjs", function () {
  it("test @fpkit/nextjs.FilterPageType", function (done) {
    const pages: MdxFile[] = [
      {
        // @ts-ignore
        kind: "Folder",
        name: "pages",
        path: "pages/",
        children: [
          {
            kind: "MdxPage",
            name: "index",
            path: "pages/index.mdx",
            frontMatter: {
              title: "Home",
              type: "page",
            },
          },
          {
            kind: "MdxPage",
            name: "about",
            path: "pages/about.mdx",
            frontMatter: {
              title: "About",
              type: "page",
            },
          },
          {
            kind: "Folder",
            name: "blog",
            path: "pages/blog/",
            children: [
              {
                kind: "MdxPage",
                name: "index",
                path: "pages/blog/index.mdx",
                frontMatter: {
                  title: "Blog",
                  type: "page",
                },
              },
              {
                kind: "MdxPage",
                name: "first-post",
                path: "pages/blog/first-post.mdx",
                frontMatter: {
                  title: "First Post",
                  type: "page",
                },
              },
              {
                kind: "MdxPage",
                name: "second-post",
                path: "pages/blog/second-post.mdx",
                frontMatter: {
                  title: "Second Post",
                  type: "page",
                },
              },
            ],
          },
          {
            kind: "MdxPage",
            name: "contact",
            path: "pages/contact.mdx",
            frontMatter: {
              title: "Contact",
              type: "page",
            },
          },
        ],
      },
    ];
    const results = FilterPageType(pages);
    console.log(results);
  });
});


describe('test _fpkit_nextjs', function () {
  it('test it returns and empty results', function (done) {
    let pages = [{
      "kind": "MdxPage",
      "frontMatter": {
        "title": "Test Page",
        "description": "Test Description",
        "type": "page"
      },
      "filePath": "pages\\test\\test.mdx"
    }];
    let sortBy = 'date';
    let sortOrder = "descending";
    // @ts-ignore
    let result = FilterMdxPages(pages, sortBy, sortOrder);
    assert.deepEqual(result, []);
    console.log(result);

    // done();
  }),

    it('it returns results', function (done) {
      let pages = [{
        "kind": "MdxPage",
        "frontMatter": {
          "title": "Test Page",
          "description": "Test Description",
          "type": "page"
        },
        "filePath": "pages\\test\\test.mdx"
      }];
      let sortBy = 'date';
      let sortOrder = "descending";
      // @ts-ignore
      let result = FilterMdxPages(pages, sortBy, sortOrder);
      assert.deepEqual(result, []);
      console.log(result);

      // done();
    }
    )
})
