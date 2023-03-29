import { useContext } from "react";
import classes from "./ProductPage.module.css";
import ProductContext from "../../Store/storeContext";

const ProductView = () => {
  const productCtx = useContext(ProductContext);
  return (
    <>
      <h1>Product Deatils</h1>
      <div className={classes.product}>
        <img src={productCtx.imageUrl} alt={productCtx.title} />
        <div className={classes.detail}>
          <h3>{productCtx.title}</h3>
          <h2>RS {productCtx.price.toFixed(2)}</h2>
          <span className={classes.rating}>
            Rating <span>{productCtx.rating}&#9733;</span>
          </span>
          <p>{productCtx.detail}</p>
        </div>
      </div>
    </>
  );
};

export default ProductView;