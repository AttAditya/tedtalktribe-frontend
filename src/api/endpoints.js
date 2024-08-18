export let endpoints = {
    articles: {
        top: () => "/articles",
        get: (id) => `/articles/${id}`
    },
    lists: {
        latest: (limit=9) => `/lists?limit=${limit}`,
        tagged: (tag, limit=6) => `/lists/${tag}?limit=${limit}`
    }
};