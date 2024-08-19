import "./EditorWindow.css";
import {
    // BiBold,
    BiImage,
    // BiItalic,
    BiSave,
    // BiUnderline,
    BiWorld
} from "react-icons/bi";
import { useRef } from "react";

function EditorWindow({
    title, setTitle,
    content, setContent,
    setImage,
    updateDraft,
    publishDraft
}) {
    let titleRef = useRef(null);
    let contentRef = useRef(null);

    function contentUpdate(event) {
        setContent(contentRef.current.value);
    }

    function sendImageURL(file) {
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");

        let image = new Image();
        image.src = URL.createObjectURL(file);

        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;

            context.drawImage(image, 0, 0, image.width, image.height);

            let dataURL = canvas.toDataURL("image/png");
            setImage(dataURL);
        }
    }

    function updateThumbnail(event) {
        let fileUploader = document.createElement("input");
        fileUploader.type = "file";
        fileUploader.accept = "image/*";
        fileUploader.click();

        fileUploader.onchange = (event) => {
            let file = event.target.files[0];
            sendImageURL(file);
        }
    }

    return (
        <div className="editor-window">
            <div className="editor-toolbar">
                <div className="toolbar-section">
                    <input className="toolbar-input" type="text" placeholder="Title" onChange={() => setTitle(titleRef.current.value)} ref={titleRef} value={title} />
                </div>

                {/* <div className="toolbar-section">
                    <button className="toolbar-button"><BiBold /></button>
                    <button className="toolbar-button"><BiItalic /></button>
                    <button className="toolbar-button"><BiUnderline /></button>
                </div> */}

                <div className="toolbar-section">
                    <button className="toolbar-button" onClick={updateThumbnail}>
                        <BiImage />
                    </button>
                </div>

                <div className="toolbar-section">
                    <button className="toolbar-button" onClick={updateDraft}>
                        <BiSave />
                    </button>
                    <button className="toolbar-button" onClick={publishDraft}>
                        <BiWorld />
                    </button>
                </div>
            </div>

            <div className="editor-content">
                <textarea className="editor-textarea" placeholder="Start writing your article here..." onChange={contentUpdate} ref={contentRef} value={content}></textarea>
            </div>
        </div>
    );
}

export default EditorWindow;