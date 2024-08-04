import './Login.css';

import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../../api';
import { useStorage } from '../../../hooks';

function Login() {
    let usernameRef = useRef("");
    let passwordRef = useRef("");

    let navigate = useNavigate();
    let storage = useStorage();

    async function loginAction(event) {
        event.preventDefault();
        
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;

        let response = await api.auth.login(username, password);
        let user_data = response.user;

        storage.set("user", user_data);
        navigate("/dashboard");
    }

    useEffect(() => {
        if (storage.has("user")) {
            navigate("/dashboard");
        }
    }, [navigate, storage]);

    return (
        <div className="login">
            <div className="auth-container">
                <div className="auth-box text-center">
                    <div className="auth-title">
                        <h1 className='text-5xl'>Login</h1>
                    </div>

                    <form className="auth-form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="username" id="username" name="username" placeholder="username" ref={usernameRef} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Password" ref={passwordRef} />
                        </div>

                        <div className="form-group">
                            <button type="submit" onClick={loginAction}>
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="auth-swap text-center italic">
                        <p>Don't have an account? <Link to="/signup" className='color-link font-bold'>Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;