"use client";

import Image from "next/image";
import styles from "./Nav.module.css";
import classNames from "classnames";
import { useState } from "react";

const Nav = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const menuListClass = classNames({
    [styles.menuList]: true,
    [styles.visible]: isVisible,
  });

  return (
    <nav className={styles.nav}>
      <div className={classNames(styles.navLogo, "logo")}>
        <Image className={styles.logoImage} alt="Skypro logo" src="/img/logo.png" width={114} height={17} />
      </div>

      <div className={classNames(styles.navBurger, "burger")} onClick={() => setIsVisible((prev) => !prev)}>
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </div>

      <div className={styles.menu}>
        <ul className={menuListClass}>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="#">
              Главное
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="#">
              Мой плейлист
            </a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="../signin.html">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
