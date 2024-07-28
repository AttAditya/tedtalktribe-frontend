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

async function getTaggedArticles(caller, tag, limit) {
    let demoData = [
        {
            "id": "12891r93rh9f6",
            "title": "Advancements in Quantum Computing",
            "image": "https://picsum.photos/1080/723",
            "author": "Alice Smith",
            "publishDate": "2021-09-04",
            "tags": ["Quantum Computing", "Technology"]
        },
        {
            "id": "12891r93rh9f7",
            "title": "The Impact of Blockchain",
            "image": "https://picsum.photos/1080/724",
            "author": "Bob Johnson",
            "publishDate": "2021-09-05",
            "tags": ["Blockchain", "Cryptocurrency"]
        },
        {
            "id": "12891r93rh9f8",
            "title": "Renewable Energy Sources",
            "image": "https://picsum.photos/1080/725",
            "author": "Carol White",
            "publishDate": "2021-09-06",
            "tags": ["Renewable Energy", "Environment"]
        },
        {
            "id": "12891r93rh9f9",
            "title": "The Evolution of the Internet",
            "image": "https://picsum.photos/1080/726",
            "author": "David Brown",
            "publishDate": "2021-09-07",
            "tags": ["Internet", "Technology"]
        },
        {
            "id": "12891r93rh9fa",
            "title": "The Future of Space Exploration",
            "image": "https://picsum.photos/1080/727",
            "author": "Eve Davis",
            "publishDate": "2021-09-08",
            "tags": ["Space Exploration", "Science"]
        },
        {
            "id": "12891r93rh9fb",
            "title": "Artificial Intelligence in Healthcare",
            "image": "https://picsum.photos/1080/728",
            "author": "Frank Miller",
            "publishDate": "2021-09-09",
            "tags": ["AI", "Healthcare"]
        },
        {
            "id": "12891r93rh9fc",
            "title": "Climate Change Mitigation Strategies",
            "image": "https://picsum.photos/1080/729",
            "author": "Grace Wilson",
            "publishDate": "2021-09-10",
            "tags": ["Climate Change", "Environment"]
        },
        {
            "id": "12891r93rh9fd",
            "title": "The Future of Urbanization",
            "image": "https://picsum.photos/1080/730",
            "author": "Henry Moore",
            "publishDate": "2021-09-11",
            "tags": ["Urbanization", "Future"]
        },
        {
            "id": "12891r93rh9fe",
            "title": "Innovations in Biotechnology",
            "image": "https://picsum.photos/1080/731",
            "author": "Ivy Taylor",
            "publishDate": "2021-09-12",
            "tags": ["Biotechnology", "Science"]
        },
        {
            "id": "12891r93rh9ff",
            "title": "The Role of Big Data",
            "image": "https://picsum.photos/1080/732",
            "author": "Jack Anderson",
            "publishDate": "2021-09-13",
            "tags": ["Big Data", "Technology"]
        },
        {
            "id": "12891r93rh9fg",
            "title": "Cybersecurity Trends",
            "image": "https://picsum.photos/1080/733",
            "author": "Karen Thomas",
            "publishDate": "2021-09-14",
            "tags": ["Cybersecurity", "Technology"]
        },
        {
            "id": "12891r93rh9fh",
            "title": "The Rise of Electric Vehicles",
            "image": "https://picsum.photos/1080/734",
            "author": "Leo Jackson",
            "publishDate": "2021-09-15",
            "tags": ["Electric Vehicles", "Technology"]
        },
        {
            "id": "12891r93rh9fi",
            "title": "The Future of Agriculture",
            "image": "https://picsum.photos/1080/735",
            "author": "Mia Harris",
            "publishDate": "2021-09-16",
            "tags": ["Agriculture", "Future"]
        },
        {
            "id": "12891r93rh9fj",
            "title": "The Impact of 5G Technology",
            "image": "https://picsum.photos/1080/736",
            "author": "Noah Martin",
            "publishDate": "2021-09-17",
            "tags": ["5G", "Technology"]
        },
        {
            "id": "12891r93rh9fk",
            "title": "Advances in Renewable Energy",
            "image": "https://picsum.photos/1080/737",
            "author": "Olivia Lee",
            "publishDate": "2021-09-18",
            "tags": ["Renewable Energy", "Environment"]
        },
        {
            "id": "12891r93rh9fl",
            "title": "The Role of AI in Education",
            "image": "https://picsum.photos/1080/738",
            "author": "Paul Walker",
            "publishDate": "2021-09-19",
            "tags": ["AI", "Education"]
        },
        {
            "id": "12891r93rh9fm",
            "title": "The Future of Remote Work",
            "image": "https://picsum.photos/1080/739",
            "author": "Quinn Young",
            "publishDate": "2021-09-20",
            "tags": ["Remote Work", "Future"]
        },
        {
            "id": "12891r93rh9fn",
            "title": "Developments in Nanotechnology",
            "image": "https://picsum.photos/1080/740",
            "author": "Ryan King",
            "publishDate": "2021-09-21",
            "tags": ["Nanotechnology", "Science"]
        },
        {
            "id": "12891r93rh9fo",
            "title": "The Future of Food Technology",
            "image": "https://picsum.photos/1080/741",
            "author": "Sophia Adams",
            "publishDate": "2021-09-22",
            "tags": ["Food Technology", "Future"]
        },
        {
            "id": "12891r93rh9fp",
            "title": "The Impact of Social Media",
            "image": "https://picsum.photos/1080/742",
            "author": "Tyler Clark",
            "publishDate": "2021-09-23",
            "tags": ["Social Media", "Technology"]
        },
        {
            "id": "12891r93rh9fq",
            "title": "Innovations in Healthcare",
            "image": "https://picsum.photos/1080/743",
            "author": "Uma Roberts",
            "publishDate": "2021-09-24",
            "tags": ["Healthcare", "Innovation"]
        },
        {
            "id": "12891r93rh9fr",
            "title": "The Future of Renewable Energy",
            "image": "https://picsum.photos/1080/744",
            "author": "Victor Green",
            "publishDate": "2021-09-25",
            "tags": ["Renewable Energy", "Future"]
        },
        {
            "id": "12891r93rh9fs",
            "title": "The Role of AI in Business",
            "image": "https://picsum.photos/1080/745",
            "author": "Wendy Lewis",
            "publishDate": "2021-09-26",
            "tags": ["AI", "Business"]
        },
        {
            "id": "12891r93rh9ft",
            "title": "The Future of the Automotive Industry",
            "image": "https://picsum.photos/1080/746",
            "author": "Xavier Phillips",
            "publishDate": "2021-09-27",
            "tags": ["Automotive", "Future"]
        },
        {
            "id": "12891r93rh9fu",
            "title": "The Impact of Virtual Reality",
            "image": "https://picsum.photos/1080/747",
            "author": "Yara Baker",
            "publishDate": "2021-09-28",
            "tags": ["Virtual Reality", "Technology"]
        },
        {
            "id": "12891r93rh9fv",
            "title": "The Future of Sustainable Living",
            "image": "https://picsum.photos/1080/748",
            "author": "Zachary Scott",
            "publishDate": "2021-09-29",
            "tags": ["Sustainable Living", "Future"]
        }
    ];

    if (limit) {
        demoData = demoData.slice(0, limit);
    }

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
        }, 0);
    });
}

export function articleCalls(caller) {
    return {
        topArticles: () => getTopArticles(caller),
        taggedArticles: (tag, count=6) => getTaggedArticles(caller, tag, count),
        getArticle: (id) => getArticle(caller, id)
    }
}