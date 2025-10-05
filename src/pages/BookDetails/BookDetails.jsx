import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/AddToDB';

const BookDetails = () => {
    const {id} =useParams();
    const bookId = parseInt(id);
    // console.log(bookId)
    // console.log(id);
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image, } = singleBook;

    const handleMarkAsRead = (id) =>{
        // Working step
    //     store with id 
    //     where to store 
    //     array or collection

    //     if book already exist the show a alart
    //    if book not exist then push in the collection or array 

        addToStoredDB(id);

    }



    return (
        <div>
            <img className='w-2/12 ' src={image} alt="Book image" />
            <h5>{bookName}</h5>
            <button onClick={()=> handleMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
            <button className="btn btn-info m-2">Add to Wishlist</button>

        </div>
    );
};

export default BookDetails;