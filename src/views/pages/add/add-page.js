import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddPage extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
  };

  getItemsParam(search) {
    const params = new URLSearchParams(search);
    return params.get("items");
  }

  render() {
    return (
      <div className="g-row">
        <div className="g-col">
          <h2>Legg til disse varene i lista:</h2>
        </div>
        <div className="g-col">
          <ul>
            {this.getFilterParam(this.props.location.search).map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>

        <button>Legg til</button>
        <button>Tilbake</button>
      </div>
    );
  }
}

export default AddPage;
