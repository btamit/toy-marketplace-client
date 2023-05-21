import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import UpdateToy from './UpdateToy';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyToys = () => {
const {user} = useContext(AuthContext);
 const [toys, setToys] = useState([]);
 const [control, setControl] = useState([]);

  useEffect(() => {
    document.title = "Toy-Shop | My Toys";
  }, []);
  useEffect(() =>{
    fetch(`https://toy-shop-server-three.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log(data);
      });
  },[user,control]);

  const handleUpdate = (data) => {
    fetch(`https://toy-shop-server-three.vercel.app/${data?._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
      });
  }

 const handleDelete = (id) => {
  const proceed = confirm("Are you really want to delete?");
  if(proceed){
    fetch(`https://toy-shop-server-three.vercel.app/deleteToy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.deletedCount > 0) {
          toast("Deleted Successfully");
          const remaining = toys.filter((toy) => toy._id !== id);
          setToys(remaining);
        }
      });
    }
 };


    return (
      <>
        <div className="my-container">
          <h2 className="text-center text-5xl font-bold underline">My Toys</h2>
          <div className=" mb-5 flex justify-between">
            <p className='text-white'>Descending Sort Auto implemented by price</p>
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
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {toys.map((toy, index) => (
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
                    <td>{toy.description}</td>
                    <td>
                      {" "}
                      <label
                        htmlFor="my-modal-5"
                        className="btn btn-primary my-3"
                      >
                        Update
                      </label>
                      <UpdateToy
                        toy={toy}
                        handleUpdate={handleUpdate}
                      ></UpdateToy>
                    </td>
                    <td>
                      {" "}
                      <button
                        onClick={() => handleDelete(toy._id)}
                        className="btn btn-primary my-3"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </>
    );
};

export default MyToys;