import classes from "./ProductList.module.css";
import { Button } from "react-bootstrap";
import React,{useContext} from "react";
import CartContext from "../../Store/CartContext";


const ProductList = (props) => {

  const cartCtx = useContext(CartContext);

  const CartHandler = (title, imageUrl, price) => {
    const ItemList = {
      title,
      imageUrl,
      price,
      quantity: 1,
    };

    let CurrentItem = false;
    let ModifiedCart = [];

    cartCtx.cartList.map((item) => {
      if (item.title === ItemList.title) {
        CurrentItem = true;
        item.quantity += 1;
        ModifiedCart.push(item);
      } else {
        ModifiedCart.push(item);
      }
      return item;
    });

    if (!CurrentItem) {
      ModifiedCart.push(ItemList);
    }

    cartCtx.setCartList(ModifiedCart);
  };

  return (
    <div className={classes.div}>
      <header>{props.title}</header>
      <img src={props.imageUrl} alt={props.title} />

      <span>
      <ul>Rs{props.price}</ul>
        <Button
          className="btn-info"
          onClick={() => CartHandler(props.title, props.imageUrl, props.price)}
        >
          ADD TO CART
        </Button>
      </span>
    </div>
  );
};
export default ProductList;