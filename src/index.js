/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Baptiste() {
  console.log("Nice to see you there :)");
  return (
    <div className="App">
      <div className="container">
        <h1>
          Hey 👋, <br /> Baptiste Marcon.
        </h1>
        <h3>
          IT Engeneering Student at{" "}
          <a href="https://ecole-ingenieurs.cesi.fr/">Cesi</a>
        </h3>
        <h3>GraphQL / TypeScript Enthusiast</h3>
        <h5>You can follow me here :</h5>
        <p className="links">
          <i className="fab fa-github-square" />
          <a href="http://github.com/baptistemcn" />
          <i className="fab fa-medium" />
          <a href="https://medium.com/@baptiste.marcon" />
          <i className="fab fa-linkedin" />
          <a href="https://www.linkedin.com/in/baptiste-marcon/" />
        </p>
        <button className="resume">
          <a href="/">
            <div className="btn">
              <div className="btn-content">Download Resume!</div>
            </div>
          </a>
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Baptiste />
  </React.StrictMode>,
  document.getElementById("root")
);
