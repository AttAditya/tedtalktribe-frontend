import "./Articles.css";
import { ArticleListCard } from "../../components";

export function Articles({ sectionId }) {
    let sectionNews = [
        {
            id: "12891r93rh9f0",
            title: "Climate change is real",
            image: "https://picsum.photos/1080/1920",
            author: "John Doe",
            publishDate: "2021-09-01",
            tags: ["Climate Change", "Global Warming"]
        },
        {
            id: "12891r93rh9f1",
            title: "The rise of AI",
            image: "https://picsum.photos/1080/721",
            author: "Jane Doe",
            publishDate: "2021-09-02",
            tags: ["AI", "Technology"]
        },
        {
            id: "12891r93rh9f2",
            title: "The future of work",
            image: "https://picsum.photos/1081/720",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f3",
            title: "The future of work",
            image: "https://picsum.photos/1081/721",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f4",
            title: "The future of work",
            image: "https://picsum.photos/1080/719",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f5",
            title: "The future of work",
            image: "https://picsum.photos/1080/722",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        }
    ];

    return (
        <section className="articles-list-section">
            <h1 className="text-5xl font-bold py-3 capitalize">
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
                            title={news.title}
                            image={news.image}
                            author={news.author}
                            publishDate={news.publishDate}
                           tags={news.tags}
                        />
                    ))
                }
            </div>
        </section>
    );
}