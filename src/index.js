import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <body>
      <div class="contact-info">
        <div class="card">
          <i class="card-icon far fa-envelope" />
          <p>email@domain.com</p>
        </div>

        <div class="card">
          <i class="card-icon fas fa-phone" />
          <p>+000000000000</p>
        </div>

        <div class="card">
          <i class="card-icon fas fa-map-marker-alt" />
          <p>New York, USA</p>
        </div>
      </div>
    </body>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
