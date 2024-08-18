import { endpoints } from "../endpoints";

async function getTopArticles(caller) {
    let data = await caller.get(endpoints.lists.latest());
    return data;
}

async function getTaggedArticles(caller, tag, limit) {
    let data = await caller.get(endpoints.lists.tagged(tag, limit));
    return data;
}

async function getArticle(caller, id) {
    let data = await caller.get(endpoints.articles.get(id));
    return data;
}

export function articleCalls(caller) {
    return {
        topArticles: () => getTopArticles(caller),
        taggedArticles: (tag, count=6) => getTaggedArticles(caller, tag, count),
        getArticle: (id) => getArticle(caller, id)
    }
}