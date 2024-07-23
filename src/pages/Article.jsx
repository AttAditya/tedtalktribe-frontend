import { useParams } from "react-router-dom";

export function Article() {
    let params = useParams();
    let id = params.id;

    return (
        <div className="article">
            <h1 className="text-3xl font-bold">
                Article {id}
            </h1>
        </div>
    );
}