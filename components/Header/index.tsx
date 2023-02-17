import Link from "next/link";
import classes from "./style.module.scss";

import Avatar from "./Avatar";
import Cart from "./Cart";
import { useState } from "react";

const links = [
  { text: "collection", href: "/colection" },
  { text: "men", href: "/men" },
  { text: "women", href: "/women" },
  { text: "about", href: "/about" },
  { text: "contact", href: "/contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <img className={classes.menuIcon} src="/images/icon-menu.svg" alt="" onClick={() => setIsOpen(true)} />
        <Link href="/" className={classes.logo}>
          sneakers
        </Link>
        {isOpen && <div className={classes.navOverlay} onClick={() => setIsOpen(false)}></div>}
        <nav className={`${classes.nav} ${isOpen ? classes.open : ""}`}>
          <img className={classes.closeIcon} src="/images/icon-close.svg" alt="" onClick={() => setIsOpen(false)} />
          <ul className={`${classes.navList} ${isOpen ? classes.open : ""}`}>
            {links.map((link) => (
              <li key={link.text} className={classes.navItem}>
                <Link href={link.href} className={classes.navItemContent}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Cart />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
