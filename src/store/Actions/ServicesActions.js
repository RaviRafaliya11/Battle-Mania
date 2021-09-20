import { BASE_URL, token, requestOptions } from "../../utils/common";

// ____________________________________________________ Login ____________________________________________________

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export function Loginfunction(login_params) {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login_params),
    });

    const data = await response.json();
    return_response = {
      type: LOGIN_SUCCESS,
      payload: data,
    };
    if (data.status === true) {
      localStorage.setItem("status", JSON.stringify(data.status));
      localStorage.setItem("user", JSON.stringify(data.message));
      localStorage.setItem(
        "api_token",
        JSON.stringify(data.message.api_token).replace(/['"]+/g, "")
      );
      window.location.href = "/play";
    }

    dispatch(return_response);
  };
}

// ____________________________________________________ Change Password ____________________________________________________

export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";

export function Change_Password(changepass_parms) {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/update_myprofile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(changepass_parms),
    });

    const data = await response.json();
    return_response = {
      type: CHANGE_PASSWORD_SUCCESS,
      payload: data,
    };

    dispatch(return_response);
  };
}

// ____________________________________________________ Register ____________________________________________________

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export function Register_Function(register_params) {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/registrationAcc`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register_params),
    });

    const data = await response.json();
    return_response = {
      type: REGISTER_SUCCESS,
      payload: data,
    };
    if (data.status === true) {
      window.location.href = "/login";
    }

    dispatch(return_response);
  };
}

// ____________________________________________________ Update Profile ____________________________________________________

export const UPDATE_PROFILE = "UPDATE_PROFILE";

export function Update_Profile(update_profile_parms) {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/update_myprofile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(update_profile_parms),
    });

    const data = await response.json();
    return_response = {
      type: UPDATE_PROFILE,
      payload: data,
    };

    dispatch(return_response);
  };
}

export const GET_PAYMENT_METHOD = "GET_PAYMENT_METHOD";

export function Fetch_Payment_Method() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/payment`, requestOptions);
    const data = await response.json();
    return_response = {
      type: GET_PAYMENT_METHOD,
      payload: data.payment,
    };
    dispatch(return_response);
  };
}
