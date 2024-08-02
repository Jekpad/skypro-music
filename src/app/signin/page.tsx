"use client";

import { useAppSelector, useAppDispatch } from "@/store/store";
import Wrapper from "@/components/Wrapper/Wrapper";
import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames";
import Link from "next/link";
import Routes from "../Routes";

export default function Signin() {
  const authState = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  // Переадресовывать, если уже авторизован
  const signup = () => {
    // Пробуем авторизоваться и получить базовые сведения
    // После этого получаем access/refresh token
  };

  return (
    <Wrapper>
      <div className={styles.Wrapper}>
        <div className={styles.ContainerEnter}>
          <div className={styles.ModalBlock}>
            <div className={styles.ModalFormLogin}>
              <div className={styles.ModalLogo}>
                <Link href={Routes.BASE}>
                  <Image src="/img/logo_modal.png" alt="Skyrpo logo" width={140} height={21} />
                </Link>
              </div>
              <input
                className={classNames(styles.ModalInput, styles.Login)}
                type="text"
                name="email"
                placeholder="Почта"
              />
              <input
                className={classNames(styles.ModalInput, styles.Password)}
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <button className={styles.ModalBtnEnter} onClick={signup}>
                <a>Войти</a>
              </button>
              <button className={styles.ModalBtnSignup}>
                <Link href={Routes.SIGNUP}>Зарегистрироваться</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
