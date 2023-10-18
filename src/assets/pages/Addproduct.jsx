

const Addproduct = () => {

  const handleSubmit= (event)=>{
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newCar = {photo, name, brand, type, price, description, rating}
    console.log(newCar)


    fetch('http://localhost:5000/cars', {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newCar)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }


  return (
    <div className="">
      <div className=" bg-neutral-100 flex justify-center items-center">
        <div className="w-1/2 bg-white my-10 rounded-lg drop-shadow-md">

          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="text"
                placeholder="Imgae"
                className="input input-bordered"
                name="photo"
               
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
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="brand"
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
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                placeholder="Short Description"
                className="input input-bordered"
                name="description"
                
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
            <div className=" mt-6 flex justify-center ">
              <button className="btn btn-primary w-1/2">Add </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
