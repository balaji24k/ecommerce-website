import classes from "./ProductList.module.css";
import { Button } from "react-bootstrap";
import React,{useContext} from "react";
import CartContext from "../../Store/CartContext";
import { Link } from "react-router-dom";
import ProductContext from "../../Store/storeContext";

const ProductList = (props) => {

  const cartCtx = useContext(CartContext);
  const productCtx = useContext(ProductContext);

  const CartHandler = (id, title, imageUrl, price) => {
    const ItemList = {
      id,
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
          onClick={() => CartHandler(props.title, props.imageUrl, props.price)}
        >
          ADD TO CART
        </Button>
      </span>
    </div>
  );
};
export default ProductList;