import React from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import styled from "styled-components";
import { useFavorites } from "../hooks/useFavorites";

const StyledHeader = styled.header`
  display: flex;
  justify-content: end;
  padding: 10px 10px 5px;
  position: fixed;
  width: 100%;
  pointer-events: none;
  top: 0;
  left: 0;
`;
const Counter = styled.span`
  background: #28b8db;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 18px;
  bottom: 0px;
`;
const Header = () => {
  const { favorites } = useFavorites();
  return (
    <StyledHeader>
      <BsFillBookmarkHeartFill fontSize={18} style={{marginRight: '15px'}}/>
      <Counter>{favorites.length}</Counter>
    </StyledHeader>
  );
};

export default Header;
