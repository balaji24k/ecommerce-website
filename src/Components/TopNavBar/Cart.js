import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import classes from "./Cart.module.css";

const cartElements = [
    {
      title: "Colors",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  
      quantity: 2,
    },
  
    {
      title: "Black and white Colors",
  
      price: 50,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  
      quantity: 3,
    },
  
    {
      title: "Yellow and Black Colors",
  
      price: 70,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  
      quantity: 1,
    },
  ];
  const Cart = (props) => {
    const [showItems, setShowItems] = useState(false);
    const ShowHandler = () => {
      setShowItems(true);
    };
  
    const handleClose = () => {
      setShowItems(false);
    };
  
    return (
      <>
        <Button
          className="justify-content-end me-4 btn btn-dark btn-outline-warning text-white"
          onClick={ShowHandler}
        >
          Cart
        </Button>

        <Modal className={classes.card} show={showItems} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title className={classes.cart}>Cart Items</Modal.Title>
            <Button onClick={handleClose} variant="dark-dark btn-outline-danger">
              X
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Table>
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                </tr>
              </thead>
              <tbody>
                {cartElements.map((item, id) => (
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
  
                    <Button className="btn-dark btn-outline-danger">
                      Remove
                    </Button>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </>
    );
  };

export default Cart;