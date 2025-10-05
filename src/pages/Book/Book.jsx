import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';


const Book = ({singleBook}) => {
    // console.log(singleBook);

    const {bookName, bookId, author, image, review , rating, category, tags, yearOfPublishing, publisher} = singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100  shadow-sm border-1 border-gray-200">
            <figure className=' p-3 bg-gray-100 w-2/3 mx-auto'>
                <img
                className='h-[166px]'
                src={image}
                alt="book" />
            </figure>
            <div className="card-body">
                <div className='flex justify-start gap-3'>
                {
                    tags.map(tag => <button className='bg-gray-100 text-[#23BE0A] font-medium px-3 rounded-full'>{tag}</button>)
                }
                </div>
                <h2 className="card-title">
                {bookName}
                <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p>Book by: {publisher}</p>
                <div className='border-t-1 border-dashed'></div>
                <div className="card-actions justify-between">
                <div className="badge ">{category}</div>
                <div className="badge">{rating} <FaStarHalfAlt /></div>
                </div>
            </div>
            </div>
        </Link>
    );
};

export default Book;