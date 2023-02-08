import React from 'react'
import { BookList } from './BookList'

export const App = () =>{
    return(
        <>
         <h1 style={{textAlign: 'center', color: '#D63333'}}>Best selling books in Amazon</h1>
         <div className='books--list'>
         <main>
         <BookList /> 
         </main>  
         </div>
        </>    
    )
}