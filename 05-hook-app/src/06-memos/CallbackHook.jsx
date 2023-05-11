import { useCallback, useState } from "react";

import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

  const [Counter, setCounter] = useState(10);

  const incrementFather= useCallback(
    () => {
   
    setCounter ((value)=>value+1);
     },
    [],
  )
  

//   const incrementFather= () => {
//      setCounter(Counter+1);

//   }

  return (
   
    <>
    <h1>useCallback Hook: {Counter} </h1>
    <hr />

   <ShowIncrement increment={incrementFather} />

    </>
  )
}
