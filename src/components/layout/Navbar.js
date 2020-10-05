import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <nav>
      <Header>
        <Link to="/">Home</Link> | <Link to="/">About</Link>
        <Link to="/" style={{ float: "right" }}>
          Favorites
        </Link>
      </Header>
    </nav>
  );
}

const Header = styled.header`
  background-color: lightgreen;
  text-align: center;
  padding: 15px;
  font-family: ${(props) => props.theme.fontFamily};
  &:hover {
    background-color: lightgray;
  }
`;

export default Navbar;
