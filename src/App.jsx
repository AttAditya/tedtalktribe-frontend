import "./variables.css";
import "tailwindcss/tailwind.css";
import "./App.css";

import { Navbar, Footer, Calendar } from "./components";
import {
    HomePage,
    LoginPage,
    SignupPage,
    Dashboard,
    ArticlePage,
    TaggedPage,
    ArticleEditorPage,
    NotFoundPage
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app mt-20 flex flex-col items-center">
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />

                    <Route path="/dashboard" element={<Dashboard />} />
                    
                    <Route path="/events" element={<Calendar />} />
                    
                    <Route path="/discover/articles" element={<TaggedPage />} />
                    <Route path="/article/:id" element={<ArticlePage />} />

                    <Route path="/editor/article" element={<ArticleEditorPage />} />
                    <Route path="/editor/article/:id" element={<ArticleEditorPage />} />

                    <Route path="/404" element={<NotFoundPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
