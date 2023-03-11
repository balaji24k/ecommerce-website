import { Outlet } from "react-router-dom";
import TopNavBar from "../TopNavBar/TopNavBar";


const Root = () => {
    return (
        <>
            <TopNavBar/>
            <Outlet/>
        </>
    );
};

export default Root;