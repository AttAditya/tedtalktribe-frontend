export let endpoints = {
    articles: {
        top: () => "/articles",
        tagged: (tag) => `/articles/tagged/${tag}`
    }
};