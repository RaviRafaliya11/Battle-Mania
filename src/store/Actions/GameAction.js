import { BASE_URL, requestOptions, user, token } from "../../utils/common";

export const GET_GAMES_SUCCESS = "GET_GAMES_SUCCESS";

export function Fetch_Games() {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/all_game`, requestOptions);
    const data = await response.json();
    return_response = {
      type: GET_GAMES_SUCCESS,
      payload: data.all_game,
    };

    dispatch(return_response);
  };
}

export const GET_UPCOMING_GAMES = "GET_UPCOMING_GAMES";

export function Fetch_Upcoming_Games(game_id) {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/all_play_match/${game_id}/${user.member_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_UPCOMING_GAMES,
      payload: data.allplay_match,
    };

    dispatch(return_response);
  };
}

export const GET_ONGOING_GAMES = "GET_ONGOING_GAMES";

export function Fetch_Ongoing_Games(game_id) {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/all_ongoing_match/${game_id}/${user.member_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_ONGOING_GAMES,
      payload: data.all_ongoing_match,
    };

    dispatch(return_response);
  };
}

export const GET_GAME_RESULT = "GET_GAME_RESULT";

export function Fetch__Game_Result(game_id) {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/all_game_result/${game_id}/${user.member_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_GAME_RESULT,
      payload: data.all_game_result,
    };

    dispatch(return_response);
  };
}

export const GET_SINGLE_GAME_DETAIL = "GET_SINGLE_GAME_DETAIL";

export function Fetch_Single_Game(game_id) {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/single_match/${game_id}/${user.member_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_SINGLE_GAME_DETAIL,
      payload: data.match,
    };

    dispatch(return_response);
  };
}

export const GET_PARTICIPANTS_DETAIL = "GET_PARTICIPANTS_DETAIL";

export function Fetch_Participants(game_id) {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/match_participate/${game_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_PARTICIPANTS_DETAIL,
      payload: data.match_participate,
    };

    dispatch(return_response);
  };
}

export const GET_SINGLE_RESULT_DETAIL = "GET_SINGLE_RESULT_DETAIL";

export function Fetch_Single_Result(game_id) {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/single_game_result/${game_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_SINGLE_RESULT_DETAIL,
      payload_details: data.match_deatils,
      payload_result: data.full_result,
      payload_winner: data.match_winner,
    };

    dispatch(return_response);
  };
}

export const GET_JOINED_PLAYERS = "GET_JOINED_PLAYERS";

export function Fetch_Joined_Players(game_id) {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}/join_match_single/${game_id}`,
      requestOptions
    );
    const data = await response.json();
    return_response = {
      type: GET_JOINED_PLAYERS,
      payload: data.message.result,
    };

    dispatch(return_response);
  };
}

export const JOIN_MATCH = "JOIN_MATCH";

export function Join_Match(params) {
  var return_response = {};
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/join_match_process`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();
    return_response = {
      type: JOIN_MATCH,
      payload: data,
    };
    if (data.status === true) {
      window.location.href = `/my_matches`;
    }

    dispatch(return_response);
  };
}
