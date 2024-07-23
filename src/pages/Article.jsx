import { useParams } from "react-router-dom";

export function Article() {
    let params = useParams();
    let id = params.id;

    let data = {
        id: id,
        name: "Here is a demo article",
        content: "This is the content of article 1.",
        image: "https://picsum.photos/800/400",
        author: "John Doe",
        published: "2021-09-01",
        tags: ["tag1", "tag2", "tag3"]
    };

    return (
        <div className="article p-6 w-full">
            <h1 className="text-5xl font-bold text-center">
                {data.name}
            </h1>
            
            <div className="article-main flex p-6 gap-5">
                <div className="article-content flex-1 bg-white p-6 rounded-lg shadow-lg">
                    <div className="article-thumbnail flex justify-center">
                        <img src={data.image} alt={data.name} />
                    </div>

                    <hr className="mt-6 mx-6 border-t-4" />

                    <div className="article-text mt-4 text-xl px-6 pb-6">
                        {data.content}
                    </div>
                </div>

                <div className="article-meta w-1/6 flex flex-col gap-4 bg-white h-full p-4 rounded-lg shadow-lg">
                    <div className="article-share">
                        <h2 className="text-xl font-bold">
                            Share
                        </h2>

                        <ul className="flex gap-2 py-2 flex-wrap">
                            <li>
                                <a className="bg-primary color-white px-2 py-2 rounded-lg font-semibold cursor-pointer" href={`https://wa.me/?text=${window.location.href}`}>
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white px-2 py-2 rounded-lg font-semibold cursor-pointer" href={`https://t.me/share/url?url=${window.location.href}`}>
                                    Telegram
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white px-2 py-2 rounded-lg font-semibold cursor-pointer" href={`mailto:?body=${window.location.href}`}>
                                    Email
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white px-2 py-2 rounded-lg font-semibold cursor-pointer" href={`sms:?body=${window.location.href}`}>
                                    SMS
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white px-2 py-2 rounded-lg font-semibold cursor-pointer" href={`https://reddit.com/submit?url=${window.location.href}`}>
                                    Reddit
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white px-2 py-2 rounded-lg font-semibold cursor-pointer" href={`https://pinterest.com/pin/create/button/?url=${window.location.href}`}>
                                    Pinterest
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white px-2 py-2 rounded-lg font-semibold cursor-pointer" href={`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${window.location.href}`}>
                                    Tumblr
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white px-2 py-2 rounded-lg font-semibold cursor-pointer" href={`https://www.instagram.com/?url=${window.location.href}`}>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white px-2 py-2 rounded-lg font-semibold cursor-pointer" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white px-2 py-2 rounded-lg font-semibold cursor-pointer" href={`https://twitter.com/intent/tweet?url=${window.location.href}`}>
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a className="bg-primary color-white px-2 py-2 rounded-lg font-semibold cursor-pointer" href={`https://www.linkedin.com/shareArticle?url=${window.location.href}`}>
                                    LinkedIn
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

                        <span>{data.published}</span>
                    </div>
                    
                    <div className="article-tags">
                        <h2 className="text-xl font-bold">
                            Tags
                        </h2>

                        <ul className="flex gap-2 py-2">
                            {
                                data.tags.map((tag, index) => (
                                    <li key={index}>
                                        <a className="bg-primary color-white px-2 py-2 rounded-lg font-semibold cursor-pointer" href={`/tags/${tag}`}>
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