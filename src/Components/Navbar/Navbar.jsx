import { Link } from "react-router-dom";
import Style from "./navbar.module.css";
import { navLinks } from "../../Data/Data";
import { BsListNested } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    if (navToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [navToggle]);

  return (
    <nav className={Style.navBar} id="top">
      <div className="container">
        <div className={Style.navBarInner}>
          <div className={Style.navLogoArea}>
            <Link to="/" className={Style.navLogo}>
              <span>Muktadir.</span>
            </Link>

            <button
              onClick={() => setNavToggle(true)}
              className={Style.navBarToggle}
            >
              <BsListNested />
            </button>
          </div>

          <div
            className={`${Style.navMenu} ${navToggle ? Style.navMenuShow : ""}`}
          >
            {/* CLOSE BUTTON */}
            <button
              className={Style.navBarClose}
              onClick={() => setNavToggle(false)}
            >
              <IoMdClose />
            </button>

            <ul className={Style.navList}>
              {navLinks?.map((list, index) => (
                <li className={Style.navItem} key={index}>
                  {list.index ? (
                    <Link
                      to={list.path}
                      onClick={() => setNavToggle(false)}
                      className={Style.navLink}
                    >
                      {list.label}
                    </Link>
                  ) : (
                    <a
                      href={list.path}
                      onClick={() => setNavToggle(false)}
                      className={Style.navLink}
                    >
                      {list.label}
                    </a>
                  )}
                </li>
              ))}

              <li className={Style.navItem}>
                <a
                  href="/Sheikh_Muktadir_Frontend_reactjs.pdf"
                  download
                  className={Style.navBarButton}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
