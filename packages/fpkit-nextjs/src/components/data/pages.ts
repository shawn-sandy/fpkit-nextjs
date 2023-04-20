

import { Page } from "nextra"

export const pages: Page[] = [
    {
        "kind": "MdxPage",
        "name": "table",
        "route": "/posts/table",
        "frontMatter": {
            "title": "Table",
            "date": "2022/8/28",
            "description": "En example of using table.",
            "tag": "web development",
            "author": "Dimitri POSTOLOV"
        },
        "meta": {
            "title": "Table"
        }
    },
    {
        "kind": "MdxPage",
        "name": "code-blocks",
        "route": "/posts/code-blocks",
        "frontMatter": {
            "title": "Code blocks",
            "date": "2022/7/29",
            "description": "En example of using code blocks in your blog.",
            "tag": "web development,JavaScript,GraphQL,C++,Java,React,Next.js,The Guild,MacBook Pro",
            "author": "Dimitri POSTOLOV"
        },
        "meta": {
            "title": "Code blocks"
        }
    },
    {
        "kind": "MdxPage",
        "name": "index",
        "route": "/posts",
        "frontMatter": {
            "type": "posts",
            "title": "Random Thoughts 1",
            "date": "2020-01-03T00:00:00.000Z"
        },
        "meta": {
            "title": "Random Thoughts 1"
        }
    },
    {
        "kind": "MdxPage",
        "name": "random",
        "route": "/posts/random",
        "frontMatter": {
            "type": "posts",
            "title": "Some Random Thoughts",
            "date": "2020-01-03T00:00:00.000Z"
        },
        "meta": {
            "title": "Some Random Thoughts"
        }
    },
    {
        "kind": "MdxPage",
        "name": "aaron-swartz-a-programmable-web",
        "route": "/posts/aaron-swartz-a-programmable-web",
        "frontMatter": {
            "title": "Notes on A Programmable Web by Aaron Swartz",
            "date": "2016/5/21",
            "description": "At the time when I was getting into web development, I had the chance to read one of the most inspiring book about the web, Aaron Swartz's A Programmable Web. And it completely changed my mind.",
            "tag": "web development",
            "author": "Shu"
        },
        "meta": {
            "title": "Notes on A Programmable Web by Aaron Swartz"
        }
    }
]