import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authActions } from "../../../auth";
import Button from "../../components/button";

import "./sign-in-page.css";

const SignInPage = ({ signInWithGoogle }) => {
  return (
    <div className="g-row sign-in">
      <div className="g-col">
        <p className="sign-in__greeting">Velkommen til handlelisten!</p>
        <h1 className="sign-in__heading">
          Logg inn{" "}
          <span role="img" aria-label="Velkommen">
            🚀
          </span>
        </h1>
        <Button className="sign-in__button" onClick={signInWithGoogle}>
          Google
        </Button>
      </div>
    </div>
  );
};

SignInPage.propTypes = {
  signInWithGoogle: PropTypes.func.isRequired,
};

//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = {
  signInWithGoogle: authActions.signInWithGoogle,
};

export default withRouter(connect(null, mapDispatchToProps)(SignInPage));
