import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={(
                        <div>
                            <h1>Landing Page</h1>
                            <h2>Site Indexing</h2>
                            <ul>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signup">Signup</Link></li>
                            </ul>
                        </div>
                    )} />
                    <Route path="/events" element={"Events Page"} />
                    <Route path="/events/:id" element={"Event Detail Page"} />
                    <Route path="/login" element={"Login Page"} />
                    <Route path="/signup" element={"Signup Page"} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
