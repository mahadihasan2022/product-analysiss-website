import React from "react";
import { useNavigate } from "react-router-dom";
import car from "../../images/car.jpg";
import Review from "../Review/Review"
import "./Home.css";

const Home = () => {
  const navegate = useNavigate();
  const showDetail = ()=>{
    navegate('/Review');
  }
  
  return (
    <div>
      <div className="grid grid-cols-2 p-8 home-container">
        <div>
          <h1 className="text-3xl font-bold m-8">Our Exclusive Car</h1>
          <p className="text-xl text-semi-bold p-4">
            Millions of proven cars across BD Online.You select a car Online, we
            will check it and deliver to your home.
          </p>
          <button className="text-md font-bold rounded-full h-12 w-32 bg-slate-700 text-white">
            Show More
          </button>
        </div>
        <div>
          <img className="rounded-xl" src={car} alt="" />
        </div>
      </div>
      <Review></Review>
      <div className="p-8 text-info">
      <button onChange={showDetail} className="h-12 w-20 rounded-lg text-black font-bold  btn-info">
        see all
      </button>
      </div>
    </div>
  );
};

export default Home;
