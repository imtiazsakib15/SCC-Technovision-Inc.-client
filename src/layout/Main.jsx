import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
