import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddAToy = () => {

 const { user } = useContext(AuthContext);
//  const [selectedOption, setSelectedOption] = useState(null);

 const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm();

 const onSubmit = (data,e) => {
   fetch("http://localhost:5000/addAToy", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(data),
   })
     .then((res) => res.json())
     .then((result) => {
       console.log(result);
       if(result.insertedId){
        toast('Toy added successfully');
        e.target.reset();
       }
     });
   console.log(data);
 };

  return (
    <>
      <div className="my-container">
        <div className="text-center">
          <h2 className="text-3xl font-bold my-10">Please Add Toys !!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <div>
              <input
                className="w-1/3 p-2 mr-24"
                {...register("image")}
                placeholder="Photo URL"
                type="url"
              />
              <input
                className="w-1/3 p-2"
                {...register("toyName", { required: true })}
                placeholder="Toy Name"
              />
            </div>
            <div>
              <input
                className="w-1/3 p-2 my-3 mr-24"
                {...register("sellerName", { required: true })}
                placeholder="Seller Name"
              />
              <input
                className="w-1/3 p-2 my-3"
                value={user?.email}
                {...register("email")}
                placeholder="Your Email"
                type="email"
              />
            </div>
            <div>
              <input
                className="w-1/3 p-2 mr-24 my-3"
                {...register("price", { required: true })}
                placeholder="Price"
                type="number"
              />
              <input
                className="w-1/3 p-2 my-3"
                {...register("rating", { required: true })}
                placeholder="Rating"
                type="number"
              />
            </div>

            <div>
              <input
                className="w-1/3 p-2 mr-24 my-3"
                {...register("quantity", { required: true })}
                placeholder="Quantity"
                type="number"
              />
              <select className="w-1/3 p-2" {...register("category")}>
                <option value="Category">Category</option>
                <option value="Sports Car">Sports Car</option>
                <option value="Mini Police Car">Mini Police Car</option>
                <option value="Regular Car">Regular Car</option>
              </select>
            </div>
            <div>
              <input
                className="p-8 w-3/4"
                {...register("description")}
                placeholder="Description"
              />
            </div>

            <input className="btn my-10" value="Add Toy" type="submit" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddAToy;
