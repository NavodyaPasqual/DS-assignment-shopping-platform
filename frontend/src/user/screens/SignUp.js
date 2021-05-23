import './SignUp.css';
import {Link} from "react-router-dom";

const Signup = () =>{
    return (
        <div className="SignUp-page">
            <div className="SignUp-image"></div>
            <form>
                <h2>Register</h2>
                <select className="user-select" name="userType">
                    <option value="customer">Customer</option>
                    <option value="seller">Seller</option>
                </select>
                <input type="text" name="name" required
                       placeholder="Name"/>

                <input type="email" name="email" required
                       placeholder="Email"  />

                <input type="password" name="password" required autoComplete="on"
                       placeholder="Password"  />

                <div className="row">
                    <button className="login-btn"  type="submit">Register</button>
                    <Link className="login-reg-btn" to="/signin">Login</Link>
                </div>
            </form>
        </div>
    )
};

export default Signup