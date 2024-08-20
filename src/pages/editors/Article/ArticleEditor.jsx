import "./ArticleEditor.css";

import { useEffect, useState } from "react";

import { EditorWindow } from "../../../components";
import { Article } from "../../Article";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api";
import { useStorage } from "../../../hooks";

function ArticleEditor() {
    let params = useParams();
    let existingId = params.id;
    let navigate = useNavigate();
    let storage = useStorage();

    let user = storage.get("user");

    useEffect(() => {
        async function createNewDraftArticle() {
            if (existingId) {
                return () => {};
            }

            let newArticleData = await api.editor.createNewDraft({
                author: user.username,
                tags: ["article"]
            });
            let newArticleId = newArticleData.id;

            navigate(`/editor/article/${newArticleId}`);
        }

        createNewDraftArticle();
    }, [existingId, navigate, user]);

    let [articleId, setArticleId] = useState(0);
    let [articleName, setArticleName] = useState("");
    let [articleContent, setArticleContent] = useState("");
    let [articleImage, setArticleImage] = useState("");
    let [articleAuthor, setArticleAuthor] = useState("");
    let [articlePublished, setArticlePublished] = useState("");
    let [articleTags, setArticleTags] = useState([]);

    useEffect(() => {
        if (!existingId) {
            return;
        }

        async function fetchArticle() {
            let article = await api.articles.getArticle(existingId);

            setArticleId(article.id);
            setArticleName(article.name);
            setArticleContent(article.content);
            setArticleImage(article.image);
            setArticleAuthor(article.author);
            setArticlePublished(article.publishedDate);
            setArticleTags(article.tags);
        }

        fetchArticle();
    }, [existingId, setArticleId, setArticleName, setArticleContent, setArticleImage, setArticleAuthor, setArticlePublished, setArticleTags]);

    async function updateDraft() {
        if (!existingId) {
            return;
        }

        let articleData = {
            name: articleName,
            content: articleContent,
            image: articleImage,
            author: articleAuthor,
            publishedDate: articlePublished,
            tags: articleTags
        };

        await api.editor.updateDraftArticle(existingId, articleData);
    }

    async function publishDraft() {
        if (!existingId) {
            return;
        }

        await api.editor.publishDraftArticle(existingId);
    }

    return (
        <div className="article-editor">
            <EditorWindow
                title={articleName}
                setTitle={setArticleName}
                content={articleContent}
                setContent={setArticleContent}
                setImage={setArticleImage}
                updateDraft={updateDraft}
                publishDraft={publishDraft}
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