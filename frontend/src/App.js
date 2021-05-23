import './App.css';
import AddItem from "./seller/AddItem";
import UpdateItem from "./seller/UpdateItem";
import ItemList from "./seller/ItemList";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import ItemNavigation from "./seller/ItemNavigation";

function App() {
  return (
      <Router>
          <div className="app">

              <ItemNavigation/>
              <Route path="/add" exact component={AddItem}/>
              <Route path="/" exact component={ItemList}/>


          </div>
      </Router>

  );
}

export default App;
