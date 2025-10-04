import React from 'react';
import bookImage from "../../assets/book1.png";
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen md:p-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
            src={bookImage}
            className="max-w-sm rounded-lg "
            />
            <div>
            <h1 className="text-5xl font-bold mb-4">Books to freshen up your bookshelf</h1>
            <button className="btn btn-primary">View The List</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;