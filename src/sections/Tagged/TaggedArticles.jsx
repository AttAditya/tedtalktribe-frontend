import "./TaggedArticles.css";
import { ArticleListCard } from "../../components";
import { useEffect, useState } from "react";
import api from "../../api";

export function TaggedArticles({ sectionId }) {
    let [sectionNews, setSectionNews] = useState([]);

    useEffect(() => {
        let fetchSectionNews = async () => {
            let news = await api.articles.taggedArticles(sectionId, "all");
            setSectionNews(news);
        }

        fetchSectionNews();
    }, [sectionId]);

    return (
        <div className="tagged-articles-list mt-2">
            {
                sectionNews.map((news) => (
                    <ArticleListCard
                        key={news.id}
                        id={news.id}
                        title={news.name}
                        image={news.image}
                        author={news.author}
                        publishDate={news.publishedDate}
                        tags={news.tags}
                    />
                ))
            }
        </div>
    );
}