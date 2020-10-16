import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import {getGifs} from '../helpers/getGifs'

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data:images,loading} = useFetchGifs(category);
    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs))
    // }, [category])

    //getGifs();

    return (
        <>
        <h3>{category}</h3>

       {loading?<p>Cargando</p>:null}
        <div className="cardgrid">
            
                 {
                images.map( img => (
                    <GifGridItem
                        key={img.id} 
                        {...img} 
                        />
                )) 
                }
            
        </div>
        </>
    )
}
