import Style from "./hero.module.css";
import { heroData } from "../../Data/Data";
import Image from "/images/circle.svg";
import { socialLinks } from "../../Data/Data";

export default function Hero() {
  return (
    <section className={Style.heroSection}>
      <div className="container">
        <div className={Style.heroInner}>
          {/* hero image area */}
          <div className={Style.heroImageArea}>
            <img
              src={heroData?.image?.src || Image}
              alt={heroData?.image?.alt || "circle image"}
              className={Style.heroImage}
            />
          </div>

          {/* hero large heading */}
          <h1 className={Style.heroTitle}>
            <span>{heroData?.name?.first || "Sheikh"}</span>
            <span>{heroData?.name?.last || "Muktadir"}</span>
          </h1>

          {/* hero social links */}
          <div className={Style.heroSocialFlex}>
            <p className={Style.heroSubheading}>
              <span>{heroData?.role?.text}</span>
            </p>
            <div className={Style.socialFlex}>
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label || index}
                    href={item.url}
                    className={Style.socialBtn}
                    aria-label={item.label}
                    target={item.label === "Email" ? "" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
