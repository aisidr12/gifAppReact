import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory";
export const GifExpertApp =() =>{

    const [categories, setCategories] = useState(['Dragon Ball','One Punch']);

    const onAddCategory = () => {
    
        //categories.push('valorant')
        setCategories([ ...categories , 'valorant']);

    }

return ( 
    <>
    {/*titulo */}
    <h1>GifExpert</h1>
    {/*input */}
    <AddCategory />

    {/*listado */}
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
        {
        categories.map( category => {
            return <li key={category}>{category}</li>
        } )
        }
    </ol>
    </>
    )
}