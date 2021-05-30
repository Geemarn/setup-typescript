import React, { useState, FC } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from 'react-router-dom';
import { Layout, Button, Row, Col } from "antd";
import useWindowSize from "./utils/useWindowSize";
import { LayoutDiv } from "./styles";
import HeaderSearch from './components/HeaderSearch';
import { ReducerState } from "../redux/reducers/types";
import { selectLayoutSetup } from "../redux/reducers/app/ui";
import RightIcon from '../_shared/assets/svgs/right.svg';
import LeftIcon from '../_shared/assets/svgs/left.svg';
import Logo from '../_shared/assets/svgs/logo.svg';

const { Header, Footer, Sider, Content } = Layout;

const ThemeLayout =
  (WrapperComponent: FC<any>) => (props: Record<string, any>) => {
    //bring in UI layout from redux state
    const { layoutSetup } = useSelector((state: ReducerState) => ({
      layoutSetup: selectLayoutSetup(state),
    }));
    const { darkTheme, RTL, topMenu } = layoutSetup;

    const [layoutState, setLayoutState] = useState({
      hide: true,
      searchHide: true,
      activeSearch: false,
    });
    const { hide, searchHide, activeSearch } = layoutState;
    //get collapse from custom hooks
    const { collapsed, setCollapsed } = useWindowSize();
    console.log("ChangeLayoutMode::", darkTheme, RTL, topMenu);

    //toggle collapse fn
    const toggleCollapsed = () => {
      setCollapsed((prev) => !prev);
    };

    //toggle collapse fn for mobile
    const toggleCollapsedMobile = () => {
      if (window.innerWidth <= 990) {
        setCollapsed((prev) => !prev);
      }
    };

    //toggle show hide fn
    const onShowHide = () => {
      setLayoutState((prev) => ({
        ...prev,
        hide: !hide,
        searchHide: true,
      }));
    };

    //toggle search fn
    const toggleSearch = () => {
      setLayoutState((prev) => ({
        ...prev,
        activeSearch: !activeSearch,
      }));
    };

    // return <WrapperComponent {...props} />;

    return (
      <LayoutDiv darkMode={darkTheme}>
        <Layout className="layout">
          <Header
            style={{
              position: "fixed",
              width: "100%",
              top: 0,
              [!RTL ? "left" : "right"]: 0,
              background: "#fff",
            }}
          >
            <Row>
              <Col
                lg={!topMenu ? 4 : 3}
                sm={6}
                xs={12}
                className="align-center-v navbar-brand"
              >
                {!topMenu || window.innerWidth <= 991 ? (
                  <Button type="link" onClick={toggleCollapsed}>
                    <img
                      src={collapsed ? RightIcon : LeftIcon}
                      alt="menu"
                    />
                  </Button>
                ) : null}
                <Link
                  className={topMenu && window.innerWidth > 991 ? 'striking-logo top-menu' : 'striking-logo'}
                  to="/app"
                >
                  <img
                    src={Logo}
                    alt=""
                  />
                </Link>
              </Col>
              <Col lg={!topMenu ? 14 : 15} md={8} sm={0} xs={0}>
                {<HeaderSearch RTL={RTL} darkTheme={darkTheme} />}
              </Col>
            </Row>
          </Header>
        </Layout>
      </LayoutDiv>
    );
  };

export default ThemeLayout;
