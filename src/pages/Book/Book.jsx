import React from 'react';

const Book = ({singleBook}) => {
    // console.log(singleBook);

    const {bookName, author, image, review } = singleBook;
    return (
        <div className="card bg-base-100  shadow-sm border-1 border-gray-200">
        <figure className=' p-3 bg-gray-100 w-2/3 mx-auto'>
            <img
            className='h-[166px]'
            src={image}
            alt="book" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
        </div>
    );
};

export default Book;