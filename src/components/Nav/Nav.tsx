"use client";

import Image from "next/image";
import styles from "./Nav.module.css";
import classNames from "classnames";
import { useState } from "react";
import Link from "next/link";
import Routes from "@/app/Routes";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setAuthState } from "@/store/features/authSlice";

const Nav = () => {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const menuListClass = classNames({
    [styles.menuList]: true,
    [styles.visible]: isVisible,
  });

  return (
    <nav className={styles.nav}>
      <div className={classNames(styles.navLogo, "logo")}>
        <Image
          className={styles.logoImage}
          alt="Skypro logo"
          src="/img/logo.png"
          width={114}
          height={17}
        />
      </div>

      <div
        className={classNames(styles.navBurger, "burger")}
        onClick={() => setIsVisible((prev) => !prev)}
      >
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
            {isAuth ? (
              <a onClick={() => dispatch(setAuthState(false))}>Выйти</a>
            ) : (
              <Link className={styles.menuLink} href={Routes.SIGNIN}>
                Войти
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
