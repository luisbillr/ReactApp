import React from 'react'

export const GifGridItem = ({img}) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={img.url} alt={img.title}/>
            <p className="card-title">{img.title}</p>
        </div>
    )
}
