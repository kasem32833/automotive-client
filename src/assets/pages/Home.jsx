import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,

//     https://i.ibb.co/xmHzCcm/images-1.jpg
// https://i.ibb.co/jwW0nXY/images.jpg
// https://i.ibb.co/r20bTDn/largest-car-companies.webp
// https://i.ibb.co/vmRCGsn/The-Ford-Fiesta-and-Ford-Focus-the-no-1-and-no-2-UK-best-selling-cars-of-2014-e1420612716623.jpg
  };

  return (
    <div className="pb-20">
      <Slider {...settings}>
        <div className=" flex justify-center items-center">
           <img className="w-full h-[480px]" src="https://i.ibb.co/xmHzCcm/images-1.jpg" alt="" />
        </div>
        <div  className="flex justify-center items-center">
            <img className="w-full h-[480px]" src="https://i.ibb.co/jwW0nXY/images.jpg" alt="" />
        </div>
        <div  className="flex justify-center items-center">
            <img className="w-full h-[480px]" src=" https://i.ibb.co/vmRCGsn/The-Ford-Fiesta-and-Ford-Focus-the-no-1-and-no-2-UK-best-selling-cars-of-2014-e1420612716623.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
