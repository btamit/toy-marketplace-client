import React, { useEffect, useState } from "react";

const AllToys = () => {
 const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

 useEffect(() => {
   fetch("http://localhost:5000/allToys")
     .then((res) => res.json())
     .then((result) => {
       setToys(result);
       console.log(result)
     });
 },[]);

useEffect(() =>{
  fetch(`http://localhost:5000/toySearch/sports`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
},[])


const handleSearch = () =>{
     fetch(`http://localhost:5000/toySearch/${searchText}`)
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
          <button onClick={handleSearch} className="btn btn-primary">Search</button>
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
                    {" "}
                    <button className="btn btn-primary my-3">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="">
          {toys.map((toy, index) => (
            <AllToy key={toy.id} toy={toy} index={index}></AllToy>
          ))}
        </div> */}
      </div>
    );
};

export default AllToys;