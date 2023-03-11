import React from "react";
import {
  Table,
  Button,
  NavLink
} from "react-bootstrap";
import classes from "./Home.module.css";

const tours = [
  { date: "JUL16", city: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL17", city: "TORONTO,ON", venue: "BUDWEISER STAGE" },
  { date: "JUL18", city: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
  { date: "JUL19", city: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
  { date: "JUL20", city: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
  { date: "JUL21", city: "CONCORD, CA", venue: "CONCORD PAVILION" },
];
const Home = () => {
  return (
    <>
      <div className={classes.title}>
        <NavLink>
          <p>Get Our Latest Album</p>
        </NavLink>
        <NavLink>
          <img
            src="https://cdn-icons-png.flaticon.com/512/107/107094.png"
            alt="music"
          />
        </NavLink>
      </div>

      <h3 className={classes.h3}>TOURS</h3>
      <Table className="border d-grid align-items-center justify-content-center">
        <tbody>
          {tours.map((tour) => (
            <tr>
              <td>{tour.date}</td>
              <td>{tour.city}</td>
              <td>{tour.venue}</td>
              <td>
                <Button className="btn-dark btn-outline-info">
                  BUY TICKET
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default Home;