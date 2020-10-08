import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const LinkStyle = {
    color: "orange",
    fontSize: "50px",
    textDecoration: "none",
  };

  return (
    <Header>
      <nav>
        <p style={LinkStyle}>
          <Link to="/" style={{ textDecoration: "none", color: "#003464" }}>
            WEATHER
          </Link>{" "}
          |{" "}
          <Link
            to="/favorites"
            style={{ textDecoration: "none", color: "#003464" }}
          >
            MY CITIES
          </Link>{" "}
        </p>
      </nav>
    </Header>
  );
}

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

export default Navbar;
