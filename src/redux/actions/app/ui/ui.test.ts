import * as UIActions from './ui';

describe('resetUI action', () => {
  it('it should create reset ui action', () => {
    expect(UIActions.resetUI().type).toEqual(UIActions.UI_RESET);
  });
});

describe('UILoading action', () => {
  it('it should create start UI load action', () => {
    const expectedResult = {
      type: UIActions.UI_LOADING.START,
      key: 'app'
    };
    expect(UIActions.startUILoading('app')).toEqual(expectedResult);
  });
  it('it should create end UI load action', () => {
    const expectedResult = {
      type: UIActions.UI_LOADING.END,
      key: 'app'
    };
    expect(UIActions.stopUILoading('app')).toEqual(expectedResult);
  });
});


describe('updateUIError action', () => {
  it('it should create update UI error action', () => {
    const expectedResult = {
      type: UIActions.UI_ERROR,
      key: 'app'
    };
    expect(UIActions.updateUIError('app', 'some error').type).toEqual(UIActions.UI_ERROR);
  });
});
