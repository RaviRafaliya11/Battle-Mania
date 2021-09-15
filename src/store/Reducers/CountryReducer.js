import * as actions from '../Actions/Country_Action'

export const initialState = {
  country: [],
  loading: true,
}

export const COUNTRY_Reducer = (state = initialState, action) => {
  switch (action.type) {
   
    case actions.GET_COUNTRY_SUCCESS:
      return {country: action.payload, loading: false}
   
    default:
      return state
  }
}

export default COUNTRY_Reducer