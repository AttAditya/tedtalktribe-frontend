import { APICaller } from "./caller";
import { articleCalls, authCalls } from "./routing";

let caller = new APICaller("https://api.theworldtimes.in/api");

let articles = articleCalls(caller);
let auth = authCalls(caller);

let api = {
    articles: articles,
    auth: auth
}

export default api;