import React from "react";
import a from 'indefinite';

const Neopet = ({ name, gender, color, breed, world, origin }) => {
  return (
    <div className="neopet">
      {name}, a {gender} {color} {breed} from {world}, who is {a(origin)}.
    </div>
  );
};

export default Neopet;
