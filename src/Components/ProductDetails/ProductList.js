import classes from "./ProductList.module.css";
import React, { Button } from "react-bootstrap";

const ProductList = (props) => {
  return (
    <div className={classes.div}>
      <header>{props.title}</header>
      <img src={props.imageUrl} alt={props.title} />

      <span>
        <ul>
          Rs{props.price}
          <Button>Add To Cart</Button>
        </ul>
      </span>
    </div>
  );
};
export default ProductList;