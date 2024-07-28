import { useParams } from "react-router-dom";
import { TaggedArticles } from "../sections/Tagged/TaggedArticles";

export function Tagged() {
    let params = useParams();
    let tag = params.tag;

    return (
        <div className="container p-4 flex flex-col">
            <h1 className="text-xl capitalize">
                Tagged
                <div className="text-5xl font-bold">
                    { tag.replace(/-/g, " ") }
                </div>
            </h1>

            <section className="articles-list-section w-full mt-4">
                <TaggedArticles sectionId={tag} />
            </section>
        </div>
    );
}