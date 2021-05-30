import React from "react";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../_shared/theme/themeVariables";
import Layout from "../layout";
import { ReducerState } from "../redux/reducers/types";
import { selectLayoutSetup } from "../redux/reducers/app/ui";
import 'remixicon/fonts/remixicon.css';
import "./App.less";

function App(props: any) {
  //bring in UI layout from redux state
  const { layoutSetup } = useSelector((state: ReducerState) => ({
    layoutSetup: selectLayoutSetup(state),
  }));
  const { darkTheme, RTL, topMenu } = layoutSetup;

  return (
    <ConfigProvider direction={RTL ? "rtl" : "ltr"}>
      <ThemeProvider theme={{ ...theme, darkTheme, topMenu, RTL }}>
        <Switch>
          <Route exact path="/" component={Layout} />
        </Switch>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
