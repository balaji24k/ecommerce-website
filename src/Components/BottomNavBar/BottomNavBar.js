import { Navbar } from "react-bootstrap";
import classes from "./BottomNavBar.module.css";

const BottomNavBar = () => {
  return (
    <div>
      <footer className={classes.items}>
        <h2>The Generics</h2>

        <div>
          <Navbar.Brand href="youtube">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
              alt="youtube"
            />
          </Navbar.Brand>
          <Navbar.Brand href="spotify">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
              alt="spotify"
            />{" "}
          </Navbar.Brand>
          <Navbar.Brand href="fb">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
              alt="fb"
            />
          </Navbar.Brand>
        </div>

      </footer>
    </div>
  );
};
export default BottomNavBar;