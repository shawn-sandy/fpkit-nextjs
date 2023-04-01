// import { MdxPage } from './filter-mdx-pages';
import { PageMapItem, MdxFile } from "nextra";

export type SortBy = "date" | "name";

export type SortOrder = "ascending" | "descending";

/**
 * Filters an array of pages and returns only the MDX pages.
 * @param pages An array of pages.
 * @param sortBy The field to sort by.
 * @param sortOrder The sort order.
 * @returns An array of MDX pages.
 */
export function FilterMdxPages(pages: PageMapItem[], sortBy: SortBy = 'date', sortOrder: SortOrder = "descending"): MdxFile[] {
    const mdxPages: MdxFile[] = [];

    pages.forEach((item) => {

        if (item.kind === "MdxPage" && item.frontMatter?.type !== 'page') {
            mdxPages.push(item);
        } else if (item.kind === "Folder" && item.children) {
            item.children.forEach((child) => {
                if (child.kind === "MdxPage" && child.frontMatter?.type !== 'page') {
                    mdxPages.push(child);
                }
            });
        }
    });

    if (sortBy) {
        sortMdxPages(mdxPages, sortBy, sortOrder);
    }

    return mdxPages;
}

export function sortMdxPages(mdxPages: MdxFile[], sortBy: SortBy, sortOrder: SortOrder): void {
    mdxPages.sort((a, b) => {
        switch (sortBy) {
            case "date":
                const dateA = new Date(a.frontMatter?.date);
                const dateB = new Date(b.frontMatter?.date);
                return sortOrder === "ascending" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
            case "name":
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return sortOrder === "ascending" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
            default:
                return 0;
        }
    });
}



export function paginateMdxPages(mdxPages: MdxFile[], limit: number, currentPage: number): {
    totalPages: number,
    currentPage: number,
    hasNextPage: boolean,
    hasPrevPage: boolean,
    pages: MdxFile[]
} {
    const totalPages = Math.ceil(mdxPages.length / limit);
    const offset = (currentPage - 1) * limit;
    const pages = mdxPages.slice(offset, offset + limit);

    return {
        totalPages,
        currentPage,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1,
        pages,
    };
}

export default FilterMdxPages;
// const mdxPages = filterMdxPages(pages);