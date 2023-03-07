import React,{useState} from "react";
import { Container, Button } from "react-bootstrap";
import MainDetails from "./Components/ProductDetails/MainDetails";
import TopNavBar from "./Components/TopNavBar/TopNavBar";
import BottomNavBar from "./Components/BottomNavBar/BottomNavBar";
import classes from "./App.module.css";
import CartContext from "./Store/CartContext";

const App = () => {
  const [cartList,setCartList] = useState([]);
  return (
    <>
    <CartContext.Provider value={{cartList,setCartList}}>
      <TopNavBar />
      <MainDetails />
      <Container className={classes.button}>
        <Button variant="secondary" size="lg" >See the Cart</Button>
      </Container>
      <BottomNavBar/>
    </CartContext.Provider>
    </>
  );
}

export default App;
