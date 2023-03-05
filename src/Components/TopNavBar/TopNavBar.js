import { Container, Navbar, Button } from "react-bootstrap";

const TopNavBar = () => {
  return (
    <>
      <Navbar bg="black" expand="sm" variant="dark" sticky="top">
        <Container className= "justify-content-center">
          <Navbar.Brand href="#home">HOME</Navbar.Brand>
          <Navbar.Brand href="#store">STORE</Navbar.Brand>
          <Navbar.Brand href="#about">ABOUT</Navbar.Brand>
        </Container>
        <Button className="justify-content-end me-4 btn btn-dark btn-outline-warning text-white">
          Cart
        </Button>
      </Navbar>
    </>
  );
};
export default TopNavBar;