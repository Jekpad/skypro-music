"use client";

import { useAppSelector, useAppDispatch } from "@/store/store";
import { setAuthState } from "@/store/features/authSlice";
import Wrapper from "@/components/Wrapper/Wrapper";

export default function Login() {
  const authState = useAppSelector((state) => state.auth.authState);
  return (
    <Wrapper>
      Вы сейчас {authState ? "вошли" : "вышли"}
      <AuthUpdater />
    </Wrapper>
  );
}

const AuthUpdater = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setAuthState(true))}>Войти</button>
      <button onClick={() => dispatch(setAuthState(false))}>Выйти</button>
    </div>
  );
};
