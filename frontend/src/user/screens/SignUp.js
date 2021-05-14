import './SignUp.css';
import {Link} from "react-router-dom";

const Signup = () =>{
    return (
        <div className="SignUp-page">
            <form>
                <h2>Register</h2>
                <input type="text" name="name" required
                       placeholder="Name"/>

                <input type="email" name="email" required
                       placeholder="Email"  />

                <input type="password" name="password" required autoComplete="on"
                       placeholder="Password"  />

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/signin">Login</Link>
                </div>
            </form>
        </div>
    )
};

export default Signup