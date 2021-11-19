import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/Assets/CSS/custom.css";
import ExploreProducts from "./ExploreProducts/ExploreProducts";

import Home from "./Pages/Home/Home";
import Header from "./Shared/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <ExploreProducts></ExploreProducts>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
