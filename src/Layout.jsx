import Navbar from "./components/Navbar.jsx";
import BottomMenu from "./components/BottomMenu.jsx";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <BottomMenu />
    </div>
  );
};

export default Layout;
