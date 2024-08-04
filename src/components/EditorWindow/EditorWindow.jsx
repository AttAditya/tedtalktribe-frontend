import { BiBold, BiHeading, BiItalic, BiSave, BiUnderline, BiWorld } from "react-icons/bi";
import "./EditorWindow.css";
import { useRef } from "react";

function EditorWindow({ title, setTitle, content, setContent }) {
    let titleRef = useRef(null);
    let contentRef = useRef(null);

    function contentUpdate(event) {
        setContent(contentRef.current.value);
    }

    return (
        <div className="editor-window">
            <div className="editor-toolbar">
                <div className="toolbar-section">
                    <input className="toolbar-input" type="text" placeholder="Title" onChange={() => setTitle(titleRef.current.value)} ref={titleRef} value={title} />
                </div>

                <div className="toolbar-section">
                    <button className="toolbar-button"><BiHeading /></button>
                    <button className="toolbar-button"><BiBold /></button>
                    <button className="toolbar-button"><BiItalic /></button>
                    <button className="toolbar-button"><BiUnderline /></button>
                </div>

                <div className="toolbar-section">
                    <button className="toolbar-button">
                        <BiSave />
                    </button>
                    <button className="toolbar-button">
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