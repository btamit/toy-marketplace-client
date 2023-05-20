import React from 'react';
import { FaStar} from "react-icons/fa";
const Gallery = ({gallery}) => {
    const { img, title, subTitle, icon, eyeIcon, views } = gallery;
  return (
    <div className="bg-zinc-500 p-5 rounded flex flex-col">
      <img
        className="w-96 h-48 mb-8 bg-gray-200 p-2 rounded"
        src={img}
        alt=""
      />
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{subTitle}</p>
      <div className="flex mt-auto gap-10 items-center">
        <div className="flex">
          <FaStar className='text-yellow-300'></FaStar>
          <FaStar className='text-yellow-300'></FaStar>
          <FaStar className='text-yellow-300'></FaStar>
          <FaStar className='text-yellow-300'></FaStar>
          <FaStar className='text-yellow-300'></FaStar>
        </div>
        <div className="flex gap-2">
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;