import React, { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon Ball','One Punch']);

    const onAddCategory = ( newCategory ) => {
        //categories.push('valorant')
       // setCategories([ newCategory, ...categories]);
       if(categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ]);
    }

return ( 
    <>
    {/*titulo */}
    <h1>GifExpertApp</h1>

    {/*input */}

    <AddCategory
    
     onNewCategory =  { ( value ) => onAddCategory( value) }
   // setCategories= { setCategories }
    
    />

    {/*listado */}
    <button onClick={onAddCategory}> Agregar </button>
    <ol>
        {
        categories.map( (category, i) => {
            return <li key={category}>{category}</li>
        } )
        }
    </ol>
    </>
    )
}