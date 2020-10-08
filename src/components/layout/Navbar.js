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
  background-image: url('https://jooinn.com/images/cloudy-58.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
  text-align: center;
  padding: 15px;
  height:100px;
  &:hover {
    background-color: #cde4fa;
  }
`;

export default Navbar;
