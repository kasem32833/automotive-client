import React from "react";

const Addproduct = () => {
  return (
    <div className="">
      <div className=" bg-neutral-100 flex justify-center items-center">
        <div className="w-1/2 bg-white my-10 rounded-lg drop-shadow-md">

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="text"
                placeholder="Imgae"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                
              />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input
                type="text"
                placeholder="Type"
                className="input input-bordered"
                name="type"
                
              />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pricing</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
                name="price"
                
              />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered"
                name="rating"
                
              />
              
            </div>
            <div className=" mt-6 flex justify-between gap-4 ">
              <button className="btn btn-primary w-1/2">Add </button>
              <button className="btn btn-primary w-1/2">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
