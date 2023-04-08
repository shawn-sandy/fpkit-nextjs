import { MdxFile } from "nextra"
export const navListItems: MdxFile[] = [
    {
        "kind": "MdxPage",
        "name": "articles",
        "route": "/articles",
        "frontMatter": {
            "type": "page",
            "title": "Articles",
            "date": "2020-01-01T00:00:00.000Z",
            "navKey": 2
        }
    },
    {
        "kind": "MdxPage",
        "name": "index",
        "route": "/",
        "frontMatter": {
            "type": "page",
            "title": "About",
            "date": "2020-01-01T00:00:00.000Z",
            "navKey": 3
        }
    },
    {
        "kind": "MdxPage",
        "name": "post",
        "route": "/post",
        "frontMatter": {
            "type": "page",
            "title": "Posts",
            "date": "2020-01-01T00:00:00.000Z",
            "navKey": 1
        }
    }
]