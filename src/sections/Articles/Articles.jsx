import "./Articles.css";
import { ArticleListCard } from "../../components";
import { useEffect, useState } from "react";
import api from "../../api";

export function Articles({ sectionId }) {
    let [sectionNews, setSectionNews] = useState([]);

    useEffect(() => {
        let fetchSectionNews = async () => {
            let news = await api.articles.taggedArticles(sectionId);
            setSectionNews(news);
        }

        fetchSectionNews();
    }, [sectionId]);

    return (
        <section className="articles-list-section px-20">
            <h1 className="text-5xl font-bold py-3 p-4 capitalize">
                {
                    sectionId.replace(/-/g, " ")
                } Section
            </h1>

            <div className="articles-list mt-2">
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
        </section>
    );
}