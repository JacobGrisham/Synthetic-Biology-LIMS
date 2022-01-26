import { Dispatch } from 'redux';
import { apiCall } from '../../api/api';
import { API_URL } from '../../constants/routes'
import { 
  REQUEST_COMPANIES_PENDING, 
  REQUEST_COMPANIES_SUCCESS, 
  REQUEST_COMPANIES_FAILED
} from '../../constants/routes.js';


// This is a higher order function: a function that returns a function
export const requestCompanies = (apiURL = API_URL) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: REQUEST_COMPANIES_PENDING })
    const data = await apiCall(apiURL)
    dispatch({ type: REQUEST_COMPANIES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: REQUEST_COMPANIES_FAILED, payload: error })
  }
}