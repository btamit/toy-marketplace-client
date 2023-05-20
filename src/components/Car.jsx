import React from 'react';
import { FaStar } from 'react-icons/fa';

const Car = ({car}) => {
    const { name, price, rating, image, detailsBtn} = car;
    return (
            <div className="bg-gray-700 w-1/2 p-5">
              <img className="w-80 pb-3" src={image} alt="" />
              <h2>{name}</h2>
              <h3 className='py-3'>{price}</h3>
              <div className='flex gap-3 items-center mb-3'>
                <h2>{rating}</h2>
                <h4 className="flex gap-1">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </h4>
              </div>
              <button className="btn btn-primary">{detailsBtn}</button>
            </div>
    );
};

export default Car;