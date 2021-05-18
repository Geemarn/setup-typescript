export interface SendRequestType {
  // http request methods
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  // request url
  url: string;
  //identifier fro ui updates
  key?: string;
  //data sent to the server
  payload?: any;
  // function called if http request is successful
  onSuccess?: ((data?: any) => void) | string;
  // function called if http request failed
  onError?: ((error?: any) => void) | string;
  //url query params
  params?: any;
  // specify success message to display to user
  successMessage?: string;
  // specify error message to display to user
  errorMessage?: string;
  //to redirect on successful http request
  nextRoute?: string;
  // show if success message should be displayed or not
  noSuccessMessage?: boolean;
  // show if error message should be displayed or not
  noErrorMessage?: boolean;
}