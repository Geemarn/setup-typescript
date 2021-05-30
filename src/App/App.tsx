import React, { lazy } from "react";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../_shared/theme/themeVariables";
import { ReducerState } from "../redux/reducers/types";
import "./App.less";

const Layout = lazy(() => import("../layout"));

function App(props: any) {
  //bring in UI layout from redux state
  const { darkMode, rtl, topMenu } = useSelector((state: ReducerState) => ({
    darkMode: state.ui.switchTheme,
    rtl: state.ui.switchRTL,
    topMenu: state.ui.topMenu,
  }));

  return (
    <ConfigProvider direction={rtl ? "rtl" : "ltr"}>
      <ThemeProvider theme={{ ...theme, rtl, topMenu, darkMode }}>
        <Switch>
          <Route exact path="/" component={Layout} />
        </Switch>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
