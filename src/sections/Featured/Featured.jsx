import "./Featured.css";
import { FeaturedCard } from "../../components";
import { useEffect, useState } from "react";
import api from "../../api";

export function Featured() {
    let [featuredNews, setFeaturedNews] = useState([]);

    useEffect(() => {
        let fetchFeaturedNews = async () => {
            let news = await api.articles.topArticles();
            setFeaturedNews(news);
        }
        
        fetchFeaturedNews();
    }, []);

    return (
        <section className="featured-section px-20">
            <h1 className="text-5xl font-bold py-3 p-4">
                Recommended
            </h1>

            <div className="featured mt-2">
                {
                    featuredNews.map((news) => (
                        <FeaturedCard
                            key={news.id}
                            id={news.id}
                            title={news.name}
                            image={`https://theworldtimes.in${news.image}`}
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