import { useEffect, useState } from "react";
import {
    BsChatDots,
    BsEnvelope,
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsPinterest,
    BsReddit,
    BsTelegram,
    BsTwitterX,
    BsWhatsapp
} from "react-icons/bs";
import { GrTumblr } from "react-icons/gr";
import { useParams } from "react-router-dom";
import api from "../api";
import parse from "html-react-parser";

export function Article({
    overwrite=false,
    articleName="Loading...",
    articleContent="Loading...",
    articleImage="",
    articleAuthor="Loading...",
    articlePublished="Loading...",
    articleTags=[]
}) {
    let params = useParams();
    let id = params.id;

    let [data, setData] = useState({
        id: id,
        name: articleName,
        content: articleContent,
        image: articleImage,
        author: articleAuthor,
        publishedDate: articlePublished,
        tags: articleTags
    })

    useEffect(() => {
        let fetchArticle = async () => {
            let article = await api.articles.getArticle(id);
            setData(article);
        }

        if (!overwrite) {
            fetchArticle();
        }
    }, [id, overwrite]);

    useEffect(() => {
        if (!overwrite) {
            return;
        }

        setData({
            id: id,
            name: articleName,
            content: articleContent,
            image: articleImage,
            author: articleAuthor,
            publishedDate: articlePublished,
            tags: articleTags
        });
    }, [overwrite, id, articleName, articleContent, articleImage, articleAuthor, articlePublished, articleTags]);

    return (
        <div className="article p-6 w-full">
            <h1 className="text-5xl font-bold flex justify-center">
                <span className="w-11/12 block text-center">
                    {data.name}
                </span>
            </h1>
            
            <div className="article-main flex p-6 gap-5">
                <div className="article-content flex-1 bg-white p-6 rounded-3xl shadow-lg">
                    <div className="article-thumbnail flex justify-center px-6 pt-6">
                        <img src={data.image} alt={data.name} className="rounded-lg" />
                    </div>

                    <hr className="mt-12 mx-6 border-t-4" />

                    <div className="article-text mt-10 text-2xl px-6 pb-6">
                        {parse(data.content)}
                    </div>
                </div>

                <div className="article-meta w-1/6 flex flex-col gap-4 bg-white h-full p-4 rounded-lg shadow-lg">
                    <div className="article-share">
                        <h2 className="text-xl font-bold">
                            Share
                        </h2>

                        <ul className="flex gap-2 py-2 flex-wrap">
                            <li>
                                <a className="bg-primary color-white rounded-lg font-semibold cursor-pointer flex justify-center items-center p-2 text-2xl" href={`https://wa.me/?text=${window.location.href}`}>
                                    <BsWhatsapp />
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white rounded-lg font-semibold cursor-pointer flex justify-center items-center p-2 text-2xl" href={`https://t.me/share/url?url=${window.location.href}`}>
                                    <BsTelegram />
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white rounded-lg font-semibold cursor-pointer flex justify-center items-center p-2 text-2xl" href={`mailto:?body=${window.location.href}`}>
                                    <BsEnvelope />
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white rounded-lg font-semibold cursor-pointer flex justify-center items-center p-2 text-2xl" href={`sms:?body=${window.location.href}`}>
                                    <BsChatDots />
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white rounded-lg font-semibold cursor-pointer flex justify-center items-center p-2 text-2xl" href={`https://reddit.com/submit?url=${window.location.href}`}>
                                    <BsReddit />
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white rounded-lg font-semibold cursor-pointer flex justify-center items-center p-2 text-2xl" href={`https://pinterest.com/pin/create/button/?url=${window.location.href}`}>
                                    <BsPinterest />
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white rounded-lg font-semibold cursor-pointer flex justify-center items-center p-2 text-2xl" href={`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${window.location.href}`}>
                                    <GrTumblr />
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white rounded-lg font-semibold cursor-pointer flex justify-center items-center p-2 text-2xl" href={`https://www.instagram.com/?url=${window.location.href}`}>
                                    <BsInstagram />
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white rounded-lg font-semibold cursor-pointer flex justify-center items-center p-2 text-2xl" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                                    <BsFacebook />
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white rounded-lg font-semibold cursor-pointer flex justify-center items-center p-2 text-2xl" href={`https://twitter.com/intent/tweet?url=${window.location.href}`}>
                                    <BsTwitterX />
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white rounded-lg font-semibold cursor-pointer flex justify-center items-center p-2 text-2xl" href={`https://www.linkedin.com/shareArticle?url=${window.location.href}`}>
                                    <BsLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="article-author">
                        <h2 className="text-xl font-bold">
                            Author
                        </h2>

                        <span>{data.author}</span>
                    </div>

                    <div className="article-published">
                        <h2 className="text-xl font-bold">
                            Published
                        </h2>

                        <span>{data.publishedDate}</span>
                    </div>
                    
                    <div className="article-tags">
                        <h2 className="text-xl font-bold">
                            Tags
                        </h2>

                        <ul className="flex gap-2 py-2 flex-wrap">
                            {
                                data.tags.map((tag, index) => (
                                    <li key={index}>
                                        <a className="bg-primary color-white rounded-lg font-semibold cursor-pointer flex justify-center items-center px-2 py-1" href={`/tags/${tag}`}>
                                            {tag}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}