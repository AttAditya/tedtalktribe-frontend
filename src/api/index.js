import { APICaller } from "./caller";
import { articleCalls, authCalls, editorCalls } from "./routing";

let caller = new APICaller("https://tedtalktribe-backend.onrender.com/api");

let articles = articleCalls(caller);
let auth = authCalls(caller);
let editor = editorCalls(caller);

let api = {
    articles: articles,
    auth: auth,
    editor: editor
}

export default api;