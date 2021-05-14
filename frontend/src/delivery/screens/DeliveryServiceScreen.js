import {Link} from "react-router-dom";

const DeliveryServiceScreen = () =>{
    return (
        <div>
            <h2>DeliveryServiceScreen</h2>
            <div>
                <Link to="/payment">
                    <button>Payment</button>
                </Link>
            </div>
        </div>
    )
};

export default DeliveryServiceScreen