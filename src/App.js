import React from "react";
import { Container, Button } from "react-bootstrap";
import MainDetails from "./Components/ProductDetails/MainDetails";
import TopNavBar from "./Components/TopNavBar/TopNavBar";
import BottomNavBar from "./Components/BottomNavBar/BottomNavBar";
import classes from "./App.module.css";

const App = () => {
  return (
    <>
      <TopNavBar />
      <MainDetails />
      <Container className={classes.button}>
        <Button variant="secondary" size="lg" >See the Cart</Button>
      </Container>
      <BottomNavBar />
    </>
  );
}

export default App;
