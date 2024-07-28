async function getTopArticles(caller) {
    let demoData = [
        {
            id: "12891r93rh9f0",
            title: "Climate change is real",
            image: "https://picsum.photos/1080/720",
            author: "John Doe",
            publishDate: "2021-09-01",
            tags: ["Climate Change", "Global Warming"]
        },
        {
            id: "12891r93rh9f1",
            title: "The rise of AI",
            image: "https://picsum.photos/1080/721",
            author: "Jane Doe",
            publishDate: "2021-09-02",
            tags: ["AI", "Technology"]
        },
        {
            id: "12891r93rh9f2",
            title: "The future of work",
            image: "https://picsum.photos/1081/720",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f3",
            title: "The future of work",
            image: "https://picsum.photos/1081/721",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f4",
            title: "The future of work",
            image: "https://picsum.photos/1080/719",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f5",
            title: "The future of work",
            image: "https://picsum.photos/1080/722",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f6",
            title: "The future of work",
            image: "https://picsum.photos/1080/723",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f7",
            title: "The future of work",
            image: "https://picsum.photos/1080/724",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f8",
            title: "The future of work",
            image: "https://picsum.photos/1080/725",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        }
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(demoData);
        }, 1000);
    });
}

async function getTaggedArticles(caller, tag) {
    let demoData = [
        {
            id: "12891r93rh9f0",
            title: "Climate change is real",
            image: "https://picsum.photos/1080/1920",
            author: "John Doe",
            publishDate: "2021-09-01",
            tags: ["Climate Change", "Global Warming"]
        },
        {
            id: "12891r93rh9f1",
            title: "The rise of AI",
            image: "https://picsum.photos/1080/721",
            author: "Jane Doe",
            publishDate: "2021-09-02",
            tags: ["AI", "Technology"]
        },
        {
            id: "12891r93rh9f2",
            title: "The future of work",
            image: "https://picsum.photos/1081/720",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f3",
            title: "The future of work",
            image: "https://picsum.photos/1081/721",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f4",
            title: "The future of work",
            image: "https://picsum.photos/1080/719",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f5",
            title: "The future of work",
            image: "https://picsum.photos/1080/722",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        }
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(demoData);
        }, 1000);
    });
}

async function getArticle(caller, id) {
    let demoData = {
        id: id,
        name: "Here is a demo article",
        content: `
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        image: "https://picsum.photos/800/400",
        author: "John Doe",
        published: "2021-09-01",
        tags: ["tag1", "tag2", "tag3"]
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(demoData);
        }, 1000);
    });
}

export function articleCalls(caller) {
    return {
        topArticles: () => getTopArticles(caller),
        taggedArticles: (tag) => getTaggedArticles(caller, tag),
        getArticle: (id) => getArticle(caller, id)
    }
}