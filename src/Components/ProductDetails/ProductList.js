import classes from "./ProductList.module.css";
import { Button } from "react-bootstrap";
import React,{useContext} from "react";
import CartContext from "../../Store/CartContext";
import { Link } from "react-router-dom";
import ProductContext from "../../Store/storeContext";

const ProductList = (props) => {

  const cartCtx = useContext(CartContext);
  const productCtx = useContext(ProductContext);

  const CartHandler = (id, title, imageUrl, price, quantity) => {
    const ItemList = {
      id,
      title,
      imageUrl,
      price,
      quantity:1,
    };

    let CurrentItem = false;
    let ModifiedCart=[];
    ModifiedCart = cartCtx.cartList.map((item) => {
      if (item.title === ItemList.title) {
        CurrentItem = true;
        item.quantity += 1;
        const emailStoredInLocalStorage = localStorage.getItem("email");
        const userEmail = emailStoredInLocalStorage
          ? emailStoredInLocalStorage.replace(/[^\w\s]/gi, "")
          : "";
          fetch(
            `https://crudcrud.com/api/ef6d8b646e634770a5c699a59715becc/${userEmail}/${item._id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: id,
                title: title,
                price: price,
                imageUrl: imageUrl,
                quantity: item.quantity,
              }),
            }
          )
            .then((response) => {
              console.log(response,"sameQuantityUpdated")
              if (!response.ok) {
                throw new Error("Failed to update item in cart");
              }
            })
            .catch((error) => console.error(error));
        }
        return item;
    });

    if (!CurrentItem) {
      console.log(ItemList,"beforePostInprodList");

      const emailStoredInLocalStorage = localStorage.getItem("email");
      const userEmail = emailStoredInLocalStorage
        ? emailStoredInLocalStorage.replace(/[^\w\s]/gi, "")
        : "";

        fetch(
          `https://crudcrud.com/api/ef6d8b646e634770a5c699a59715becc/${userEmail}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(ItemList),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to add item to cart");
            }
          })
          .catch((error) => console.error(error));
      }
  
      cartCtx.setCartList(ModifiedCart);

      // axios.post(`https://crudcrud.com/api/ef6d8b646e634770a5c699a59715becc/${userEmail}`,ItemList)
      //   .then((response) => {
      //     ModifiedCart.push(response.data);
      //     cartCtx.setCartList(ModifiedCart);
      //     console.log(response,"afterPost in ProdList")
      //   })
      //   .catch((error) => console.error(error));

    
    console.log(ModifiedCart,"Modified cart after post")

    
  };

  const ProductDetailHandler = (props) => {
    const ProductDetail = {
      title: props.title,
      imageUrl: props.imageUrl,
      price: props.price,
      rating: 4.2,
      detail: "Best album of the year",
    };
    productCtx.changeDetail(ProductDetail);
  };

  return (
    <div className={classes.div}>
      <header>{props.title}</header>
      <Link to={"/STORE/:id"}>
        <img 
          src={props.imageUrl} 
          alt={props.title}
          onClick={ProductDetailHandler.bind(null, props)}
        />
      </Link>

      <span>
      <ul>Rs{props.price}</ul>
        <Button
          className="btn-info"
          onClick={() => 
            CartHandler(
              props.id,
              props.title, 
              props.imageUrl, 
              props.price,
              props.quantity
            )}
        >
          ADD TO CART
        </Button>
      </span>
    </div>
  );
};
export default ProductList;