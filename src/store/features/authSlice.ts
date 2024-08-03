import { getJWTokens, login } from "@/services/api";
import { deleteCookie, getCookie, setCookie } from "@/services/cookie";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { log } from "console";

type AuthStateType = {
  isAuth: boolean;
  accessToken: string | undefined;
  refreshToken: string | undefined;
  username: string | undefined;
  email: string | undefined;
  id: string | undefined;
};

export const setUserAuth = createAsyncThunk(
  "auth/setUserAuth",
  async (
    { email, password }: { email: string; password: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const loginResult = await login({ email, password });
      const tokenResult = await getJWTokens({ email, password });
      const authData = {
        id: loginResult._id,
        email: loginResult.email,
        username: loginResult.username,
        accessToken: tokenResult.access,
        refreshToken: tokenResult.refresh,
      };
      dispatch(setAuth(authData));
      return authData;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("Something went wrong");
      }
    }
  }
);

export const setUserLogout = createAsyncThunk("auth/setUserLogout", async (_, { dispatch }) => {
  dispatch(unsetAuth());
});

const initialState: AuthStateType = {
  isAuth: !!getCookie("accessToken") && !!getCookie("refreshToken"),
  accessToken: getCookie("accessToken"),
  refreshToken: getCookie("refreshToken"),
  username: getCookie("username"),
  email: getCookie("email"),
  id: getCookie("id"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{
        id: string;
        email: string;
        username: string;
        accessToken: string;
        refreshToken: string;
      }>
    ) => {
      state.isAuth = true;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      setCookie("username", action.payload.username, {
        [`max-age`]: 12 * 3600,
      });
      setCookie("id", action.payload.id.toString(), {
        [`max-age`]: 12 * 3600,
      });
      setCookie("email", action.payload.email, {
        [`max-age`]: 12 * 3600,
      });
      setCookie("accessToken", action.payload.accessToken, {
        [`max-age`]: 12 * 3600,
      });
      setCookie("refreshToken", action.payload.refreshToken, {
        [`max-age`]: 12 * 3600,
      });
    },
    unsetAuth: (state) => {
      state.isAuth = false;
      state.id = undefined;
      state.username = undefined;
      state.email = undefined;
      state.accessToken = undefined;
      state.refreshToken = undefined;

      deleteCookie("id");
      deleteCookie("username");
      deleteCookie("email");
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
    },
  },
  extraReducers(builder) {
    builder.addCase(setUserAuth.rejected, (state, action) => {
      console.error(action);
    });
  },
});

const { setAuth, unsetAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
