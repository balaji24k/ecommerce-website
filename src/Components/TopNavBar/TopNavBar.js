import { Container, Navbar } from "react-bootstrap";
import Cart from "./Cart";

const TopNavBar = () => {
  return (
    <>
      <Navbar bg="black" expand="sm" variant="dark" sticky="top">
        <Container className= "justify-content-center">
          <Navbar.Brand href="#home">HOME</Navbar.Brand>
          <Navbar.Brand href="#store">STORE</Navbar.Brand>
          <Navbar.Brand href="#about">ABOUT</Navbar.Brand>
        </Container>
        <Cart/>
      </Navbar>
      
    </>
  );
};
export default TopNavBar;