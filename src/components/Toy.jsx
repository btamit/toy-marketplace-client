import React from 'react';
import { FaStar } from 'react-icons/fa';

const Toy = ({toy}) => {
    const {image,toyName,sellerName,email,price,rating,quantity,category,description} = toy;
    return (
      <div className="bg-gray-700 p-5">
        <img className="w-80 h-64 pb-3" src={image} alt="" />
        <h2>Name : {toyName}</h2>
        <h3 className="py-3">Price : ${price}</h3>
        <div className="flex gap-3 items-center mb-3">
          <h2>Rating : {rating}</h2>
          <h4 className="flex gap-1">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </h4>
        </div>
        <button className="btn btn-primary">View Details</button>
      </div>
    );
};

export default Toy;