import * as actions from "../Actions/ServicesActions";

export const initialState = {
  logindata: [],
  change_password_data: [],
  register_data: [],
  payment_method: [],
  loading: true,
};

export const Login_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { logindata: action.payload, loading: false };

    default:
      return state;
  }
};

export const Change_Password = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_PASSWORD_SUCCESS:
      return { change_password_data: action.payload, loading: false };

    default:
      return state;
  }
};

export const Register_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER_SUCCESS:
      return { register_data: action.payload, loading: false };

    default:
      return state;
  }
};

export const Payment_Method_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PAYMENT_METHOD:
      return { payment_method: action.payload, loading: false };
    default:
      return state;
  }
};
