import "./variables.css";
import "tailwindcss/tailwind.css";
import "./App.css";

import { Navbar, Footer } from "./components";
import {
    HomePage,
    ArticlePage,
    TaggedPage,
    PolicyPage,
    NotFoundPage
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app mt-20 flex flex-col items-center pb-10">
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/category/:tag" element={<TaggedPage />} />
                    <Route path="/tagged/:tag" element={<TaggedPage />} />
                    <Route path="/tags/:tag" element={<TaggedPage />} />

                    <Route path="/article/:id" element={<ArticlePage />} />

                    <Route path="/policy" element={<PolicyPage />} />
                    <Route path="/terms" element={<PolicyPage />} />
                    <Route path="/tac" element={<PolicyPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
