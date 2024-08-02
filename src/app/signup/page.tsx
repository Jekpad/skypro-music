"use client";

import Image from "next/image";
import Wrapper from "@/components/Wrapper/Wrapper";
import Link from "next/link";
import Routes from "../Routes";
import styles from "./page.module.css";
import classNames from "classnames";
import { useState } from "react";
import { Elsie_Swash_Caps } from "next/font/google";
import { registration } from "@/services/api";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const signup = async () => {
    try {
      const result = await registration({
        username: username,
        email: email,
        password: password,
      });

      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Непредвиденная ошибка");
      }
    }
  };

  return (
    <Wrapper>
      <div className={styles.Wrapper}>
        <div className={styles.ContainerSignup}>
          <div className={styles.ModalBlock}>
            <div className={styles.ModalFormLogin}>
              <div className={styles.ModalLogo}>
                <Link href={Routes.BASE}>
                  <Image src="/img/logo_modal.png" alt="logo" width={140} height={21} />
                </Link>
              </div>
              <input
                className={classNames(styles.ModalInput, styles.Login)}
                type="text"
                name="username"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className={classNames(styles.ModalInput, styles.Login)}
                type="text"
                name="email"
                placeholder="Почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={classNames(styles.ModalInput, styles.PasswordFirst)}
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className={classNames(styles.ModalInput, styles.PasswordDouble)}
                type="password"
                name="password"
                placeholder="Повторите пароль"
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />
              <button className={styles.ModalBtnSignupEnt} onClick={signup}>
                <a>Зарегистрироваться</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
