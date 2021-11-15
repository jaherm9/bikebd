import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddEvent from "./components/Admin/AddEvent";
import ManageProduct from "./components/Admin/ManageProduct/ManageProduct";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact/Contact";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';

export const UserContext= createContext();
export const ProductContext= createContext();

function App() {
  const [loggedUser,setLoggedUser]=useState({})
  const [orderProduct,setOrderProduct]=useState({})

  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
    <ProductContext.Provider value={[orderProduct,setOrderProduct]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddEvent/>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <ManageProduct/>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout/>
          </PrivateRoute>
          <Route path="*">
            <h1 style={{textAlign: "center"}}>page not found</h1>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </ProductContext.Provider>  
    </UserContext.Provider>
  );
}


export default App;
