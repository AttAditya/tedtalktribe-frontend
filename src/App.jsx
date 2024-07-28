import "./variables.css";
import "tailwindcss/tailwind.css";

import { Navbar } from "./components";
import { HomePage, ArticlePage, TaggedPage } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="app mt-20 flex flex-col items-center">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/article/:id" element={<ArticlePage />} />
                    <Route path="/category/:tag" element={<TaggedPage />} />
                    <Route path="/tagged/:tag" element={<TaggedPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
