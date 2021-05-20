import React from "react";
import { Button, WhiteSpace, WingBlank } from "antd-mobile";
import { Button as Btn } from "antd";
import withLoader from "../_shared/components/with-loader";
import "./App.less";

const TestPage = (props: any) => (
  <div className="app">
    <WingBlank>
      <h1>this is a react bootstrap projects</h1>
      <Button type="warning">Start</Button>
      <WhiteSpace />
      <Button type="primary">Start</Button>
      <br />
      <Btn type="primary">Start here</Btn>
    </WingBlank>
  </div>
);

function App(props: any) {
  const NewComponent = withLoader(TestPage);
  return (
    <div className="app">
      <NewComponent isLoading={!true} text="hello world" />
    </div>
  );
}

export default App;
