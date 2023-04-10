import { FilterMdxPages, FilterPageType } from './filter-mdx-pages';
import { describe, it, assert } from "vitest";
import { MdxFile, PageMapItem } from "nextra";

import { pageMap } from './tests/test-data';



describe('test _fpkit_nextjs', function () {
  it('test it returns empty results', function (done) {
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

    it('it returns the correct results', function () {

      let sortBy = 'date';
      let sortOrder = "descending";
      // @ts-ignore
      let result = FilterMdxPages(pageMap.pageMap, sortBy, sortOrder);
      expect(result).toHaveLength(3);
    }
    )


  it("it get the correct page types", function (done) {
    // @ts-ignore
    const pages: PageMapItem[] = pageMap.pageMap;
    const results = FilterPageType(pages);
    expect(results).toHaveLength(3);
  });
})
