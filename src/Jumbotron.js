import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        {props.children}
        <p className="lead">
          Get Points by clicking on an image but don't click on any more than
          once!!
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
