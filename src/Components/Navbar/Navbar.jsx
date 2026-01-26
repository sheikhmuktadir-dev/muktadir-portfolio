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
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = ""; // enable scroll
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [navToggle]);

  return (
    <nav className={Style.navBar} id="top">
      <div className="container">
        <div className={Style.navLogoArea}>
          <Link to="/" className={Style.navLogo}>
            <span>Sheikh-</span>
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
          <button
            className={Style.navBarClose}
            onClick={() => setNavToggle(false)}
          >
            <IoMdClose />
          </button>
          <ul className={Style.navList}>
            {navLinks?.map((list, index) => {
              return (
                <li className={Style.navItem} key={index || list.label}>
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
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
