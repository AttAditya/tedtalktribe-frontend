import "./variables.css";
import "tailwindcss/tailwind.css";

import { Navbar } from "./components";
import { HomePage, ArticlePage } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="app mt-20 flex flex-col items-center">
            <Navbar />
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/article/:id" element={<ArticlePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
