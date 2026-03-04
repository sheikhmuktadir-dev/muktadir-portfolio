import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <div className="lines-pattern">
          <div className="line-pattern"></div>
          <div className="line-pattern"></div>
          <div className="line-pattern"></div>
          <div className="line-pattern mobile-hide"></div>
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
