import * as actions from "../Actions/BannerActions";

export const initialState = {
  slider: [],
  refer_images: [],
  loading: true,
};

export const Slider = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SLIDER_SUCCESS:
      return { slider: action.payload, loading: false };

    default:
      return state;
  }
};

export const Refer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_REFER_IMAGES_SUCCESS:
      return { refer_images: action.payload, loading: false };

    default:
      return state;
  }
};
