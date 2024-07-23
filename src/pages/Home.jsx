import { FeaturedSection, ArticleSection } from "../sections";

export function Home() {
    return (
        <div className="container p-4 flex flex-col gap-32">
            <FeaturedSection />
            <ArticleSection sectionId="foods" />
        </div>
    );
}