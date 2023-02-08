import React from 'react'
import { Book } from './Book'
import { data } from './data'

export const BookList = () => {
 return data.map((books, index) => {
    return (
    <div className='set'>
        <div className='list-text'>
        <h3>{index + 1} </h3>
        </div>
    <Book key={books.id} {...books} />
     </div>
    )
 })
   
}