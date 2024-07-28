import { APICaller } from "./caller";
import { articleCalls } from "./routing/articles";

let caller = new APICaller("http://localhost:8081");
let articles = articleCalls(caller);

console.log(articles);

let api = {
    articles: articles
}

export default api;