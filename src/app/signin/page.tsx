"use client";

import { useAppDispatch } from "@/store/store";
import Wrapper from "@/components/Wrapper/Wrapper";
import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames";
import Link from "next/link";
import Routes from "../Routes";
import { useState } from "react";
import { setUserAuth } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
import Toast, { handleError, handleSuccess } from "@/components/Toast/Toast";

export default function Signin() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Переадресовывать, если уже авторизован
  const signup = async () => {
    try {
      const result = await dispatch(setUserAuth({ email: email, password: password })).unwrap();
      handleSuccess("Вы авторизованы");
      router.push(Routes.BASE);
    } catch (error) {
      if (error instanceof Error) {
        handleError(error.message);
      } else {
        handleError("Произошла непредвиденная ошибка");
      }
    }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={classNames(styles.ModalInput, styles.Password)}
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
      <Toast />
    </Wrapper>
  );
}
