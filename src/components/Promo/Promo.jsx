import "./Promo.css";

import { FaLocationPin } from "react-icons/fa6";
import { BsCalendarFill, BsClockFill } from "react-icons/bs";
import { BiBookBookmark, BiShareAlt } from "react-icons/bi";

function Promo({ title, thumbnail, date, time, location, description, actions }) {
    return (
        <div className="promo bg-white">
            <div className="promo-image">
                <img src={thumbnail} alt="Promo" />
            </div>

            <div className="promo-header">
                <div className="promo-context">
                    <h1 className="promo-title">
                        {title}
                    </h1>

                    <div className="promo-meta">
                        <div className="promo-meta-item">
                            <span className="icon">
                                <BsCalendarFill />
                            </span>
                            <span className="text">
                                {date}
                            </span>
                        </div>
                        <div className="promo-meta-item">
                            <span className="icon">
                                <BsClockFill />
                            </span>
                            <span className="text">
                                {time}
                            </span>
                        </div>
                        <div className="promo-meta-item">
                            <span className="icon">
                                <FaLocationPin />
                            </span>
                            <span className="text">
                                {location}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="promo-interactions">
                    {
                        actions.map((action) => {
                            return (
                                <button key={action.id} className="promo-button" onClick={action.handler}>
                                    {action.label}
                                </button>
                            );
                        })
                    }
                </div>
            </div>

            <div className="promo-description">
                <p>
                    {description}
                </p>
            </div>

            <div className="promo-footer">
                <div className="promo-interactions">
                    <button className="promo-button">
                        <span className="icon">
                            <BiShareAlt />
                        </span>
                        <span className="text">
                            Share
                        </span>
                    </button>

                    <button className="promo-button">
                        <span className="icon">
                            <BiBookBookmark />
                        </span>
                        <span className="text">
                            Save
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Promo;