import Style from "./footer.module.css";
import { FaCircleArrowUp } from "react-icons/fa6";
import { footerNavLinks } from "../../Data/Data";
import { socialLinks } from "../../Data/Data";

export default function Footer() {
  return (
    <footer className={Style.footerMain} id="contact">
      <div className="container">
        <div className={Style.footerGrid}>
          <div className={Style.footerTopFlex}>
            <a href="tel:+918093668843" className={Style.footerTalk}>
              Let's Talk
            </a>
            <div className={Style.socialFlex}>
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.url}
                    className={Style.socialBtn}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <a href="#top" className={Style.footerbtnTop}>
              <FaCircleArrowUp />
              <span>Back To Top</span>
            </a>
          </div>

          <div className={Style.footerHeading}>
            <span>Let's</span>
            <span>Connect</span>
          </div>
        </div>
      </div>

      <div className={Style.footerBottom}>
        <div className="container">
          <div className={Style.footerBottomFlex}>
            <p className={Style.footerDesigner}>
              Designed by <span>Sheikh Muktadir</span>.
            </p>
            <ul className={Style.footerList}>
              {footerNavLinks?.map((items, index) => {
                return (
                  <li className={Style.footerItem} key={items.name || index}>
                    <a href={items.href} className={Style.footerLink}>
                      {items.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
