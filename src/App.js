import React,{useState} from "react";
import MainDetails from "./Components/ProductDetails/MainDetails";
import BottomNavBar from "./Components/BottomNavBar/BottomNavBar";
import CartContext from "./Store/CartContext";
import TopNavBar from "./Components/TopNavBar/TopNavBar";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/ContactUs";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductView from "./Components/Pages/ProductPage";
import { ProductContextProvider } from "./Store/storeContext";
import Login from "./Components/Pages/Login";



const App = () => {
  const [cartList,setCartList] = useState([]);
  return (
    <Switch>
      <CartContext.Provider value={{ cartList, setCartList}}>
        <ProductContextProvider>
          <TopNavBar/>
          <Route exact path="/">
            <Redirect to="/HOME" />
          </Route>
          <Route exact path="/HOME">
            <Home />
          </Route>
          <Route exact path="/STORE">
            <MainDetails />
            <BottomNavBar />
          </Route>
          <Route exact path="/STORE/:id">
            <ProductView />
          </Route>
          <Route exact path="/ABOUT">
            <About />
            <BottomNavBar />
          </Route>
          <Route exact path="/Contactus">
            <ContactUs />
            <BottomNavBar />
          </Route>
          <Route exact path="/LOGIN">
            <Login/>
          </Route>
        </ProductContextProvider>
      </CartContext.Provider>
    </Switch>
  );
}

export default App;