import { useContext } from "react";
import { Container, Navbar, Nav, Card } from "react-bootstrap";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";
import classes from "./TopNavBar.module.css";
import AuthContext from "../Pages/auth-context";

const TopNavBar = () => {
  const authCtx = useContext(AuthContext)
  return (
    <>
      <Navbar
        bg="black"
        expand="sm"
        variant="dark"
        sticky="top"
        className="border border-white"
      >

      <Navbar.Brand>
          <img
            className={classes.img}
            src="https://www.pngfind.com/pngs/m/29-290389_e-commerce-website-logo-png-download-e-commerce.png"
            alt="Ecommerce logo"
          />
      </Navbar.Brand>
        <Container className="justify-content-center ">
          <Nav style={{ fontSize: "20px", color: "white" }}>
            <NavLink to="/" className={classes.font} style={{ color: "white" }}>
              HOME
            </NavLink>

            {authCtx.isLoggedIn && (
              <NavLink
                to="/store"
                className={classes.font}
                style={{ color: "white" }}
              >
                STORE
              </NavLink>
            )}

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

            {!authCtx.isLoggedIn && (
              <NavLink
                to="/LOGIN"
                className={classes.font}
                style={{ color: "lightgreen" }}
              >
                LOGIN
              </NavLink>
            )}

            {authCtx.isLoggedIn && (
              <NavLink
                to="/HOME"
                className={classes.font}
                style={{ color: "Red" }}
                onClick={authCtx.logout}
              >
                LOGOUT
              </NavLink>
            )}

          </Nav>
        </Container>
        {authCtx.isLoggedIn && (<Cart/>)}
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