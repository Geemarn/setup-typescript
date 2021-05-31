import React, { useLayoutEffect } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { TopMenuStyle } from "./styles";

const TopMenu = () => {
  const { path } = useRouteMatch();

  useLayoutEffect(() => {
    const active = document.querySelector('.strikingDash-top-menu a.active');
    console.log('active:::', active);
    // const activeDefault = () => {
    //   const megaMenu = active.closest('.megaMenu-wrapper');
    //   const hasSubMenuLeft = active.closest('.has-subMenu-left');
    //   if (!megaMenu) {
    //     active.closest('ul').previousSibling.classList.add('active');
    //     if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
    //   } else {
    //     active.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
    //   }
    // };
    // window.addEventListener('load', active && activeDefault);
    // return () => window.removeEventListener('load', activeDefault);
  }, []);

  //add className active to className wth [arent
  const addParentActive = (e: Record<string, any>) => {
    document.querySelectorAll('.parent').forEach((element) => {
      element.classList.remove('active');
    });

    const hasSubMenuLeft = e.currentTarget.closest('.has-subMenu-left');
    const megaMenu = e.currentTarget.closest('.megaMenu-wrapper');
    if (!megaMenu) {
      e.currentTarget.closest('ul').previousSibling.classList.add('active');
      if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
    } else {
      e.currentTarget.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
    }
  };


  return (
    <TopMenuStyle>
      <div className="strikingDash-top-menu">
        <ul>
          <ul>
            <li>
              <NavLink to={`${path}/social`} onClick={addParentActive}>
                Dashboard
              </NavLink>
            </li>
          </ul>
        </ul>
      </div>
    </TopMenuStyle>
  );
};

export default TopMenu;
