import React from "react";

const Attribute = ({ values }) => {
  const pickedvalue = pickrandom(values);
  return <span>{pickedvalue}</span>;
};

export default Attribute;
