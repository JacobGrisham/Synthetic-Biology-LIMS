import { 
  REQUEST_COMPANIES_PENDING, 
  REQUEST_COMPANIES_SUCCESS, 
  REQUEST_COMPANIES_FAILED 
} from '../constants/constants.js';

import * as reducers from '../redux/reducers/reducers';

const initialStateCompanies = {
  companies: [],
  isPending: true
}

describe('requestCompanies reducer', () => {

  it('should return the initial state', () => {
    expect.assertions(1);
    expect(reducers.requestCompanies(undefined, {})).toEqual(
      {
        companies: [],
        isPending: false,
        error: ''
      }
    )
  })

  it('should handle pending action', () => {
    expect.assertions(1);
    expect(
      reducers.requestCompanies(initialStateCompanies, {
        type: REQUEST_COMPANIES_PENDING,
        payload: {isPending: true}
      })
    ).toEqual(
      {
        companies: [],
        isPending: true
      }
    )
  })

  it('should handle success action', () => {
    expect.assertions(1);
    expect(
      reducers.requestCompanies(initialStateCompanies, {
        type: REQUEST_COMPANIES_SUCCESS,
        payload: [{
            id: '1',
            name: 'Zymergen',
            tier: 'T3'
          }]
      })
    ).toEqual(
      {
        companies: [{
          id: '1',
          name: 'Zymergen',
          tier: 'T3'
        }],
        isPending: false
      }
    )
  })

  it('should handle failed action', () => {
    expect.assertions(1);
    expect(
      reducers.requestCompanies(initialStateCompanies, {
        type: REQUEST_COMPANIES_FAILED,
        payload: 'NOOO'
      })
    ).toEqual(
      {
        error: 'NOOO',
        companies: [],
        isPending: false
      }
    )
  })

})