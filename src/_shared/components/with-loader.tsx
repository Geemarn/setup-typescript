import React, { ReactNode } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './with-loader.less';

const antIcon = <LoadingOutlined style={{ fontSize: 38 }} spin />;

const withLoader = (WrappedComponent: any) => ({ isLoading, ...otherProps }: any ) => {
  return isLoading ? <div className='spin'><Spin indicator={antIcon} /></div> : <WrappedComponent {...otherProps} />
};
export default withLoader;