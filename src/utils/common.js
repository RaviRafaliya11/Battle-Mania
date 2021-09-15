export const BASE_URL = "https://demo.thebattlemania.com/api";

export const token = localStorage.getItem("api_token");

export const user = JSON.parse(localStorage.getItem("user"));

export const requestOptions = {
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
  redirect: "follow",
};
