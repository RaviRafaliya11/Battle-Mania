import * as actions from "../Actions/AnnouncementAction";

export const initialState = {
  announcement: [],
  loading: true,
};

export const Announcement_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ANNOUNCEMENT_SUCCESS:
      return { announcement: action.payload, loading: false };
    default:
      return state;
  }
};

export default Announcement_Reducer;
