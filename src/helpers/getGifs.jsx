export const getGifts = async (category) => {
    const apiKey = `${import.meta.env.VITE_KEY_API}`;
    const url = `${import.meta.env.VITE_API_URL}/search?api_key=${apiKey}=${ category }&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
       id: img.id,
       title: img.title,
       url : img.images.downsized_medium.url 
    }));
    
    return gifs;
}