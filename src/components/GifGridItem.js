import React from 'react'

// export const GifGridItem = (props) => {
export const GifGridItem = ({id,title,url}) => {
    console.log({id,title,url})
    return (
        <div className="card animate__animated animate__fadeIn">
            <h1>{title}</h1>
            <img src={url} alt={title} />
        </div>
    )
}
