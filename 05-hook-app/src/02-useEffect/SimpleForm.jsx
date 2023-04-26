import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

   const [formState, setFormState] = useState({
    username: "strider",
    email: "sebastian@google.com"

   })

   
   const{username, email}= formState;

   const onImputChange= ({target} ) => {
      const{name, value}= target;
     setFormState({
      ...formState,
      [name]:value
     } );
   }

   useEffect(()=>{
    // console.log("useEffect called!")
   },[] );

   useEffect(()=>{
    // console.log("formState Changed!")
   },[formState] );

   useEffect(()=>{
    // console.log("email Changed!")
   },[email] );

  //  useEffect(() => {
  //    first
   
  //    return () => {
  //      second
  //    }
  //  }, [third])
   
 
 
   return (
   <>
   <h1>Formulario Simple</h1>
   <hr />

   <input 
          type="text"
           className="form-control"
           placeholder="Username"
           name="username" 
           value={username}
           onChange={onImputChange}
           />

<input 
          type="email"
           className="form-control mt-2"
           placeholder="sebastian@google.com"
           name="email" 
           value={email}
           onChange={onImputChange}

           />

          {
            (username=== "strider2")&& <Message/>
          }
           
   </>
  )
}
