import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // data loading form database
  const data = useLoaderData();

  return (
    <div className="pb-20">
      <Slider {...settings}>
        <div className=" flex justify-center items-center">
          <img
            className="w-full h-[550px]"
            src="https://i.ibb.co/2SYnxHn/10014.jpg"
            alt=""
          />
          5
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-full h-[550px] "
            src="https://i.ibb.co/2SYnxHn/10014.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-full h-[550px] cover"
            src=" https://i.ibb.co/n3yZ6wF/10017.jpg"
            alt=""
          />
        </div>
      </Slider>
      {/* brand carts */}
      <div className="container mx-auto grid grid-cols-3 gap-6">
       
        {data.map((car) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="w-full"
                    src={car.photo}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{car.name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Show Details</button>
                  </div>
                </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
