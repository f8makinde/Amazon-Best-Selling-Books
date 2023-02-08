import React from 'react'
import { Book } from './Book'
import { data } from './data'

export const BookList = () => {
 return data.map(books => {
    return <Book key={books.id} {...books}/>
 })
   
}