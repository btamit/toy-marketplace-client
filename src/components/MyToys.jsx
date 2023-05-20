import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import UpdateToy from './UpdateToy';

const MyToys = () => {
  const {user} = useContext(AuthContext);
 const [toys, setToys] = useState([]);
 const [control, setControl] = useState([]);
  useEffect(() =>{
    fetch(`http://localhost:5000/myAllToys/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setToys(data)
    })
  },[user, control]);

  const handleUpdate = (data) => {
    fetch(`http://localhost:5000/updateToy/${data?._id}`,{
      method:'PUT',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((result) =>{
      if(result.modifiedCount > 0){
        setControl(!control)
      }
    })
  }

    return (
      <div className="my-container">
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
                    <UpdateToy toy={toy} handleUpdate={handleUpdate}></UpdateToy>
                  </td>
                  <td>
                    {" "}
                    <button className="btn btn-primary my-3">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyToys;