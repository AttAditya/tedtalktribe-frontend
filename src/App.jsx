import "./variables.css";
import "tailwindcss/tailwind.css";
import "./App.css";

import { Navbar, Footer } from "./components";
import { HomePage, ArticlePage, TaggedPage, PolicyPage } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app mt-20 flex flex-col items-center pb-10">
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/policy" element={<PolicyPage />} />
                    <Route path="/article/:id" element={<ArticlePage />} />
                    <Route path="/category/:tag" element={<TaggedPage />} />
                    <Route path="/tagged/:tag" element={<TaggedPage />} />
                    <Route path="/tags/:tag" element={<TaggedPage />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
