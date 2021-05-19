import './SighIn.css';
import {Link} from "react-router-dom";

const SignIn = () =>{
    return (
        <div className="login-page">
            <div className="login-image"></div>
            <form >
                <h2>Login</h2>
                <select className="user-select" name="userType">
                    <option value="customer">Customer</option>
                    <option value="seller">Seller</option>
                </select>
                <input type="email" name="email" required
                       placeholder="Email" />

                <input type="password" name="password" required autoComplete="on"
                       placeholder="Password" />

                <div className="row">
                    <button className="login-btn" type="submit">Login</button>
                    <Link className="login-reg-btn" to="/signup">Register</Link>
                </div>
            </form>
        </div>
    )
};

export default SignIn