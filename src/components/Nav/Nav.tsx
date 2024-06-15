import Image from "next/image";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={`${styles.mainNav} nav`}>
      <div className={`${styles.navLogo} logo`}>
        <Image className={styles.logoImage} alt="Skypro logo" src="/img/logo.png" width={114} height={17} />
      </div>
      <div className={`${styles.navBurger} burger`}>
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </div>
      <div className={`${styles.navMenu} menu`}>
        <ul className={styles.menuList}>
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
