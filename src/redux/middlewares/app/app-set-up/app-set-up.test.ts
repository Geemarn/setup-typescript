import { createApiRequest } from '../../../../service.config/axios';
import {
  startUILoading,
  stopUILoading,
  updateUIError,
  updateSessionToken,
  sendHttpRequest,
  NAVIGATE_TO,
  SEND_HTTP_REQUEST,
  UI_ERROR,
  UI_LOADING,
  GET, navigateTo,
} from '../../../actions';
import configureMockStore from 'redux-mock-store';
import { SendRequestType } from '../../../actions/app/app-set-up/types';
import nock from 'nock';

import mockAxios from 'axios';
import * as UIActions from '../../../actions/app/ui/ui';
jest.mock('axios');
const mockStore = configureMockStore([]);
describe('send request api middleare', () => {
  let sendRequestData: SendRequestType;
  let config: any;
  let expectedAction;
  let mockAction;
  let mockAxiosResult: any;
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
    config = { method: GET, url: '/', data: null, params: null };
    mockAxiosResult = {
      meta: {},
      data: [],
    };
  });
  it('send request', async () => {
    const store = mockStore({});
    store.dispatch(sendHttpRequest(sendRequestData));
    mockAction = store.getActions()[0];
    expectedAction = {
      type: SEND_HTTP_REQUEST.START,
      meta: sendRequestData,
    };
    expect(mockAction).toEqual(expectedAction);
    // check ui error
    store.dispatch(updateUIError('app', 'some errors'));
    mockAction = store.getActions()[1];
    expectedAction = {
      type: UI_ERROR,
      key: 'app',
      value: 'some errors',
    };
    expect(mockAction).toEqual(expectedAction);
    // check start loading
    store.dispatch(startUILoading('app'));
    mockAction = store.getActions()[2];
    expectedAction = {
      type: UI_LOADING.START,
      key: 'app',
    };
    expect(mockAction).toEqual(expectedAction);

    (mockAxios.get as jest.Mock).mockResolvedValueOnce(mockAxiosResult);
    // createApiRequest(config);

    // (store)(next)(action);

    // const scope = nock('https://voomsway.com')
    //   .post('/auth/login', { email: 'adeg4ife@gmail.com', password: 'abcd333' })
    //   .reply(400, {
    //     id: '112oo2233',
    //     email: 'adeg4ife@gmail.com',
    //   });
  });

  describe('navigateTo middleware', () => {
    it('it should create navigateTo middleware', () => {
      const store = mockStore({});
      store.dispatch(navigateTo('/'));
      mockAction = store.getActions()[0];
      expectedAction = {
        type: NAVIGATE_TO,
        payload: '/',
      };
      expect(mockAction).toEqual(expectedAction);
    });
  });

});

