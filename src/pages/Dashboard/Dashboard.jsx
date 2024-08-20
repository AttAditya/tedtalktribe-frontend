import "./Dashboard.css";

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStorage } from '../../hooks';
import { ArticleListCard, ProfileCard } from "../../components";
import { TbDoorExit, TbFilePencil } from "react-icons/tb";
// import { GrUserSettings } from "react-icons/gr";
import api from "../../api";

function UserDashboard() {
    let [userPosts, setUserPosts] = useState([]);
    let [userDrafts, setUserDrafts] = useState([]);

    let navigate = useNavigate();
    let storage = useStorage();

    let user = null;

    if (storage.has("user")) {
        user = storage.get("user");
    }

    let currentTimestamp = new Date();
    let dayTimeType = "morning";

    if (0 <= currentTimestamp.getHours() && currentTimestamp.getHours() < 6) {
        dayTimeType = "evening";
    }

    if (6 <= currentTimestamp.getHours() && currentTimestamp.getHours() < 12) {
        dayTimeType = "morning";
    }
    
    if (12 <= currentTimestamp.getHours() && currentTimestamp.getHours() < 16) {
        dayTimeType = "afternoon";
    }

    if (16 <= currentTimestamp.getHours() && currentTimestamp.getHours() < 24) {
        dayTimeType = "evening";
    }

    function signOut() {
        storage.remove("user");
        navigate("/login");
    }

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    useEffect(() => {
        if (!user) {
            return;
        }

        async function fetchUserPosts() {
            let published = await api.dashboard.getUserPublishedArticles(user.username);
            let drafts = await api.dashboard.getUserDraftArticles(user.username);

            setUserPosts(published);
            setUserDrafts(drafts);
        }

        fetchUserPosts();
    }, [user]);

    return !user ? "" : (
        <div className="user-dashboard">
            <div className="dash-greeting">
                <h1 className="greeting-header color-black">
                    Good {dayTimeType[0].toUpperCase() + dayTimeType.slice(1)}, {user.name.split(" ")[0]}!
                </h1>

                <p className="greeting-subheader color-black">
                    Welcome to your dashboard.
                </p>
            </div>

            <div className="dash-profile">
                <ProfileCard
                    username={user.username}
                    name={user.name}
                    avatar={user.avatar}
                    bio={user.bio}
                    badges={user.badges}
                    social={user.social}
                />
            </div>

            <div className="dash-actions">
                <h2>Actions Suggested for You</h2>

                <ul className="actions-list">
                    {
                        !user.permissions.includes("creator") ? "" : (
                            <li className="action-item">
                                <Link to="/editor/article" style={{
                                    textDecoration: "none"
                                }}>
                                    <button className="action-button">
                                        <span className="icon"><TbFilePencil /></span>
                                        <span className="text">Create a Post</span>
                                    </button>
                                </Link>
                            </li>
                        )
                    }

                    {/* <li className="action-item">
                        <button className="action-button">
                            <span className="icon"><GrUserSettings /></span>
                            <span className="text">Edit Profile</span>
                        </button>
                    </li> */}

                    <li className="action-item">
                        <button className="action-button" onClick={signOut}>
                            <span className="icon"><TbDoorExit /></span>
                            <span className="text">Sign Out</span>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="user-posts">
                <h2 className="posts-header text-3xl font-bold">
                    Your Published Articles
                </h2>

                <ul className="posts-list flex justify-evenly flex-wrap gap-10 p-10">
                    {
                        userPosts.map(post => (
                            <li className="post-item w-1/4" key={post.id}>
                                <Link to={`/article/${post.id}`} key={post.id}>
                                    <ArticleListCard
                                        id={post.id}
                                        image={post.image}
                                        publishDate={post.publishedDate}
                                        author={post.author}
                                        tags={post.tags}
                                        title={post.name}
                                    />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="user-drafts">
                <h2 className="drafts-header text-3xl font-bold">
                    Your Draft Articles
                </h2>

                <ul className="drafts-list flex justify-evenly flex-wrap gap-10 p-10">
                {
                        userDrafts.map(post => (
                            <li className="post-item w-1/4" key={post.id}>
                                <Link to={`/editor/article/${post.id}`} key={post.id}>
                                    <ArticleListCard
                                        id={post.id}
                                        image={post.image}
                                        publishDate={post.publishedDate}
                                        author={post.author}
                                        tags={post.tags}
                                        title={post.name}
                                    />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* <div className="dash-communities">
                <h2>Your Communities</h2>
                <ul className="communities-list">
                    {
                        user.communities.map(community => {
                            return (
                                <li key={community}>
                                    {community}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

            <div className="dash-recent-activity">
                <h2>Your Recent Activity</h2>
                
                <ul className="activity-list">
                    <li>Activity 1</li>
                    <li>Activity 2</li>
                    <li>Activity 3</li>
                    <li>Activity 4</li>
                    <li>Activity 5</li>
                </ul>
            </div> */}
        </div>
    );
}

export default UserDashboard;