import * as actions from "../Actions/GameAction";

export const initialState = {
  games: [],
  upcoming_games: [],
  ongoing_games: [],
  game_result: [],
  singlegame: [],
  participants: [],
  match_winner: [],
  full_result: [],
  match_deatils: [],
  joined_players: [],
  join_match: [],
  loading: true,
};

export const Game_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_GAMES_SUCCESS:
      return { games: action.payload, loading: false };

    default:
      return state;
  }
};

export const Upcoming_Game_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_UPCOMING_GAMES:
      return { upcoming_games: action.payload, loading: false };

    default:
      return state;
  }
};

export const Ongoing_Game_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ONGOING_GAMES:
      return { ongoing_games: action.payload, loading: false };

    default:
      return state;
  }
};

export const Game_Result_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_GAME_RESULT:
      return { game_result: action.payload, loading: false };

    default:
      return state;
  }
};

export const Single_Game_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SINGLE_GAME_DETAIL:
      return { singlegame: action.payload, loading: false };

    default:
      return state;
  }
};

export const Participants_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PARTICIPANTS_DETAIL:
      return { participants: action.payload, loading: false };

    default:
      return state;
  }
};

export const Single_Result_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SINGLE_RESULT_DETAIL:
      return {
        match_winner: action.payload_winner,
        full_result: action.payload_result,
        match_deatils: action.payload_details,
        loading: false,
      };

    default:
      return state;
  }
};

export const Joined_Players_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_JOINED_PLAYERS:
      return { joined_players: action.payload, loading: false };

    default:
      return state;
  }
};

export const Join_Match_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.JOIN_MATCH:
      return { join_match: action.payload, loading: false };

    default:
      return state;
  }
};
