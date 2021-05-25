import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomeScreen from "./cart/screens/HomeScreen";
import CartScreen from "./cart/screens/CartScreen";
import ProductScreen from "./cart/screens/ProductScreen";
import SignUp from "./user/screens/SignUp"
import SignIn from "./user/screens/SignIn"
import Navbar from "./cart/components/Navbar";
import SellerHomeScreen from "./seller/ItemList";
import DeliveryServiceScreen from "./delivery/screens/DeliveryServiceScreen"
import PaymentScreen from "./payment/screens/PaymentScreen"
import SearchScreen from "./cart/screens/SearchScreen"
import Search from "./cart/components/Search"
import ItemList from "./seller/ItemList";
import AddItem from "./seller/AddItem";
import PayPalPayment from "./payment/screens/PayPalPayment";
import StripPay from "./payment/screens/Stripe";
import MobilePayment from "./payment/screens/MobilePayment";

/**
 * main app routes
 * @returns {*}
 * @constructor
 */

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
              <Route exact path="/history" component={SearchScreen}/>
              <Route path="/addItem" exact component={AddItem}/>
              <Route path="/itemList" exact component={ItemList}/>
              <Route path="/search/name/:name?" component={SearchScreen} exact/>
              <Route path="/search/category/:category" component={SearchScreen} exact/>
              <Route path="/search/category/:category/name/:name" component={SearchScreen} exact/>
              <Route exact path="/payment" component={PaymentScreen}/>
              <Route exact path="/stripepayment" component={StripPay}/>
              <Route exact path="/mobilepayment" component={MobilePayment}/>
              <Route exact path="/paypalpayment" component={PayPalPayment}/>
          </Switch>
        </main>
      </Router>
             // <ItemNavigation/>

  );

}

export default App;
