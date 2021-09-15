import {BASE_URL,requestOptions} from "../../utils/common"


export const GET_ANNOUNCEMENT_SUCCESS = 'GET_ANNOUNCEMENT_SUCCESS'


  export function Fetch_Announcement() {
  
    var return_response = {}
    return async (dispatch) => {
     
        const response = await fetch(`${BASE_URL}/announcement`,requestOptions)
        const data = await response.json()
        return_response = {
          type: GET_ANNOUNCEMENT_SUCCESS,
          payload: data.announcement,
        }
      
      dispatch(return_response)
    }
  }



  