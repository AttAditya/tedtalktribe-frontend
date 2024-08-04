import { APICaller } from "./caller";
import { articleCalls, authCalls } from "./routing";

let caller = new APICaller("http://localhost:8081");

let articles = articleCalls(caller);
let auth = authCalls(caller);

let api = {
    articles: articles,
    auth: auth
}

export default api;