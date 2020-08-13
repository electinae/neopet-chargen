import React, { useState } from "react";
import "./styles.css";
import Neopet from "./neopet";
import data from "./attributedata";
import { Names } from "fantasy-content-generator";
import background from "./backgrounds";

function pickrandom(values) {
  var count = values.length;
  var randomindex = Math.round(Math.random() * count);
  return values[randomindex];
}

function GenerateNeopet() {
  return {
    name: Names.generate({ races: ["gnome", "halfling", "halforc"] }).name,
    gender: pickrandom(data.gender),
    color: pickrandom(data.color),
    breed: pickrandom(data.breed),
    world: pickrandom(data.world),
    origin: pickrandom(data.origin)
  };
}

export default function App() {
  // const [inputcolor, setinputcolor] = useState();
  const [neopet,setneopet]=useState(GenerateNeopet())
  const color = neopet.color;
  const gradient = background[color];
  function loadneopet(){
    setneopet(GenerateNeopet())
  }

    return (
    <div
      className="container"
      style={{ background: `linear-gradient(${gradient})` }}
    >
      {/* <select
        value={inputcolor}
        onChange={(event) => setinputcolor(event.target.value)}
      >
        <option>Select a color</option>
        {data.color.map((color) => (
          <option value={color}>{color}</option>
        ))}
      </select> */}
       <div className="center"><button onClick={loadneopet}>Pet me!</button></div>
      <Neopet {...neopet} />
     
    </div>
  );
}
