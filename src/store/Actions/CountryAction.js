import {BASE_URL,requestOptions} from "../../utils/common"


export const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS'


  export function Fetch_Country() {
  
    var return_response = {}
    return async (dispatch) => {
        const response = await fetch(`${BASE_URL}/all_country`,requestOptions)
        const data = await response.json()
        return_response = {
          type: GET_COUNTRY_SUCCESS,
          payload: data.all_country,
        }
      dispatch(return_response)
    }
  }



  