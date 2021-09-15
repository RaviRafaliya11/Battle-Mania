import * as actions from "../Actions/UserActions";

export const initialState = {
  user_profile: [],
  wallet_transaction: [],
  dashboard: [],
  order: [],
  statistics: [],
  referral: [],
  user_matches: [],
  loading: true,
};

// ____________________________________________________ User Profile ____________________________________________________

export const User_Profile = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_USER_PROFILE_SUCCESS:
      return { user_profile: action.payload };

    default:
      return state;
  }
};

// ____________________________________________________ User Wallet ____________________________________________________

export const Wallet_Transaction = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_Wallet_Transaction_SUCCESS:
      return { wallet_transaction: action.payload, loading: false };

    default:
      return state;
  }
};

// ____________________________________________________ User Dashboard ____________________________________________________

export const User_Dashboard = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DASHBOARD_SUCCESS:
      return { dashboard: action.payload, loading: false };

    default:
      return state;
  }
};

// ____________________________________________________ User Order ____________________________________________________

export const User_Order = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ORDER_SUCCESS:
      return { order: action.payload, loading: false };

    default:
      return state;
  }
};

// ____________________________________________________ User Statistics ____________________________________________________

export const User_Statistics = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_STATISTICS_SUCCESS:
      return { statistics: action.payload, loading: false };

    default:
      return state;
  }
};

export const User_Referral = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_REFERRAL_SUCCESS:
      return { referral: action.payload, loading: false };

    default:
      return state;
  }
};

export const User_Match_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_MATCHES:
      return { user_matches: action.payload, loading: false };
    default:
      return state;
  }
};
