/**
 * Represents the front matter of an MDX page.
 */
export interface FrontMatter {
    type?: string;
    title: string;
    date: string;
    description?: string;
    tag?: string;
    author?: string;
}

/**
 * Represents an MDX page.
 */
export interface MdxPage {
    kind: "MdxPage";
    name: string;
    route: string;
    frontMatter: FrontMatter;
}

/**
 * Represents a folder that contains MDX pages or other folders.
 */
export interface Folder {
    kind: "Folder";
    name: string;
    route: string;
    children: Array<MdxPage | Folder>;
}

/**
 * Represents a meta object that maps page names to their titles.
 */
export interface Meta {
    kind: "Meta";
    data: { [key: string]: string };
}

/**
 * Represents any type of page.
 */
export type Page = MdxPage | Folder | Meta;

/**
 * Filters an array of pages and returns only the MDX pages.
 * @param pages An array of pages.
 * @returns An array of MDX pages.
 */
export function FilterMdxPages(pages: Page[]): MdxPage[] {
    const mdxPages: MdxPage[] = [];

    pages.forEach((item) => {
        if (item.kind === "MdxPage") {
            mdxPages.push(item);
        } else if (item.kind === "Folder" && item.children) {
            item.children.forEach((child) => {
                if (child.kind === "MdxPage") {
                    mdxPages.push(child);
                }
            });
        }
    });

    return mdxPages;
}

export function paginateMdxPages(mdxPages: MdxPage[], limit: number, currentPage: number): {
    totalPages: number,
    currentPage: number,
    hasNextPage: boolean,
    hasPrevPage: boolean,
    pages: MdxPage[]
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