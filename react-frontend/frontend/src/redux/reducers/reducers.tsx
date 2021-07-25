import { 
  REQUEST_COMPANIES_PENDING, 
  REQUEST_COMPANIES_SUCCESS, 
  REQUEST_COMPANIES_FAILED
} from '../../constants/constants.js';

const initialStateCompanies = {
  isPending: false,
  companies: [],
  error: ''
}

interface actionObject {
  [key: string]: any
}

export const requestCompanies = (state: object = initialStateCompanies, action: actionObject = {}) => {
  switch(action.type) {
    case REQUEST_COMPANIES_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQUEST_COMPANIES_SUCCESS:
      return Object.assign({}, state, { companies: action.payload, isPending: false })
    case REQUEST_COMPANIES_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false })
    default:
      return state
  }
}