import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomeScreen from "./cart/screens/HomeScreen";
import CartScreen from "./cart/screens/CartScreen";
import ProductScreen from "./cart/screens/ProductScreen";
import SignUp from "./user/screens/SignUp"
import SignIn from "./user/screens/SignIn"
import Navbar from "./cart/components/Navbar";
import SellerHomeScreen from "./seller/screens/SellerHomeScreen";
import DeliveryServiceScreen from "./delivery/screens/DeliveryServiceScreen"
import PaymentScreen from "./payment/screens/PaymentScreen"

function App() {
  return (
      <Router>
        <Navbar/>
        <main className="app">
          <Switch>
              <Route exact path="/" component={HomeScreen}/>
              <Route exact path="/product/:id" component={ProductScreen}/>
              <Route exact path="/cart" component={CartScreen}/>
              <Route exact path="/signin" component={SignIn}/>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/seller" component={SellerHomeScreen}/>
              <Route exact path="/checkout" component={DeliveryServiceScreen}/>
              <Route exact path="/payment" component={PaymentScreen}/>

          </Switch>
        </main>
      </Router>
  );
}

export default App;
