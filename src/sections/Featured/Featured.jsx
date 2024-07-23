import "./Featured.css";
import { FeaturedCard } from "../../components";

export function Featured() {
    let featuredNews = [
        {
            id: "12891r93rh9f0",
            title: "Climate change is real",
            image: "https://picsum.photos/1080/720",
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
        },
        {
            id: "12891r93rh9f6",
            title: "The future of work",
            image: "https://picsum.photos/1080/723",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f7",
            title: "The future of work",
            image: "https://picsum.photos/1080/724",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        },
        {
            id: "12891r93rh9f8",
            title: "The future of work",
            image: "https://picsum.photos/1080/725",
            author: "John Doe",
            publishDate: "2021-09-03",
            tags: ["Work", "Future"]
        }
    ];

    return (
        <section className="featured-section">
            <h1 className="text-5xl font-bold py-3">
                Recommended Articles
            </h1>

            <div className="featured mt-2">
                {
                    featuredNews.map((news) => (
                        <FeaturedCard
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