import React, { Fragment, useState } from "react"
import { AddCategory, GifGrid} from "./components";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        //categories.push('valorant')
       // setCategories([ newCategory, ...categories]);
       if(categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ]);
    }

return ( 
    <>
    <h1>GifExpert - App</h1>
    <AddCategory
     onNewCategory =  { ( value ) => onAddCategory( value) }
   // setCategories= { setCategories } 
    />    
        {
            categories.map( ( category ) => {
            return <GifGrid key={ category }
                    category={ category }
            />
        })
        }
    </>
    )
}