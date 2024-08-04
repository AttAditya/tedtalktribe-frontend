import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./ProfileCard.css";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

function ProfileCard({ username, name, avatar, bio, badges, social }) {
    return (
        <div className="profile-card bg-white">
            <div className="profile-card-avatar">
                <img src={avatar} alt={username} />
            </div>

            <div className="profile-card-content">
                <div className="profile-card-intro">
                    <h1 className="profile-card-name">{name}</h1>
                    <h2 className="profile-card-handle">{username}</h2>
                </div>
                    
                <ul className="profile-card-badges">
                    {
                        Object.values(badges).map(badge => {
                            return (
                                <li key={badge.id} className="profile-card-badge">
                                    <span className="profile-card-badge-content">
                                        <img src={badge.icon} alt={badge.content} />
                                    </span>
                                    <span className="profile-card-badge-tooltip">
                                        {badge.content}
                                    </span>
                                </li>
                            );
                        })
                    }
                </ul>

                <p className="profile-card-bio">{bio}</p>

                <div className="profile-card-socials">
                    {
                        !social.facebook ? "" : (
                            <a href={social.facebook} target="_blank" rel="noreferrer">
                                <FaFacebook />
                            </a>
                        )
                    }

                    {
                        !social.twitter ? "" : (
                            <a href={social.twitter} target="_blank" rel="noreferrer">
                                <FaTwitter />
                            </a>
                        )
                    }

                    {
                        !social.linkedin ? "" : (
                            <a href={social.linkedin} target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </a>
                        )
                    }

                    {
                        !social.instagram ? "" : (
                            <a href={social.instagram} target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                        )
                    }

                    {
                        !social.github ? "" : (
                            <a href={social.github} target="_blank" rel="noreferrer">
                                <FaGithub />
                            </a>
                        )
                    }

                    {
                        !social.discord ? "" : (
                            <a href={social.discord} target="_blank" rel="noreferrer">
                                <FaDiscord />
                            </a>
                        )
                    }

                    {
                        !social.leetcode ? "" : (
                            <a href={social.leetcode} target="_blank" rel="noreferrer">
                                <SiLeetcode />
                            </a>
                        )
                    }

                    {
                        !social.codeforces ? "" : (
                            <a href={social.codeforces} target="_blank" rel="noreferrer">
                                <SiCodeforces />
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;