import React,{useState} from "react";
import MainDetails from "./Components/ProductDetails/MainDetails";
import BottomNavBar from "./Components/BottomNavBar/BottomNavBar";
import CartContext from "./Store/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/Pages/About";
import Root from "./Components/Pages/Root";
import Home from "./Components/Pages/Home";


const router = createBrowserRouter ([
  {
    path:'/',
    element :  <Root/>,
    children : [
      {path : '/STORE', element : <MainDetails/>},
      {path : '/ABOUT', element : <About/>},
      {path : '/HOME', element : <Home/>}
    ]

  }
]);


const App = () => {
  const [cartList,setCartList] = useState([]);
  return (
    <>
    <CartContext.Provider value={{cartList,setCartList}}>
      <RouterProvider router={router} />
      <BottomNavBar/>
    </CartContext.Provider>
    </>
  );
}

export default App;