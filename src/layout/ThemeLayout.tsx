import React, { useState, FC } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Layout, Button, Row, Col } from "antd";
import TopMenu from "./components/TopMenu/TopMenu";
import useWindowSize from "./utils/useWindowSize";
import HeaderSearch from "./components/HeaderSearch/HeaderSearch";
import { LayoutStyle, TopMenuSearch } from "./styles";
import UserAvatar from './components/UserAvatar/UserAvatar';
import RightIcon from "../_shared/assets/svgs/right.svg";
import LeftIcon from "../_shared/assets/svgs/left.svg";
import Logo from "../_shared/assets/svgs/logo.svg";
import { ReducerState } from "../redux/reducers/types";
import { selectLayoutSetup } from "../redux/reducers/app/ui";

const { Header, Footer, Sider, Content } = Layout;

const ThemeLayout =
  (WrapperComponent: FC<any>) => (props: Record<string, any>) => {
    //bring in UI layout from redux state
    const { layoutSetup } = useSelector((state: ReducerState) => ({
      layoutSetup: selectLayoutSetup(state),
    }));
    const { darkTheme } = layoutSetup;
    const mobile = window.innerWidth <= 823;
    const [layoutState, setLayoutState] = useState({
      hide: true,
      searchHide: true,
      activeSearch: false,
    });
    const { hide, searchHide, activeSearch } = layoutState;
    //get collapse from custom hooks
    const { collapsed, setCollapsed } = useWindowSize();

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
      <LayoutStyle darkMode={darkTheme}>
        <Layout className="layout">
          <Header
          >
            <Row>
              <Col lg={4} sm={6} xs={12} className="navbar-brand">
                <Button type="link" onClick={toggleCollapsed}>
                  <img src={collapsed ? RightIcon : LeftIcon} alt="menu" />
                </Button>
                <Link className={"striking-logo"} to="/app">
                  <img src={Logo} alt="" />
                </Link>
                <span>Testers</span>
              </Col>
              <Col lg={15} md={8} sm={0} xs={0}>
                {mobile ? <TopMenu /> : <HeaderSearch darkTheme={darkTheme} />}
              </Col>
              <Col lg={2} md={8} sm={0} xs={0} style={{textAlign: 'right'}}>
                {mobile ? (
                  <TopMenuSearch>
                    <div className="top-right-wrap d-flex">
                      <Link
                        className={`${
                          activeSearch
                            ? "search-toggle active"
                            : "search-toggle"
                        }`}
                        onClick={() => {
                          toggleSearch();
                        }}
                        to="#"
                      >
                        <i className="ri-search-line" />
                      </Link>
                      <div
                        className={`${
                          activeSearch
                            ? "topMenu-search-form show"
                            : "topMenu-search-form"
                        }`}
                      >
                        <form action="">
                          <span className="search-icon">
                            <i className="ri-search-line" />
                          </span>
                          <input type="text" name="search" />
                        </form>
                      </div>
                      <UserAvatar />
                    </div>
                  </TopMenuSearch>
                ) : (
                  <UserAvatar />
                )}
              </Col>
            </Row>
          </Header>
        </Layout>
      </LayoutStyle>
    );
  };

export default ThemeLayout;
