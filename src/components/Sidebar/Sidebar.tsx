import Image from "next/image";
import styles from "./Sidebar.module.css";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Link from "next/link";
import Routes from "@/app/Routes";

const Sidebar = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        {isAuth && <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>}
        <Link href={isAuth ? "#" : Routes.SIGNIN} className={styles.sidebarIcon}>
          <svg>
            <use xlinkHref="img/icon/sprite.svg#icon-logout" />
          </svg>
        </Link>
      </div>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                alt="day's playlist"
                className={styles.sidebarImg}
                src="/img/playlist01.png"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                alt="day's playlist"
                className={styles.sidebarImg}
                src="/img/playlist02.png"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                alt="day's playlist"
                className={styles.sidebarImg}
                src="/img/playlist03.png"
                width={250}
                height={150}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
