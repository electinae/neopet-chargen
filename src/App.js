import React, { useState } from "react";
import "./styles.css";
import Neopet from "./neopet";
import data from "./attributedata";
import { Names } from "fantasy-content-generator";
import background from "./backgrounds";

function pickrandom(values) {
  var count = values.length;
  var randomindex = Math.floor(Math.random() * (count - 1));
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
  const [inputcolor, setinputcolor] = useState();
  const newNeopet = GenerateNeopet();
  const color = newNeopet.color;
  const gradient = background[inputcolor || color];

  return (
    <div
      className="container"
      style={{ background: `linear-gradient(${gradient})` }}
    >
      <select
        value={inputcolor}
        onChange={(event) => setinputcolor(event.target.value)}
      >
        <option>Select a color</option>
        {data.color.map((color) => (
          <option value={color}>{color}</option>
        ))}
      </select>
      <Neopet {...newNeopet} />
    </div>
  );
}