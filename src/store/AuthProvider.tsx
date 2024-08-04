"use client";

import { useEffect } from "react";
import { useAppDispatch } from "./store";
import { setAuth } from "./features/authSlice";
import { getAuthCookie } from "@/services/cookie";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const authCookies = getAuthCookie();
    if (authCookies) {
      dispatch(setAuth(authCookies));
    }
  }, []);

  return children;
}
