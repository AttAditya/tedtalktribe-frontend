import "./ArticleEditor.css";

import { useEffect, useState } from "react";

import { EditorWindow } from "../../../components";
import { Article } from "../../Article";

function ArticleEditor() {
    let [articleId, setArticleId] = useState(0);
    let [articleName, setArticleName] = useState("");
    let [articleContent, setArticleContent] = useState("");
    let [articleImage, setArticleImage] = useState("");
    let [articleAuthor, setArticleAuthor] = useState("");
    let [articlePublished, setArticlePublished] = useState("");
    let [articleTags, setArticleTags] = useState([]);

    useEffect(() => {
        setArticleId(Math.floor(Math.random() * 1000));
        setArticleAuthor("John Doe");
        setArticlePublished("Not yet published");
        setArticleTags([]);
        setArticleImage("https://picsum.photos/800/400");
    }, []);

    return (
        <div className="article-editor">
            <EditorWindow
                title={articleName}
                setTitle={setArticleName}
                content={articleContent}
                setContent={setArticleContent}
            />

            <Article
                overwrite={true}
                articleId={articleId}
                articleName={articleName}
                articleContent={articleContent}
                articleImage={articleImage}
                articleAuthor={articleAuthor}
                articlePublished={articlePublished}
                articleTags={articleTags}
            />
        </div>
    );
}

export default ArticleEditor;