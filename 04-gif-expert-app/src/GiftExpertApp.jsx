import {useState} from "react";
import { AddCategory } from "./components/addCategory";
import { GifGrid } from "./components/GifGrid";


export const GiftExpertApp = () => {

  const [categories , setCategories] = useState(["One Punch" ]);
  
  const onAddCategory=(newCategory) =>{
   if (categories.includes(newCategory)) return;

    
     
    // console.log(newCategory)
    //  categories.push(newCategory);
   
   
     setCategories([newCategory,...categories])
      
    }
  
  return (
   

    <>
      <h1>GiftExpertApp</h1>
    
      

     <AddCategory
      // setCategories={setCategories}
      onNewCategory={  (event) =>onAddCategory(event)}
      />
     
    
   
      {categories.map(category=> 
       (<GifGrid key={category} 
        category={category} />
            )
        ) }
       
    </>
    
  )
}
