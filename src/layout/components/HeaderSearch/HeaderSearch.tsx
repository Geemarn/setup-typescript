import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Input, Popover } from "antd";
import { HeaderDiv, PopContent, PopTitle, PopoverStyle } from "../../styles";
import { searchData } from "../../Data";

const HeaderSearch = ({
  darkTheme,
}: {
  darkTheme: boolean;
}) => {
  const searchDataArr = Object.values(searchData);
  const [data, setData] = useState(searchDataArr);

  const search = (e: Record<string, any>) => {
    const filteredData = searchDataArr.filter((item) => {
      return item.title.toUpperCase().startsWith(e.target.value.toUpperCase());
    });
    setData(filteredData);
  };

  const content = (
    <div>
      {data.length ? (
        data.map((group) => {
          const { title, count, id } = group;
          return (
            <NavLink key={id} to="#">
              {title}
              <span className="certain-search-item-count">{count} people</span>
            </NavLink>
          );
        })
      ) : (
        <NavLink to="#">Data Not found....</NavLink>
      )}
    </div>
  );

  return (
    <HeaderDiv
      className="certain-category-search-wrapper"
      style={{ width: "100%" }}
      darkMode={darkTheme}
    >
      <Row className="ant-row-middle">
        <Col md={22} xs={23}>
          <PopoverStyle
            placement={"bottomLeft"}
            content={<PopContent>{content}</PopContent>}
            title={<PopTitle>Search List</PopTitle>}
            trigger="focus"
          >
            <span className="certain-category-icon">
              <i className="ri-search-line" />
            </span>
            <Input placeholder="Search..." onInput={search} />
          </PopoverStyle>
        </Col>
      </Row>
    </HeaderDiv>
  );
};

export default HeaderSearch;
