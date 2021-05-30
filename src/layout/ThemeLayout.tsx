import React, { useState, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import useWindowSize from './utils/useWindowSize';



const ThemeLayout = ( WrapperComponent: FC<any> ) => (props: Record<string, any>) => {
  const [layoutState, setLayoutState] = useState({
    hide: true,
    searchHide: true,
    activeSearch: false,
  });
  const collapse = useWindowSize();
  console.log('collapse::', collapse);

  return <WrapperComponent {...props} />;
}

export default ThemeLayout
