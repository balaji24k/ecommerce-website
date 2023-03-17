import { Container, Navbar, Nav, Card } from "react-bootstrap";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";
import classes from "./TopNavBar.module.css";

const TopNavBar = () => {
  return (
    <>
      <Navbar
        bg="black"
        expand="sm"
        variant="dark"
        sticky="top"
        className="border border-white"
      >
        <Container className="justify-content-center ">
          <Nav style={{ fontSize: "20px", color: "white" }}>
            <NavLink to="/" className={classes.font} style={{ color: "white" }}>
              HOME
            </NavLink>
            <NavLink
              to="/store"
              className={classes.font}
              style={{ color: "white" }}
            >
              STORE
            </NavLink>
            <NavLink
              to="/about"
              className={classes.font}
              style={{ color: "white" }}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/ContactUs"
              className={classes.font}
              style={{ color: "white" }}
            >
              CONTACT-US
            </NavLink>
          </Nav>
        </Container>
        <Cart/>
      </Navbar>
      <div className={classes.title}>
        <Card className="shadow-lg">
          <p>The Generics</p>
        </Card>
      </div>
    </>
  );
};
export default TopNavBar;