import { useContext, useState, useEffect } from "react";
import { Button, Modal, Table, ModalBody } from "react-bootstrap";
import CartContext from "../../Store/CartContext";
import classes from "./Cart.module.css";
import axios from "axios";

const Cart = () => {

  const cartCtx = useContext(CartContext);

  const [showItems, setShowItems] = useState(false);


  let count = 0;
  cartCtx.cartList.map((item) => {
    count += item.quantity;
    return item;
  });

  const ShowHandler = () => {
    setShowItems(true);
  };

  const handleClose = () => {
    setShowItems(false);
  };

  useEffect(() => {
    const emailStoredInLocalStorage = localStorage.getItem("email");
    const userEmail = emailStoredInLocalStorage
      ? emailStoredInLocalStorage.replace(/[^\w\s]/gi, "")
      : "";

    console.log(userEmail,"emailIn Cart.JS");
    

    axios.get(`https://crudcrud.com/api/ef6d8b646e634770a5c699a59715becc/${userEmail}`)
      .then((response) => {
        console.log(response.data,"refreshed in cart");
        cartCtx.setCartList(response.data);

      })
     
      .catch((error) => console.error(error));
  }, []);


  return (
    <>
      <Button
        className="justify-content-end me-4 btn btn-dark btn-outline-warning text-white"
        onClick={ShowHandler}
      >
        Cart-{count}
      </Button>

      <Modal className={classes.card} show={showItems} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className={classes.cart}>Cart Items</Modal.Title>
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
              {cartCtx.cartList.map((item) => (

                <tr id={item._id}>
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

                  <Button className="btn-dark btn-outline-danger">
                    Remove
                  </Button>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button className="justify-content-right btn-light btn-outline-success">PURCHASE</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Cart;