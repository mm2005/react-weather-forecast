import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Header>
      <nav>
        <p>
          <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link> |
          {"  "}
          <Link to="/about">About</Link>
        </p>
      </nav>
    </Header>
  );
}

const Header = styled.header`
  background-color: #bdd7f0;
  text-align: center;
  padding: 15px;
  &:hover {
    background-color: #cde4fa;
  }
`;

export default Navbar;
