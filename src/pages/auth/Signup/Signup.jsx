import { Link } from "react-router-dom";
import "./Signup.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import { useStorage } from "../../../hooks";

function Signup() {
    let usernameRef = useRef();
    let passwordRef = useRef();

    let navigate = useNavigate();
    let storage = useStorage();

    async function signupAction(event) {
        event.preventDefault();
        
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;

        try {
            let response = await api.auth.signup(username, password);
            let user_data = response.user;

            storage.set("user", user_data);
            navigate("/dashboard");
        } catch (error) {
            alert("An error occurred while signing up. Please try again.");
        }
    }

    return (
        <div className="signup">
            <div className="auth-container">
                <div className="auth-box text-center">
                    <div className="auth-title">
                        <h1 className="text-5xl">Sign Up</h1>
                    </div>

                    <form className="auth-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email" ref={usernameRef} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Password" ref={passwordRef} />
                        </div>

                        <div className="form-group">
                            <button type="submit" onClick={signupAction}>Sign Up</button>
                        </div>
                    </form>

                    <div className="auth-swap text-center italic">
                        <p>Already have an account? <Link to="/login" className='color-link font-bold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;