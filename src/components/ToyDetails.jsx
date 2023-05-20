import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    const {id} = useParams();
    const [toyDetails, setToyDetails] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/toyDetails/${id}`)
        .then(res => res.json())
        .then(data => setToyDetails(data))
    },[id])

    return (
      <div className="bg-slate-800 p-5 rounded flex flex-col my-container">
        <img
          className="mb-8 bg-gray-500 p-5 rounded"
          src={toyDetails.image}
          alt=""
        />
        <h2 className="text-2xl font-bold ">Toy's Name : {toyDetails.toyName}</h2>
        <h3 className='text-xl font-bold my-5'>Seller Name : {toyDetails.sellerName}</h3>
        <p className='text-xl font-bold'>Email : {toyDetails.email}</p>
        <p className='text-xl font-bold my-5'>Price : ${toyDetails.price}</p>
        <div className="flex mt-auto gap-3 items-center">
          <p className='text-xl font-semibold'>Rating : {toyDetails.rating}</p>
          <div className="flex">
            <FaStar className="text-yellow-300"></FaStar>
            <FaStar className="text-yellow-300"></FaStar>
            <FaStar className="text-yellow-300"></FaStar>
            <FaStar className="text-yellow-300"></FaStar>
            <FaStar className="text-yellow-300"></FaStar>
          </div>
        </div>
        <p className='my-5 font-bold'>Quantity : {toyDetails.quantity}</p>
        <p className='font-bold'>Description : {toyDetails.description}</p>
      </div>
    );
};

export default ToyDetails;