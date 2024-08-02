import { getCookie, setCookie } from "@/services/cookie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthStateType = {
  isAuth: boolean;
  accessToken: string | undefined;
  refreshToken: string | undefined;
  username: string | undefined;
  email: string | undefined;
  id: string | undefined;
};

const initialState: AuthStateType = {
  isAuth: !!getCookie("accessToken") && !!getCookie("refreshToken"),
  accessToken: getCookie("accessToken"),
  refreshToken: getCookie("refreshToken"),
  username: undefined,
  email: undefined,
  id: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
      state.isAuth = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      setCookie("accessToken", action.payload.accessToken, {
        [`max-age`]: 12 * 3600,
      });
      setCookie("refreshToken", action.payload.refreshToken, {
        [`max-age`]: 12 * 3600,
      });
    },
    unsetAuth: (state) => {
      state.isAuth = false;
      state.accessToken = "";
      state.refreshToken = "";

      setCookie("accessToken", "", { expires: -1 });
      setCookie("refreshToken", "", { expires: -1 });
    },
  },
  extraReducers(builder) {},
});

export const { setAuth, unsetAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
