//import {memo} from "react";
import React from "react";

export const Small = React.memo( ({value} ) => {

console.log("me volvi a dibujar :(");

  return (
    <h1> Counter: <small>{value} </small> </h1>
  )
})
