import * as AppActions from './app-set-up';
import { GET } from '../../index';
import { SendRequestType } from './types';

describe('sendHttpRequest action', () => {
  let sendRequestData:SendRequestType;
  beforeEach(() => {
    /* Runs before all tests */
    sendRequestData = {
      method: GET,
      url: '/',
      key: 'app',
      payload: { a: 'test 1', b: 'test 2' },
      onError: jest.fn(),
      successMessage: 'success message',
      params: {},
      onSuccess: jest.fn(),
      nextRoute: '/',
      errorMessage: 'error message',
      noSuccessMessage: false,
      noErrorMessage: false,
    };
  });
  it('it should create send http request action', () => {
    const expectedResult = {
      type: AppActions.SEND_HTTP_REQUEST.START,
      meta: sendRequestData
    };
    expect(AppActions.sendHttpRequest(sendRequestData)).toEqual(expectedResult);
  });
});


describe('updateSessionToken action', () => {
  it('it should create update session token action', () => {
    const expectedResult = {
      type: AppActions.UPDATE_SESSION_TOKEN,
      payload: 'token'
    };
    expect(AppActions.updateSessionToken('token')).toEqual(expectedResult);
  });
});

describe('navigateTo action', () => {
  it('it should create navigate to action', () => {
    const expectedResult = {
      type: AppActions.NAVIGATE_TO,
      payload: '/'
    };
    expect(AppActions.navigateTo('/')).toEqual(expectedResult);
  });
});
