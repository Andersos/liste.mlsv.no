import React from "react";
import PropTypes from "prop-types";
import Button from "../button";

import "./header.css";

const Header = ({ authenticated, signOut, id }) => {
  let name = "Marte";
  if (id === "WWdnUfUrNObrZf1xp6PvAgoLfgV2") {
    name = "Anders";
  }
  return (
    <header className="header">
      <div className="g-row">
        <div className="g-col">
          <h1 className="header__title">Handleliste</h1>
          <ul className="header__actions">
            {authenticated ? (
              <span>
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
  signOut: PropTypes.func.isRequired
};

export default Header;
