import { BASE_URL, requestOptions } from "../../utils/common";

export const GET_SLIDER_SUCCESS = "GET_SLIDER_SUCCESS";

export function Fetch_Slider() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/slider`, requestOptions);
    const data = await response.json();
    return_response = {
      type: GET_SLIDER_SUCCESS,
      payload: data.slider,
    };

    dispatch(return_response);
  };
}

export const GET_REFER_IMAGES_SUCCESS = "GET_REFER_IMAGES_SUCCESS";

export function Fetch_Refer_Images() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/banner`, requestOptions);
    const data = await response.json();
    return_response = {
      type: GET_REFER_IMAGES_SUCCESS,
      payload: data.banner,
    };

    dispatch(return_response);
  };
}
