import { BASE_URL, requestOptions, user } from "../../utils/common";

// ____________________________________________________ User Profile ____________________________________________________

export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";

export function Fetch_User_Profile() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/my_profile/${user.member_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_USER_PROFILE_SUCCESS,
      payload: data.my_profile,
    };

    dispatch(return_response);
  };
}

// ____________________________________________________ User Wallet ____________________________________________________

export const GET_Wallet_Transaction_SUCCESS = "GET_Wallet_Transaction_SUCCESS";

export function Fetch_Wallet_Transaction() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/transaction`, requestOptions);
    const data = await response.json();
    return_response = {
      type: GET_Wallet_Transaction_SUCCESS,
      payload: data.transaction,
    };

    dispatch(return_response);
  };
}

// ____________________________________________________ User Wallet ____________________________________________________

export const GET_DASHBOARD_SUCCESS = "GET_DASHBOARD_SUCCESS";

export function Fetch_Dashboard() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/dashboard/${user.member_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_DASHBOARD_SUCCESS,
      payload: data,
    };

    dispatch(return_response);
  };
}

// ____________________________________________________ User Order ____________________________________________________

export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";

export function Fetch_Order() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/my_order/${user.member_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_ORDER_SUCCESS,
      payload: data.my_orders,
    };

    dispatch(return_response);
  };
}

// ____________________________________________________ User Statistics ____________________________________________________

export const GET_STATISTICS_SUCCESS = "GET_STATISTICS_SUCCESS";

export function Fetch_Statistics() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/my_statistics/${user.member_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_STATISTICS_SUCCESS,
      payload: data.my_statistics,
    };

    dispatch(return_response);
  };
}

// ____________________________________________________ User Referral ____________________________________________________

export const GET_REFERRAL_SUCCESS = "GET_REFERRAL_SUCCESS";

export function Fetch_Referral() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/my_refrrrals/${user.member_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_REFERRAL_SUCCESS,
      payload: data,
    };

    dispatch(return_response);
  };
}

// ____________________________________________________ User Upcoming Matches ____________________________________________________

export const USER_MATCHES = "USER_MATCHES";

export function Fetch_User_Matches() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/my_match/${user.member_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: USER_MATCHES,
      payload: data.my_match,
    };

    dispatch(return_response);
  };
}
