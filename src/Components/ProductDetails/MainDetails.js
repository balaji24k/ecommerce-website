import React, {useState, useContext} from "react";
import classes from "./MainDetails.module.css";
import ProductList from "./ProductList";
import { Container,Button, Modal, Table, ModalBody } from "react-bootstrap";
import CartContext from "../../Store/CartContext";


const productsArr = [
  {
    title: "Album 1",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  

  {
    title: "Album 2",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Album 3",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Album 4",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const MainDetails = () => {
  const cartCtx = useContext(CartContext);
  const [showItems, setShowItems] = useState(false);

  const ProductsDetails = productsArr.map((item) => (
    <ProductList
      title={item.title}
      imageUrl={item.imageUrl}
      price={item.price}
    />
  ));

  const ShowHandler = () => {
    setShowItems(true);
  };

  const handleClose = () => {
    setShowItems(false);
  };

  return (
    <>
      <div className={classes.title}>
          <h4>Music</h4>
        <span className={classes.products}>{ProductsDetails}</span>
      </div>
      <Container className={classes.button}>
        <Button className="btn-dark btn-outline-warning " onClick={ShowHandler}>
          See the Cart
        </Button>
      </Container>
      <Modal show={showItems} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className={classes.cart}>CartList</Modal.Title>
          <Button onClick={handleClose} variant="dark-dark btn-outline-danger">
            X
          </Button>
        </Modal.Header>
        <ModalBody>
          <Table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {cartCtx.cartList.map((item, id) => (
                <tr key={id}>
                  <td>
                    <img
                      className={classes.img}
                      src={item.imageUrl}
                      alt={item.title}
                    ></img>
                    {item.title}
                  </td>
                  <td>{item.price}.00</td>
                  <td className={classes.quantity}>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </>
  );
};

export default MainDetails;