import React, { useEffect, useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import Gallery from "./Gallery";
import Marquee from "react-fast-marquee";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaStar } from "react-icons/fa";
import Car from "./Car";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toy from "./Toy";
import UpcomingCar from "./UpcomingCar";

const Home = () => {
   const navigation = useNavigation();
   console.log(navigation.state);
    if(navigation.state=='loading'){
      return <LoadingSpinner></LoadingSpinner>
    }

  const [upcomingCars, setupcomingCars] = useState([]);
  useEffect(() => {
    fetch("upcomingCars.json")
      .then((res) => res.json())
      .then((data) => setupcomingCars(data))
      .catch((error) => console.log(error));
  }, []);


  const [galleries, setGalleries] = useState([]);
  useEffect(() => {
    fetch("galleries.json")
      .then((res) => res.json())
      .then((data) => setGalleries(data))
      .catch((error) => console.log(error));
  }, []);


  // const [allToys, setAllToys] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/cars")
  //     .then((res) => res.json())
  //     .then((data) => setCars(data))
  //     .catch((error) => console.log(error));
  // }, []);


      const [toys, setToys] = useState([]);
      const [activeTab, setActiveTab] = useState("Sports Car");

      useEffect(() => {
        fetch(`http://localhost:5000/allToys/${activeTab}`)
          .then((res) => res.json())
          .then((result) => {
            setToys(result);
          });
      }, [activeTab]);

    


      const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

  return (
    <>
      <div className="bg-gray-900 my-container">
        <div className="my-container flex flex-col items-center justify-between lg:flex-row">
          <div className="relative lg:w-1/2 ">
            <div className="w-full lg:ml-auto py-20 sm:h-96">
              <img
                src="https://wallpapers.com/images/hd/muscle-cars-pictures-mgz491wbr295tufg.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="mb-10 lg:max-w-lg  lg:pr-1 lg:mb-0">
            <div className="max-w-xl mb-6 lg:mt-8">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none text-white">
                Get best products with{" "}
                <span className="inline-block text-blue-400"> guarantee</span>
              </h2>
              <p className="text-base text-white md:text-lg">
                Explore thousands of products staying at home. Toy Shop always try to bring latest and innovative products according to your
                need. 
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link to="" className="btn md:w-auto md:mr-4 border-none">
                <div className="inline-flex items-center justify-center w-full h-full">
                  <p className="mr-3">Get Started</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-container">
        <h2 className="text-center text-5xl font-bold mb-5">
          Our Gallery at a glance
        </h2>
        <p className="text-center">
          There are countless great recipes out there, and which ones are
          considered the "best" can be subjective depending on individual tastes
          and preferences. However, here are a few classic and universally loved
          recipes that are often considered some of the best:
        </p>
        <div className="grid md:grid-cols-4 p-5 gap-5 mt-12 bg-slate-800">
          {galleries.map((gallery) => (
            <Gallery key={gallery.id} gallery={gallery}></Gallery>
          ))}
        </div>
      </div>
      <div className="my-container">
        <h2 className="text-4xl font-bold text-center mb-10">
          Shop By Category{" "}
        </h2>
        <div className="tab-container text-center">
          <div className="text-center w-100 mxx-auto">
            <div className="tabs flex justify-center items-center mb-7">
              <div
                onClick={() => handleTabClick("Sports Car")}
                className={`py-2 px-4 cursor-pointer bg-slate-700 mr-2 font-bold Sports Car ${
                  activeTab == "Sports Car"
                    ? " bg-yellow-800 text-stone-300"
                    : ""
                }`}
              >
                Sports Car
              </div>
              <div
                onClick={() => handleTabClick("Mini Police Car")}
                className={`py-2 px-4 cursor-pointer mr-2 bg-slate-700 font-bold Mini Police Car ${
                  activeTab == "Mini Police Car"
                    ? " bg-yellow-800 text-stone-300 font-bold"
                    : ""
                }`}
              >
                Mini Police Car
              </div>
              <div
                onClick={() => handleTabClick("Regular Car")}
                className={`py-2 px-4 cursor-pointer font-bold bg-slate-700 Regular Car ${
                  activeTab == "Regular Car"
                    ? " bg-yellow-800 text-stone-300 font-bold"
                    : ""
                }`}
              >
                Regular Car
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {toys.map((toy) => (
            <Toy key={toy.id} toy={toy}></Toy>
          ))}
        </div>
      </div>
      <div className="my-container">
        <h2 className="font-bold text-5xl text-center mb-5">
          Explore Our Upcoming Toy Cars
        </h2>
        <p className="text-center">We always try to innovate something new.</p>
        <Marquee>
          <div className="grid md:grid-cols-4 gap-5 mt-12">
            {upcomingCars.map((upcomingCar) => (
              <UpcomingCar
                key={upcomingCar.id}
                upcomingCar={upcomingCar}
              ></UpcomingCar>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="my-container flex gap-5 mb-12  bg-slate-700 items-center flex-col justify-between lg:flex-row">
        <div>
          <hr className=" border-4" />
          <h2 className="text-5xl font-extrabold my-5">Stay updated</h2>
          <hr className="border-4" />
          <p className="font-bold text-xl my-10">
            Don't miss any update info and content about our platform services.
            Subscribe to out newsletter !
          </p>
          <input
            className="border border-white p-3 md:p-5"
            type="text"
            placeholder="Enter your email"
          />
          <button className="border bg-gray-600 p-3 md:p-5 font-medium">
            Subscribe Now
          </button>
        </div>
        <div>
          <img
            className=""
            src="https://thumbs.dreamstime.com/b/istanbul-turkey-june-toy-cars-one-bazaars-istanbul-toy-cars-one-bazaars-istanbul-228216341.jpg"
            alt=""
          />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
