import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/Assets/CSS/custom.css";
import ExploreProducts from "./ExploreProducts/ExploreProducts";
import Register from "./Register/Register";
import Home from "./Pages/Home/Home";
import Header from "./Shared/Header";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
