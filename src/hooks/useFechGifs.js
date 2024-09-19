import { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifs';

export const useFechGifs = ( category ) => {

    const [images, setimages] = useState([]);

    const [isLoading, setIsLoading ] = useState( true );

    const getImages = async () => {
        const newImages =  await getGifts(category);
        setimages(newImages);
        setIsLoading(false);
    }
    
    useEffect(()=>{
        getImages(category);

    }, [] );  // si las dependencias estan vacias, significa que se ejecuta la primera vez que se crea componente

  return {
    images: images,
    isLoading
  }
}
