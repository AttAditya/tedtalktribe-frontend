import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
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
                            <input type="email" id="email" name="email" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <button type="submit">Sign Up</button>
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