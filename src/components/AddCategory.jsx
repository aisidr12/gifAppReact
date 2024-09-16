import React from 'react'
import { useState } from 'react'
//rafc
export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('One Punch')
    const onInputChange = ( {target}) => {
        setInputValue( target.value)
    }

      const onSubmit=(event)=>{
        event.preventDefault();
         console.log(event);
      }


  return (
    <form onSubmit={ (event) => onSubmit(event)}> 
     <input type="text"
    placeholder='Buscar Gifs' 
    value = { inputValue }
    onChange={  onInputChange }
    />

    </form>
   
  )
}
