import "./TaggedArticles.css";
import { ArticleListCard } from "../../components";
import { useEffect, useState } from "react";
import api from "../../api";

export function TaggedArticles({ sectionId }) {
    let [sectionNews, setSectionNews] = useState([]);

    useEffect(() => {
        let fetchSectionNews = async () => {
            let news = await api.articles.taggedArticles(sectionId, null);
            setSectionNews(news);
        }

        fetchSectionNews();
    }, [sectionId]);

    return (
        <div className="articles-list mt-2">
            {
                sectionNews.map((news) => (
                    <ArticleListCard
                        key={news.id}
                        id={news.id}
                        title={news.title}
                        image={news.image}
                        author={news.author}
                        publishDate={news.publishDate}
                        tags={news.tags}
                    />
                ))
            }
        </div>
    );
}