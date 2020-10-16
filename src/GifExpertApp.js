import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


 export const GiftExpertApp =()=>{

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    //const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState([]);
    // const handleAdd=()=>{
    //     //setCategories([...categories,'Bleach']);
    //     setCategories(cats=>[...categories,'Bleach']);
    // }
    
    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCat={setCategories} />
            <hr />
            
            <ol>
                {
                    categories.map( category=> (
                        <GifGrid
                        key={category} 
                        category={category} 
                        />
                    ) )
                }
            </ol>

        </>
    );
}

export default GiftExpertApp;