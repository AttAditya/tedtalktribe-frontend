import { endpoints } from "../endpoints";

async function createNewDraft(caller) {
    let data = await caller.post(endpoints.editor.createDraft(), {});
    return data;
}

async function updateDraftArticle(caller, id, articleData) {
    let data = await caller.put(endpoints.editor.updateDraft(id), articleData);
    return data;
}

async function publishDraftArticle(caller, id) {
    let data = await caller.post(endpoints.editor.publishDraft(id), {});
    return data;
}

export function editorCalls(caller) {
    return {
        createNewDraft: () => createNewDraft(caller),
        updateDraftArticle: (id, articleData) => updateDraftArticle(caller, id, articleData),
        publishDraftArticle: (id) => publishDraftArticle(caller, id)
    }
}