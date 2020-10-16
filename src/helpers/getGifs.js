export const getGifs = async (category) =>{

    //const url= 'https://api.giphy.com/v1/gifs/search?q=bleach&limit=10&api_key=BzwD0OpMikgHzvHCNMdh6BvfyH4TFJhq'
    const url= `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=BzwD0OpMikgHzvHCNMdh6BvfyH4TFJhq`
    const resp= await fetch(url);
    const {data} = await resp.json();

    const gif = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url,

        }
    })
    return gif;
}