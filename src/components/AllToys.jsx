import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllToys = () => {
 const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
 useEffect(() => {
   document.title = "Toy-Shop | All Toys";
 }, []);
 // API FOR ALL TOYS
 useEffect(() => {
   fetch("https://toy-shop-server-three.vercel.app/allToys")
     .then((res) => res.json())
     .then((result) => {
       setToys(result);
       console.log(result);
     });
 },[]);


// SEARCH FILTER FOR CATEGORY
useEffect(() =>{
  fetch(`https://toy-shop-server-three.vercel.app/toySearch/sports`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
},[])


const handleSearch = () =>{
     fetch(`https://toy-shop-server-three.vercel.app/toySearch/${searchText}`)
       .then((res) => res.json())
       .then((data) => {
         setToys(data);
       });
};

    return (
      <div className="my-container">
        <div className="text-center mb-10 space-x-5">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Toy's Name"
            className="p-3 bg-slate-600"
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Car's Photo</th>
                <th>Toy's Name</th>
                <th>Seller Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {toys?.map((toy, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <img className="h-20 w-32" src={toy.image} alt="" />
                  </td>
                  <td>{toy.toyName}</td>
                  <td>{toy.sellerName}</td>
                  <td>$ {toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>{toy.category}</td>
                  <td>
                    <Link to={`toyDetails/${toy?._id}`}>
                      <button className="btn btn-primary my-3">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllToys;