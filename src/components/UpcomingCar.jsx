import React from "react";
import { FaStar } from "react-icons/fa";

const UpcomingCar = ({upcomingCar }) => {
  
  const { img, title, subTitle, icon, eyeIcon, views } = upcomingCar;
  return (
    <div className="bg-slate-700 p-5 rounded flex flex-col">
      <img className="w-80 mb-8 bg-gray-200 p-2 rounded" src={img} alt="" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{subTitle}</p>
      <div className="flex mt-auto items-center gap-10">
        <div className="flex">
         <FaStar></FaStar>
         <FaStar></FaStar>
         <FaStar></FaStar>
         <FaStar></FaStar>
         <FaStar></FaStar>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCar;
