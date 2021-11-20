import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/Assets/CSS/custom.css";
import ExploreProducts from "./Pages/ExploreProducts/ExploreProducts";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Header from "./Shared/Header";
import AuthProvider from "./Context/AuthProvider";
import NotFound from "./Pages/NotFound/NotFound";
import AddProducts from "./Pages/AddProducts/AddProducts";
import Products from "./Pages/Products/Products";
import ConfirmOrders from "./Pages/ConfirmOrders/ConfirmOrders";
import Login from "./Pages/Login/Login";
import MyOrders from "./Pages/MyOrders/MyOrders";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import Footer from "./Shared/Footer";

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
            <Route path="/allProducts">
              <Products></Products>
            </Route>
            <PrivateRoute path="/addProducts">
              <AddProducts></AddProducts>
            </PrivateRoute>
            <PrivateRoute path="/orders/:id">
              <ConfirmOrders></ConfirmOrders>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
