import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <div class="lines-pattern">
          <div class="line-pattern"></div>
          <div class="line-pattern"></div>
          <div class="line-pattern"></div>
          <div class="line-pattern mobile-hide"></div>
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
