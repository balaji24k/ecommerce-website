import React, { useState } from "react";

const ProductContext = React.createContext({
  title: "",
  imageUrl: "",
  rating: 0,
  price: 0,
  detail: "",
  changeDetail: () => {},
});

export const ProductContextProvider = (props) => {
  const [product, setProduct] = useState({
    title: "",
    imageUrl: "",
    rating: 0,
    price: 0,
    detail: "",
  });

  const changeDetailHandler = (item) => {
    console.log("show item when call context");
    setProduct({
      title: item.title,
      imageUrl: item.imageUrl,
      rating: item.rating,
      detail: item.detail,
      price: item.price,
    });
  };
  return (
    <ProductContext.Provider
      value={{
        title: product.title,
        imageUrl: product.imageUrl,
        rating: product.rating,
        detail: product.detail,
        price: product.price,
        changeDetail: changeDetailHandler,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;