import { FeaturedSection, ArticleSection } from "../sections";

export function Home() {
    return (
        <div className="flex flex-col gap-32 w-full pb-20">
            <FeaturedSection />
            <ArticleSection sectionId="article" />
        </div>
    );
}