import "./Featured.css";
import { FeaturedCard } from "../../components";
import { useEffect, useState } from "react";
import api from "../../api";

export function Featured() {
    let [featuredCards, setFeaturedCards] = useState([]);

    useEffect(() => {
        let fetchFeaturedCards = async () => {
            let cards = await api.articles.topArticles();
            setFeaturedCards(cards);
        }
        
        fetchFeaturedCards();
    }, []);

    return (
        <section className="featured-section px-20">
            <h1 className="text-5xl font-bold py-3 p-4">
                Recommended Articles
            </h1>

            <div className="featured mt-2">
                {
                    featuredCards.map((cards) => (
                        <FeaturedCard
                            key={cards.id}
                            id={cards.id}
                            title={cards.title}
                            image={cards.image}
                            author={cards.author}
                            publishDate={cards.publishDate}
                           tags={cards.tags}
                        />
                    ))
                }
            </div>
        </section>
    );
}