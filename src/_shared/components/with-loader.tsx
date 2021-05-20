import React, { ReactNode } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./with-loader.less";

// @ts-ignore
const antIcon = <LoadingOutlined style={{ fontSize: 38 }} spin />;

const withLoader =
  (WrappedComponent: any) =>
  ({ isLoading, ...otherProps }: any) =>
    isLoading ? (
      <div className="spin">
        <Spin indicator={antIcon} />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
export default withLoader;
