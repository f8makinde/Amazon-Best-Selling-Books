import React from 'react'

export const Book = (props) =>{
    const {img, title, author, edition, price} = props
    return(
        <div>
            <img src={img} alt='booklist' />
            <h2>{title}</h2>
            <p>{author}</p>
            <h4>{edition}</h4>
            <p>${price}</p>
        </div>
    )
}