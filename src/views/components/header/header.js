import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import { NavLink } from "react-router-dom";
import "./header.css";
import styled from "styled-components";

const HeaderStyled = styled.h1`
  color: #005073;
`;

const Header = ({ authenticated, signOut, id }) => {
  let name = "Marte";
  if (id === "WWdnUfUrNObrZf1xp6PvAgoLfgV2") {
    name = "Anders";
  }
  return (
    <header className="header">
      <div className="g-row">
        <div className="g-col">
          <HeaderStyled className="header__title">
            <NavLink to="/">
              <span className="header__name">Handleliste</span>
            </NavLink>
          </HeaderStyled>
          <ul className="header__actions">
            {authenticated ? (
              <span>
                <li>
                  <NavLink to="/planning">🍽 Middag</NavLink>
                </li>
                <li>
                  <span role="img" aria-label="Hei">
                    👋{" "}
                  </span>
                  {name}
                </li>
                <li>
                  <Button onClick={signOut}>Logg ut</Button>
                </li>
              </span>
            ) : null}
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Header;
