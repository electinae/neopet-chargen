import React from "react";

const Neopet = ({ name, gender, color, breed, world, origin }) => {
  return (
    <div>
      {name}, a {gender} {color} {breed} from {world}, who is a(n) {origin}.
    </div>
  );
};

export default Neopet;
