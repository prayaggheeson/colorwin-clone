import Navbar from "./components/Navbar.jsx";
import BottomMenu from "./components/BottomMenu.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    
      <Navbar />
      <Outlet />
      <BottomMenu />
    </>
  );
};

export default Layout;
