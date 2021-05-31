import Styled from "styled-components";
import { Popover } from "antd";

const LayoutStyle = Styled.div<{ darkMode: boolean }>`
    header{
    height: 60px;
    line-height: 60px;
        box-shadow: 0 2px 30px ${({ theme }) => theme["gray-solid"]}10;
        ${({ darkMode }) => (darkMode ? `background: #272B41;` : "")};
        z-index: 999;
        .navbar-brand{
            button{
              padding:  "0 25px 0 15px";
              color: ${({ theme }) => theme["extra-light-color"]};
              @media only screen and (max-width: 875px){
                  padding:  "0 25px 0 10px";
              }
              @media only screen and (max-width: 767px){
                  padding: "0 15px 0 0px";
              }
          }
          span {       
             color: ${({ darkMode }) => !darkMode ? '#272B41' : 'lightgray'};
             padding-left: 10px;
          }
        }
        .striking-logo{
            margin-left: 10px;
            @media only screen and (max-width: 875px){
               margin-right: 4px;
            }
            @media only screen and (max-width: 767px){
               margin-right: 0;
            }
            img{
                max-width: 32px;
                width: 100%;
            }
        }
        .ant-btn-link{
          ${({ darkMode }) =>
            darkMode
              ? `background: #272B41;border-color: #272B41;color: #7D808D !important`
              : ""};
        }
        .head-example{
            ${({ darkMode }) => (darkMode ? `color: #A8AAB3;` : "")};
        }
        .ant-menu-sub.ant-menu-vertical{
            .ant-menu-item{
                a{
                    color: ${({ theme }) => theme["gray-color"]};
                }
            }
        }
        .ant-menu.ant-menu-horizontal{
            display: flex;
            align-items: center;
            margin: 0 -16px;
            li.ant-menu-submenu{
                margin: 0 16px;
            }
            .ant-menu-submenu{
                &.ant-menu-submenu-active,
                &.ant-menu-submenu-selected,
                &.ant-menu-submenu-open{
                    .ant-menu-submenu-title{
                        color: ${({ darkMode }) =>
                          darkMode ? `#fff;` : "#5A5F7D"};
                        svg,
                        i{
                            color: ${({ darkMode }) =>
                              darkMode ? `#fff;` : "#5A5F7D"};
                        }
                    }
                }
                .ant-menu-submenu-title{
                    font-size: 14px;
                    font-weight: 500;
                    color: ${({ darkMode }) =>
                      darkMode ? `#ffffff90;` : "#5A5F7D"};
                    svg,
                    i{
                        color: ${({ darkMode }) =>
                          darkMode ? `#ffffff90;` : "#5A5F7D"};
                    }
                    .ant-menu-submenu-arrow{
                        font-family: "FontAwesome";
                        font-style: normal;
                        ${({ theme }) =>
                          theme.rtl ? "margin-right" : "margin-left"}: 6px;
                        &:after{
                            color: ${({ darkMode }) =>
                              darkMode ? `#ffffff90;` : "#9299B8"};
                            content: '\\f107';
                            background-color: transparent;
                        }
                    }
                }
            }
        }
      }
      .header-more{
        .head-example{
            ${({ darkMode }) => (darkMode ? `color: #A8AAB3;` : "")};
        }
    }
    .customizer-trigger{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: ${({ theme }) =>
          theme.rtl ? "0 10px 10px 0" : "10px 0 0 10px"};
        background-color: #5F63F2;
        position: fixed;
        ${({ theme }) => (theme.rtl ? "left" : "right")}: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: all .3s ease;
        z-index: 999;
        box-shadow: 0 10px 15px rgba(#5F63F2,.20);
        &.show{
            ${({ theme }) => (theme.rtl ? "left" : "right")}: 295px;
        }
        svg,
        img{
            width: 20px;
            color: #fff;
            animation: antRotate 3s infinite linear;
        }
    }
    .customizer-wrapper{
        position: fixed;
        top: 0;
        ${({ theme }) => (theme.rtl ? "left" : "right")}: 0;
        width: 350px;
        transform: translateX(${({ theme }) =>
          theme.rtl ? "-350px" : "350px"});
        height: 100vh;
        overflow-y: auto;
        background-color: #fff;
        box-shadow: 0 0 30px #9299B810;
        z-index: 99999999999;
        transition: all .3s ease;
        @media only screen and (max-width: 479px){
            width: 280px;
            transform: translateX(${({ theme }) =>
              theme.rtl ? "-280px" : "280px"});
        }
        &.show{
            transform: translateX(0);
        }
    }
    .customizer{
        height: 100%;
        .customizer__head{
            position: relative;
            padding: 18px 24px;
            border-bottom: 1px solid #f0f0f0;
            text-align: left;
            .customizer-close{
                position: absolute;
                right: 15px;
                top: 15px;
                svg,
                i{
                    color: #FF4D4F;
                }
            }
            .customizer__title{
                font-weight: 600;
                color: #272B41;
                font-size: 16px;
                margin-bottom: 2px;
            }
        }
        .customizer__body{
            padding: 25px;
        }
        .customizer__single{
            &:not(:last-child){
                margin-bottom: 35px;
            }
            h4{
                font-weight: 600;
                font-size: 16px;
                margin-bottom: 10px;
                color: #272B41;
            }
        }
    }
    .customizer-list{
        margin: -10px;
        .customizer-list__item{
            position: relative;
            display: inline-block;
            min-height: 60px;
            background-size: cover;
            margin: 10px;
            &.top{
                span.fa{
                    top: 35px;
                }
            }
            &:hover{
                span{
                    color: #5F63F2;
                }
            }
            a{
                position: relative;
                display: block;
                &.active{
                    span.fa{
                        display: block;
                    }
                }
                span.fa{
                    display: none;
                    font-size: 16px;
                    margin-top: 0;
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    color: ${({ theme }) => theme["success-color"]};
                }
            }
            img{
                width: 100%;
            }
            span{
                display: inline-block;
                margin-top: 15px;
                color: #272B41;
            }
        }
    }
   
    .certain-category-search-wrapper{
        ${({ darkMode, theme }) =>
          darkMode
            ? `${
                !theme.rtl ? "border-right" : "border-left"
              }: 1px solid #272B41;`
            : ""};
         @media only screen and (max-width: 767px){
            padding: 0 15px;
        }
        input{
            max-width: 350px;
            ${({ darkMode }) => (darkMode ? `background: #272B41;` : "")};
            ${({ darkMode }) => (darkMode ? `color: #fff;` : "#5A5F7D")};
            @media only screen and (max-width: 875px){
                ${({ theme }) =>
                  !theme.rtl ? "padding-left" : "padding-right"}: 5px;
            }
        }
    }

    /* Sidebar styles */
    .ant-layout-sider{
        box-shadow: 0 0 30px #9299B810;
        @media (max-width: 991px){
            box-shadow: 0 0 10px #00000020;
        }
        &.ant-layout-sider-dark{
            background: ${({ theme }) => theme["dark-color"]};
            .ant-layout-sider-children{
                .ant-menu{
                    .ant-menu-submenu-inline{
                        > .ant-menu-submenu-title{
                            padding: 0 30px !important;
                        }
                    }
                    .ant-menu-item{
                        padding: 0 30px !important;
                    }
                }
            }
        }
        
        .ant-layout-sider-children{
            padding-bottom: 15px;
            >.sidebar-nav-title{
                margin-top: 8px;
            }

            .ant-menu{
                overflow-x: hidden;
                ${({ theme }) =>
                  theme.rtl ? "border-left" : "border-right"}: 0 none;
                .ant-menu-submenu, .ant-menu-item{
                    .feather,
                    img{
                        width: 16px;
                        font-size: 16px;
                        color: ${({ theme }) => theme["extra-light-color"]};
                    }
                    span{
                        display: inline-block;
                        color: ${({ theme }) => theme["dark-color"]};
                        transition: 0.3s ease;
                        a{
                            ${({ theme }) =>
                              !theme.rtl
                                ? "padding-left"
                                : "padding-right"}: 20px;
                        }
                    }
                    .sDash_menu-item-icon{
                        line-height: .6;
                    }
                }
                .ant-menu-submenu{
                    span{
                        ${({ theme }) =>
                          !theme.rtl ? "padding-left" : "padding-right"}: 20px;
                    }
                }
                .ant-menu-item{
                    .menuItem-iocn{
                        width: auto;
                    }
                }
                .ant-menu-item,
                .ant-menu-submenu-title{
                    a{
                        position: relative;
                    }
                    >span{
                        width: 100%;
                        .pl-0{
                            ${({ theme }) =>
                              theme.rtl
                                ? "padding-right"
                                : "padding-left"}: 0px;
                        }
                    }
                    .badge{
                        position: absolute;                        
                        ${({ theme }) => (theme.rtl ? "left" : "right")}: 30px;
                        top: 50%;
                        transform: translateY(-50%);
                        display: inline-block;
                        height: auto;
                        font-size: 10px;
                        border-radius: 3px;
                        padding: 3px 4px 4px;
                        line-height: 1;
                        letter-spacing: 1px;
                        color: #fff;
                        &.badge-primary{
                            background-color: ${({ theme }) =>
                              theme["primary-color"]};
                        }
                        &.badge-success{
                            background-color: ${({ theme }) =>
                              theme["success-color"]};
                        }
                    }
                }
                .ant-menu-submenu{
                    .ant-menu-submenu-title{
                        display: flex;
                        align-items: center;
                        .title{
                            padding-left: 0;
                        }
                        .badge{
                            ${({ theme }) =>
                              theme.rtl ? "left" : "right"}: 45px;
                        }
                    }
                }
                .ant-menu-submenu-inline{
                    > .ant-menu-submenu-title{
                        display: flex;
                        align-items: center;
                        padding: 0 15px !important;
                        svg,
                        img{
                            width: 16px;
                            height: 16px;
                        }
                                                
                        .ant-menu-submenu-arrow{
                            right: auto;
                            ${({ theme }) =>
                              theme.rtl ? "left" : "right"}: 24px;
                            &:after,
                            &:before{
                                width: 7px;
                                background: #868EAE;
                                height: 1.25px;
                            }
                            &:before{
                                transform: rotate(45deg) ${({ theme }) =>
                                  !theme.rtl
                                    ? "translateY(-3.3px)"
                                    : "translateY(3.3px)"};
                            }
                            &:after{
                                transform: rotate(-45deg) ${({ theme }) =>
                                  theme.rtl
                                    ? "translateY(-3.3px)"
                                    : "translateY(3.3px)"};
                            }
                        }
                    }
                    &.ant-menu-submenu-open{
                        > .ant-menu-submenu-title{
                            .ant-menu-submenu-arrow{
                                transform: translateY(2px);
                                &:before{
                                    transform: rotate(45deg) translateX(-3.3px);
                                }
                                &:after{
                                    transform: rotate(-45deg) translateX(3.3px);
                                }
                            }
                        }
                    }
                    .ant-menu-item{
                        ${({ theme }) =>
                          theme.rtl
                            ? "padding-right"
                            : "padding-left"}: 0px !important;
                        ${({ theme }) =>
                          theme.rtl
                            ? "padding-left"
                            : "padding-right"}: 0 !important;
                        transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
                        a{
                            ${({ theme }) =>
                              theme.rtl
                                ? "padding-right"
                                : "padding-left"}: 50px !important;
                        }
                    }
                }
                .ant-menu-item{
                    display: flex;
                    align-items: center;
                    padding: 0 15px !important;
                    &.ant-menu-item-active{
                        border-radius: 4px;
                        ${({ darkMode }) =>
                          darkMode
                            ? `background-color: rgba(255, 255, 255, .05);`
                            : ""};
                    }
                    a{
                        width: 100%;
                        display: flex !important;
                        align-items: center;
                        .feather{
                            width: 16px;
                            color: ${({ theme }) => theme["extra-light-color"]};
                        }
                        span{
                            ${({ theme }) =>
                              !theme.rtl
                                ? "padding-left"
                                : "padding-right"}: 20px;
                            display: inline-block;
                            color: ${({ theme }) => theme["dark-color"]};
                        }
                    }
                    &.ant-menu-item-selected{
                        svg,
                        i{
                            color: ${({ theme }) => theme["primary-color"]};
                        }
                    }
                }
                .ant-menu-submenu,
                .ant-menu-item{
                    ${({ theme }) => theme.rtl && `padding-right: 5px;`}
                    
                    &.ant-menu-item-selected{
                        border-radius: 4px;
                        &:after{
                            content: none;
                        }
                    }
                    &.ant-menu-submenu-active{
                        border-radius: 4px;
                        ${({ darkMode }) =>
                          darkMode
                            ? `background-color: rgba(255, 255, 255, .05);`
                            : ""};
                    }
                }
                .sidebar-nav-title{
                    margin-top: 40px;
                    margin-bottom: 24px;
                }
                &.ant-menu-inline-collapsed{
                    .ant-menu-submenu{
                        text-align: ${({ theme }) =>
                          !theme.rtl
                            ? "left"
                            : "right"};                        
                        .ant-menu-submenu-title{
                            padding: 0 20px;
                            justify-content: center;
                        }
                    }
                    .ant-menu-item{
                        padding: 0 20px !important;
                        justify-content: center;
                    }
                    .ant-menu-submenu, .ant-menu-item{
                        span{
                            display: none;
                        }
                    }
                }
            }
        }
        .sidebar-nav-title{
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            ${({ darkMode }) =>
              darkMode
                ? `color: rgba(255, 255, 255, .38);`
                : "color: #9299B8;"};
            padding: 0 ${({ theme }) => (theme.rtl ? "20px" : "15px")};
            display: flex;
        }
        &.ant-layout-sider-collapsed{
            padding: 15px 0px 55px !important;
            .sidebar-nav-title{
                display: none;
            }
            & + .atbd-main-layout{
                ${({ theme }) =>
                  !theme.rtl ? "margin-left" : "margin-right"}: 80px;
            }
            .ant-menu-item{
                color: #333;
                .badge{
                    display: none;
                }
            }
        }
    }
    @media only screen and (max-width: 1150px){
        .ant-layout-sider.ant-layout-sider-collapsed{
            ${({ theme }) => (!theme.rtl ? "left" : "right")}: -80px !important;
        }

    }
    .atbd-main-layout{
    ${({ theme }) => (!theme.rtl ? "margin-left" : "margin-right")}: ${({
  theme,
}) => (theme.topMenu ? 0 : "280px")};
        margin-top: 64px;
        transition: 0.3s ease;
        @media only screen and (max-width: 1150px){
            ${({ theme }) =>
              !theme.rtl ? "margin-left" : "margin-right"}: auto !important;
        }
    }
 /* Mobile Actions */
    .mobile-action{
        position: absolute;
        ${({ theme }) => (theme.rtl ? "left" : "right")}: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: inline-flex;
        align-items: center;
        @media only screen and (max-width: 767px){
            ${({ theme }) => (theme.rtl ? "left" : "right")}: 0;
        }
        a{
            display: inline-flex;
            color: ${({ theme }) => theme["light-color"]};
            &.btn-search{
                ${({ theme }) =>
                  theme.rtl ? "margin-left" : "margin-right"}: 18px;
            }
            svg{
                width: 20px
                height: 20px;
            }
        }
    }
     .admin-footer{
        .admin-footer__copyright{
            display: inline-block;
            width: 100%;
            color: ${({ theme }) => theme["light-color"]};
            @media only screen and (max-width: 767px){
                text-align: center;
                margin-bottom: 10px;
            }
        }
        .admin-footer__links{
            text-align: ${({ theme }) => (theme.rtl ? "left" : "right")};
            @media only screen and (max-width: 767px){
                text-align: center;
            }
            a{
                color: ${({ theme }) => theme["light-color"]};
                &:not(:last-child){
                    ${({ theme }) =>
                      theme.rtl ? "margin-left" : "margin-right"}: 15px;
                }
                &:hover{
                    color: ${({ theme }) => theme["primary-color"]};
                }
            }
        }
    }   
`;

const HeaderDiv = Styled.div<{ darkMode: boolean }>`
    .ant-input{
        border: none;
    }
    .ant-input:focus{
        border: none;
        outline: 0;
        box-shadow: none;
    }
    .certain-category-icon{
        position: relative;
        bottom: -2px;
        color: ${({ theme, darkMode }) =>
          darkMode ? `#A8AAB3;` : theme["gray-color"]};
        @media only screen and (max-width: 767px){
            bottom: 0;
        }
        svg{
            margin-top: 4px;
            @media only screen and (max-width: 767px){
                width: 12px;
            }
        }
    }
`;

const PopContent = Styled.div`  
  a, .span {
      display: block;
      color: #888;
      padding: 6px 12px;
      text-align: ${({ theme }) => (theme.rtl ? "right" : "left")};
      span {
        ${({ theme }) => (theme.rtl ? "padding-right" : "padding-left")}: 12px;
      }
  }
  a:hover {
    background: ${({ theme }) => theme["primary-color"]}10;
    color: ${({ theme }) => theme["primary-color"]}
  }
`;
const PopTitle = Styled.p`
  text-align: ${({ theme }) => (theme.rtl ? "right" : "left")};
  padding: 8px 12px;
  font-size: 16px;
  margin: 0;
`;

const PopoverStyle = Styled(Popover)` 
`;
const TopMenuSearch = Styled.div`
    .top-right-wrap{
        position: relative;
        float: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
    }
    .search-toggle{
        display: flex;
        align-items: center;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        ${({ theme }) => (theme.darkMode ? `color: #A8AAB3;` : 'color :#5A5F7D')};
        .feather-x{
            display: none;
        }
        .feather-search{
            display: flex;
        }
        &.active{
            .feather-search{
                display: none;
            }
            .feather-x{
                display: flex;
            }
        }
        svg,
        img{
            width: 20px;
        }
    }
    .topMenu-search-form{
        position: absolute;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 100%;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        top: 12px;
        background-color: #fff;
        border: 1px solid ${({ theme }) => theme['border-color-normal']};
        border-radius: 6px;
        height: 40px;
        width: 280px;
        display: none;
        &.show{
            display: block;
        }
        .search-icon{
            width: fit-content;
            line-height: 1;
            position: absolute;
            left: 15px;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 15px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 9999;
        }
        i,
        svg{
            width: 18px;
            color: ${({ theme }) => (theme.darkMode ? `color: #A8AAB3;` : 'color:# 9299b8')};
        }
        form{
            height: auto;
            display: flex;
            align-items: center;
        }
        input{
            position: relative;
            border-radius: 6px;
            width: 100%;
            border: 0 none;
            height: 38px;
            padding-left: 40px;
            z-index: 999;
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 40px;
            &:focus{
                border: 0 none;
                box-shadow: 0 0;
                outline: none;
            }
        }
    }
`;

export { LayoutStyle, HeaderDiv, PopContent, PopTitle, PopoverStyle, TopMenuSearch };
