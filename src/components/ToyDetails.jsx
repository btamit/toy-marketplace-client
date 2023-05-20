import React, { useEffect, useState } from 'react';
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
      <div className="bg-zinc-500 p-5 rounded flex flex-col">
            <h2>Welcome to toy details page {toyDetails.price} </h2>
      </div>
    );
};

export default ToyDetails;