import * as actions from "../Actions/InformationAction";

export const initialState = {
  country: [],
  top_players: [],
  leaderboard: [],
  about_us: [],
  customer_support: [],
  terms_conditions: [],
  loading: true,
};

// ____________________________________________________ Country ____________________________________________________

export const Country_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_COUNTRY_SUCCESS:
      return { country: action.payload, loading: false };

    default:
      return state;
  }
};

// ____________________________________________________ Top Players ____________________________________________________

export const Top_Players = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_TOP_PLAYERS_SUCCESS:
      return { top_players: action.payload, loading: false };

    default:
      return state;
  }
};

// ____________________________________________________ Leader Boards ____________________________________________________

export const Leader_Board = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LEADERBOARD_SUCCESS:
      return { leaderboard: action.payload, loading: false };

    default:
      return state;
  }
};

// ____________________________________________________ About_Us ____________________________________________________

export const About_Us = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ABOUT_US_SUCCESS:
      return { about_us: action.payload, loading: false };

    default:
      return state;
  }
};

// ____________________________________________________ Customer_Support ____________________________________________________

export const Customer_Support = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CUSTOMER_SUPPORT_SUCCESS:
      return { customer_support: action.payload, loading: false };

    default:
      return state;
  }
};

// ____________________________________________________ Terms & Conditions ____________________________________________________

export const Terms_Condition = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_Terms_SUCCESS:
      return { terms_conditions: action.payload, loading: false };
    default:
      return state;
  }
};
