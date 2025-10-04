import React from 'react';
import bookImage from "../../assets/books.jpg";
const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full bg-amber-50 '>
            <div>
                <h1>Books to freshen up your bookshelf</h1>
                <button className='btn btn-primary'>View The List</button>
            </div>
            <div>
                <figure className='w-4/12'>
                    <img src={bookImage} alt="Banner Image" />
                </figure>
            </div>
        </div>
    );
};

export default Banner;