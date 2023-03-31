
export const dataSet = [
    {
        kind: "Meta",
        data: {
            index: "Introduction",
            another: "Another Page",
            advanced: "Advanced (A Folder)",
            about: {
                title: "About",
                type: "page",
            },
            contact: {
                title: "Contact ↗",
                type: "page",
                href: "https://twitter.com/shuding_",
                newWindow: true,
            },
        },
    },
    {
        kind: "MdxPage",
        name: "about",
        route: "/about",
    },
    {
        kind: "Folder",
        name: "advanced",
        route: "/advanced",
        children: [
            {
                kind: "MdxPage",
                name: "satori",
                route: "/advanced/satori",
            },
            {
                kind: "Meta",
                data: {
                    satori: "Satori",
                },
            },
        ],
    },
    {
        kind: "MdxPage",
        name: "advanced",
        route: "/advanced",
        frontMatter: {
            title: "Advanced title",
            description:
                "The city bustled with people rushing to work, the sound of honking cars and chatter filling the air. The tall skyscrapers towered over the streets, their windows glinting in the sunlight. A sense of hustle and bustle prevailed in this concrete jungle.",
            date: "2023-01-22T23:51:45.574Z",
        },
    },
    {
        kind: "MdxPage",
        name: "another",
        route: "/another",
        frontMatter: {
            title: "Another page",
            description:
                "Web developers work tirelessly to create seamless digital experiences. They code and debug, troubleshoot and optimize, all to deliver optimal performance and user satisfaction.",
        },
    },
    {
        kind: "MdxPage",
        name: "index",
        route: "/",
        frontMatter: {
            title: "Introduction",
            description:
                "A simple, powerful and flexible site generation framework with everything you love from Next.js.",
        },
    },
];

export const branding = {
    url: "/",
    logo: "Branding Logo",
};
