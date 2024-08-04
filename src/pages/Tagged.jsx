import { TaggedSection } from "../sections";

export function Tagged() {
    return (
        <div className="container p-4 flex flex-col">
            <h1 className="text-3xl capitalize">
                Discover
                <div className="text-8xl font-bold">
                    Articles
                </div>
            </h1>

            <section className="articles-list-section w-full mt-4">
                <TaggedSection sectionId="articles" />
            </section>
        </div>
    );
}