import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/Assets/CSS/custom.css";

import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
