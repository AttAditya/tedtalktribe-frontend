import { FeaturedSection, ArticleSection } from "../sections";

export function Home() {
    let topics = [
        "foods",
        "sports",
        "politics",
        "technology",
        "entertainment"
    ];

    return (
        <div className="container p-4 flex flex-col gap-32">
            <FeaturedSection />
            {
                topics.map((topic) => (
                    <ArticleSection key={topic} sectionId={topic} />
                ))
            }
        </div>
    );
}