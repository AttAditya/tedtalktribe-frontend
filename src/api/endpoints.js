export let endpoints = {
    articles: {
        top: () => "/articles",
        get: (id) => `/articles/${id}`
    },
    lists: {
        latest: (limit=9) => `/lists?limit=${limit}`,
        tagged: (tag, limit=6) => `/lists/${tag}?limit=${limit}`,
        userPublished: (username) => `/lists/user/${username}`,
        userDrafts: (username) => `/lists/user/${username}/drafts`
    },
    user: {
        login: () => "/user/login",
        register: () => "/user/register"
    },
    editor: {
        createDraft: () => "/articles",
        updateDraft: (id) => `/articles/${id}`,
        publishDraft: (id) => `/articles/${id}`
    }
};