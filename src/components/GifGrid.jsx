import React, { useEffect,useState } from 'react'
import { getGifts } from '../helpers/getGifs'
import { GifItem } from './GifItem'
import { useFechGifs } from '../hooks/useFechGifs'

export const GifGrid = ({ category  }) => {
    //Use effect se usa solo para cuando el componente se utiliza por primera vez,
    // digamos que esto evita que se repita la llamada multiples veces

    const  {mages, isLoading } = useFechGifs( category );
    
    return (
    <>
        <h3> { category } </h3>
        <div className='card-grid'> 
            {
                images.map( image => 
                     <GifItem key={ image.id }
                       {... image} //Esto hace que envie todas las propiedades del objeto.
                     />
                    )
            }
        </div>
    </>
    )
}
