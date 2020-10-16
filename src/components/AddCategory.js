import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setCat})=>{ // {setCat} se puede desestructurar en vez de usar props

    const [inputValue, setInputValue]= useState('');

    const handleInputChange= (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length>1){

            setCat(cats=> [inputValue,...cats ]);
            setInputValue('');
        }
        // setCategories(cats=> [...cats, inputValue])
       // props.setCategories()
        //console.log('submit done');
    }

    return(
       <form onSubmit={handleSubmit}>

           <input 
           type="text"
           value={inputValue}
           onChange={ handleInputChange}
           />

           
       </form>
            
      
    )
}
AddCategory.propTypes = {

    setCat: PropTypes.func.isRequired
}