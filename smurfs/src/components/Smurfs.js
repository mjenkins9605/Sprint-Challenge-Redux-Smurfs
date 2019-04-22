import React from "react";

const Smurfs = props => {
  return (
    <ul>
      {props.smurfs.map(smurf => {
        return (
          <div key={props.name}>
            <h3>NAME: {smurf.name}</h3>
            <p>AGE: {smurf.age}</p>
            <p>HEIGHT: {smurf.height}</p>
          </div>
        );
      })}
    </ul>
  );
};

export default Smurfs;
