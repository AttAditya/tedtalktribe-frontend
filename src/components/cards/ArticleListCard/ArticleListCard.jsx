import { useNavigate } from "react-router-dom";
import "./ArticleListCard.css";

export function ArticleListCard({ id, title, image, author, publishDate, tags }) {
    let navigate = useNavigate();

    function handleClick() {
        navigate(`/article/${id}`);
    }

    return (
        <div className="article-list-card" onClick={handleClick}>
            <div className="article-list-card-image">
                <img src={image} alt={title} />
            </div>

            <div className="article-list-card-content">
                <h3 className="line-clamp-1">{title}</h3>

                <div className="article-list-card-meta">
                    <span>{publishDate}</span>
                    <span>{author}</span>
                </div>
            </div>
            
            <div className="article-list-card-tags">
                {
                    tags.map((tag) => (
                        <span key={tag}>
                            {tag}
                        </span>
                    ))
                }
            </div>
        </div>
    );
}