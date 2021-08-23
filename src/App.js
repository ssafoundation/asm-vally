import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./common/Header/Header";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Store from "./components/Store/Store";
function App() {
  return (
    <Router>
      <>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:name">
            <SingleProduct />
          </Route>
          <Route exact path="/:key">
            <Store />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
