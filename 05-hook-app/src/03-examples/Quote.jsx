import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({status,name}) => {

  const pRef= useRef ();
  const [boxsize, setboxsize] = useState({  width:0, height:0 })

useLayoutEffect(() => {

const{height, width}= (pRef.current.getBoundingClientRect());
  setboxsize({height, width});
 

  
;
}, [name])



  return (

    <>
     <blockquote className='blockquote text-end'
    style= {{display:"flex"}}
    >
    

      
        <footer className='blockquote-footer'>{name} </footer>
        <p ref= {pRef} className='mb-1'>{status }</p>


      </blockquote>

      <code> {JSON.stringify(boxsize)} </code>
    
    </>
     )
}
