import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <body>
      <div className="contact-info">
        <div className="card">
          <i className="card-icon far fa-envelope" />
          <p>l.hutchinsonj@gmail.com</p>
        </div>
      </div>

      <div className="contact-info">
        <div className="card">
          <i className="card-icon fas fa-phone" />
          <p>0000000000</p>
        </div>
      </div>

      <div className="contact-info">
        <div className="card">
          <i className="card-icon fas fa-map-marker-alt" />
          <p>New York</p>
        </div>
      </div>
    </body>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
