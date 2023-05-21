import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

const UpdateToy = ({toy,handleUpdate}) => {
  const { user } = useContext(AuthContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form onSubmit={handleSubmit(handleUpdate)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <div>
              <input
                className="w-1/3 p-2 mr-24"
                {...register("image")}
                // placeholder="Photo URL"
                defaultValue={toy?.image}
                type="url"
              />
              <input
                className="w-1/3 p-2"
                {...register("toyName", { required: true })}
                // placeholder="Toy Name"
                defaultValue={toy?.toyName}
              />
              <input
                className="w-1/3 p-2 hidden"
                {...register("_id", { required: true })}
                // placeholder="Toy Name"
                defaultValue={toy?._id}
              />
            </div>
            <div>
              <input
                className="w-1/3 p-2 my-3 mr-24"
                {...register("sellerName", { required: true })}
                // placeholder="Seller Name"
                defaultValue={toy?.sellerName}
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
                defaultValue={toy?.price}
                type="number"
              />
              <input
                className="w-1/3 p-2 my-3"
                {...register("rating", { required: true })}
                // placeholder="Rating"
                defaultValue={toy?.rating}
                type="number"
              />
            </div>

            <div>
              <input
                className="w-1/3 p-2 mr-24 my-3"
                {...register("quantity", { required: true })}
                placeholder="Quantity"
                defaultValue={toy?.quantity}
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
                defaultValue={toy?.description}
              />
            </div>

            <input className="btn my-10" value="Update" type="submit" />
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              X
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
