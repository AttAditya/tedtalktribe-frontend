import { useNavigate } from "react-router-dom";
import "./FeaturedCard.css";

export function FeaturedCard({ id, title, image, author, publishDate, tags }) {
    let navigate = useNavigate();

    function handleClick() {
        navigate(`/article/${id}`);
    }

    return (
        <div className="featured-card" onClick={handleClick}>
            <div className="featured-card-image">
                <img src={image} alt={title} />
            </div>

            <div className="featured-card-content">
                <h3 className="line-clamp-1">{title}</h3>

                <div className="featured-card-meta">
                    <span>{publishDate}</span>
                    <span>{author}</span>
                </div>
            </div>
            
            <div className="featured-card-tags">
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