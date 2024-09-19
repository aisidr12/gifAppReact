import React, { useEffect,useState } from 'react'
import { getGifts } from '../helpers/getGifs'

export const GifGrid = ({ category  }) => {
    //Use effect se usa solo para cuando el componente se utiliza por primera vez,
    // digamos que esto evita que se repita la llamada multiples veces
    
    const [images, setimages] = useState([])

    const getImages = async () => {
        const newImages =  await getGifts(category);
        setimages(newImages);
    }
    
    useEffect(()=>{
        getImages(category);

    }, [] );  // si las dependencias estan vacias, significa que se ejecuta la primera vez que se crea componente
   
    return (
    <>
        <h3> { category } </h3>
        <ol>
            {
                images.map( image => 
                     <li key={ image.id }> { image.title }  </li>)
            }
        </ol>
    </>
    )
}
