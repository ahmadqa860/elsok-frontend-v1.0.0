import http from "./httpService";
import { apiUrl } from "../config.json";

let tokenKey = "elsok-token";

export async function login(email, password) {
  const { data } = await http.post(`${apiUrl}/login`, {
    email: email,
    password: password,
  });
  localStorage.setItem(tokenKey, data.success.token);
}

export async function logout() {
  localStorage.removeItem(tokenKey);
}

export async function register({ email, password, password_confirmation }) {
  const { data } = await http.post(`${apiUrl}/register`, {
    email: email,
    password: password,
    password_confirmation: password_confirmation,
  });
  localStorage.setItem(tokenKey, data.success.token);
}

export async function registerUser(
  { identity=null, name, mobile, address, city_id },
  userType
) {
  console.log(userType);
  await http.post(`${apiUrl}/user/profile`, {
    identity: identity,
    name,
    mobile,
    city_id,
    address,
    userType:userType,
  });
}

export function hasToken() {
  const token = localStorage.getItem(tokenKey);
  if (token) {
    return true;
  } else {
    return false;
  }
}

export default {
  login,
  register,
  registerUser,
  hasToken,
  logout,
};
