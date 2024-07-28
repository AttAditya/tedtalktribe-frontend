import { APICaller } from "./caller";
import { articleCalls } from "./routing/articles";

let caller = new APICaller("http://localhost:8081");
let articles = articleCalls(caller);

let api = {
    articles: articles
}

export default api;