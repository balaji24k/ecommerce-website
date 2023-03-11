import React,{useState} from "react";
import MainDetails from "./Components/ProductDetails/MainDetails";
import BottomNavBar from "./Components/BottomNavBar/BottomNavBar";
import CartContext from "./Store/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/Pages/About";
import Root from "./Components/Pages/Root";


const router = createBrowserRouter ([
  {
    path:'/',
    element :  <Root/>,
    children : [
      {path : '/', element : <MainDetails/>},
      {path : '/ABOUT', element : <About/>}
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