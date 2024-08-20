import { endpoints } from "../endpoints";

async function getUserPublishedArticles(caller, username) {
    let data = await caller.get(endpoints.lists.userPublished(username));
    return data;
}

async function getUserDrafts(caller, username) {
    let data = await caller.get(endpoints.lists.userDrafts(username));
    return data;
}

export function dashboardCalls(caller) {
    return {
        getUserPublishedArticles: (username) => getUserPublishedArticles(caller, username),
        getUserDraftArticles: (username) => getUserDrafts(caller, username)
    }
}