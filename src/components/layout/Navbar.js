import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const Header = styled.header`
    background-image: url("https://jooinn.com/images/cloudy-58.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
    text-align: center;
    padding: 15px;
    height: 100px;
    &:hover {
      background-color: #cde4fa;
    }
  `;

  const NavParagraph = styled.p`
    color: orange;
    font-size: 50px;
    text-decoration: none;
  `;

  const NavLink = styled(Link)`
    text-decoration: none;
    color: #003464;
  `;

  return (
    <Header>
      <nav>
        <NavParagraph>
          <NavLink to="/">WEATHER</NavLink> |{" "}
          <NavLink to="/favorites">MY CITIES</NavLink>{" "}
          <NavLink to="/registration">Reg</NavLink>{" "}
        </NavParagraph>
      </nav>
    </Header>
  );
}

export default Navbar;
