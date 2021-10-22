import { ThunkDispatch } from "redux-thunk";

export interface User {
  message: string;
  username: string;
  email: string;
  full_name: string;
  token: string;
}

export interface LoginForm {
  username: string;
  password: string;
}

//**userReducer.ts de state in type ı UserState olacak
export interface UserState {
  data: User;
  loading: boolean;
  error: string;
}


//**user,login olurken yapılacak dispatchlerin type ını oluştururuz
interface LOGIN_START {
  type: "LOGIN_START";
}

interface LOGIN_SUCCESS {
  type: "LOGIN_SUCCESS"; //başarılı bir giriş olursa User objesini payload olara state e göndermek için
  payload: User;
}

interface LOGIN_ERROR {
  type: "LOGIN_ERROR";
}

interface IS_LOGGED_IN_START {
  type: "IS_LOGGED_IN_START";
}

interface IS_LOGGED_IN_SUCCESS {
  type: "IS_LOGGED_IN_SUCCESS";
  payload: User;
}

interface IS_LOGGED_IN_ERROR {
  type: "IS_LOGGED_IN_ERROR";
}

interface LOGOUT {
  type: "LOGOUT";
}

//**bu  user actionları tek action da toplayacak UserAction oluşturulur
//UserAction ile dispatch edilecek action lar bu  actionlardan dan biri olabilir
//*** userReducer.ts deki action ın type ına UserAction verilir
export type UserAction =
  | LOGIN_START
  | LOGIN_SUCCESS
  | LOGIN_ERROR
  | IS_LOGGED_IN_START
  | IS_LOGGED_IN_SUCCESS
  | IS_LOGGED_IN_ERROR
  | LOGOUT;

export type UserDispatch = ThunkDispatch<UserState, void, UserAction>;
