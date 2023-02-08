import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
const BookList = () =>{
  return (
  <div className='books'>
  <Book 
  bookImg="https://m.media-amazon.com/images/I/81xSzfdj4ML._AC_UL320_.jpg"
  title="Amazon Ads for Authors: Unlock Your Full Advertising Potential (Reedsy Marketing Guides Book 2)"
  subTitle = "Book 2 of 2: Reedsy Marketing Guides"
  price={5.99}
  />
  <Book 
    bookImg="https://m.media-amazon.com/images/I/811BYF3YzfL._AC_UL320_.jpg"
    title="The Fires: A Novel"
    subTitle = "Paperback"
    price={12}
  >
    <p>A charming exploration of friendship, reckoning, and hope that traces a widow's unlikely connection with a giant Pacific octopus.A charming exploration of friendship, reckoning, and hope that traces a widow's unlikely connection with a giant Pacific octopus.</p>
    </Book>
  <Book
    bookImg="https://m.media-amazon.com/images/I/91NlZifnNEL._AC_UL320_.jpg"
    title="Spare by Prince Harry The Duke of Sussex and Random House Audio"
    subTitle = "Audible Audiobook"
    price={0}
  />
  <Book
    bookImg="https://m.media-amazon.com/images/I/814wTXfqK6L._AC_UL320_.jpg"
    title="Audible Audiobook"
    subTitle = "Book 2 of 2: Reedsy Marketing Guides"
    price={0}
  />
  </div>
  )
}
const Book = (props) => {
  const {bookImg, title, subTitle, price, children} = props
  return (
  <div>
  <img src={bookImg} alt='' />
  <h1>{title}</h1>
  <p>{subTitle}</p>
  <h1>${price}</h1>
  {children}
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)