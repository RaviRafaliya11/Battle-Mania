import { BASE_URL, requestOptions } from "../../utils/common";

// ____________________________________________________ Country ____________________________________________________

export const GET_COUNTRY_SUCCESS = "GET_COUNTRY_SUCCESS";

export function Fetch_Country() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/all_country`, requestOptions);
    const data = await response.json();
    return_response = {
      type: GET_COUNTRY_SUCCESS,
      payload: data.all_country,
    };
    dispatch(return_response);
  };
}

// ____________________________________________________ Top Players ____________________________________________________

export const GET_TOP_PLAYERS_SUCCESS = "GET_TOP_PLAYERS_SUCCESS";

export function Fetch_TOP_PLAYERS() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/top_players`, requestOptions);
    const data = await response.json();
    return_response = {
      type: GET_TOP_PLAYERS_SUCCESS,
      payload: data.game,
    };

    dispatch(return_response);
  };
}

// ____________________________________________________ Leader Boards ____________________________________________________

export const GET_LEADERBOARD_SUCCESS = "GET_LEADERBOARD_SUCCESS";

export function Fetch_Leaderboard() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/leader_board`, requestOptions);
    const data = await response.json();
    return_response = {
      type: GET_LEADERBOARD_SUCCESS,
      payload: data.leader_board,
    };

    dispatch(return_response);
  };
}

// ____________________________________________________ About Us ____________________________________________________

export const GET_ABOUT_US_SUCCESS = "GET_ABOUT_US_SUCCESS";

export function Fetch_About_Us() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/about_us`, requestOptions);
    const data = await response.json();
    return_response = {
      type: GET_ABOUT_US_SUCCESS,
      payload: data.about_us,
    };
    dispatch(return_response);
  };
}

// ____________________________________________________ Customer_Support ____________________________________________________

export const GET_CUSTOMER_SUPPORT_SUCCESS = "GET_CUSTOMER_SUPPORT_SUCCESS";

export function Fetch_Customer_Support() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/customer_support`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_CUSTOMER_SUPPORT_SUCCESS,
      payload: data.customer_support,
    };
    dispatch(return_response);
  };
}

// ____________________________________________________ Terms & Conditions ____________________________________________________

export const GET_Terms_SUCCESS = "GET_Terms_SUCCESS";

export function Fetch_Terms_Condition() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/terms_conditions`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_Terms_SUCCESS,
      payload: data.terms_conditions,
    };
    dispatch(return_response);
  };
}
