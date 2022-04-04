import React from "react";
import './Product.css';

const Product = (props) => {
  // console.log(props.product);
  const {product} = props;
  const { name, img, comment, ratting } = product;
  // console.log(props);
  return (
    <div className=" flex  p-6 rounded-lg review-items">
      <div className="w-12 h-12">
       <img src={img} alt=""></img>
      </div>
    <div className=" flex text-sm font-semi-bold">
      <div className=" text-left pl-10 info">
      <p>Name: {name}</p>
      <p>Comment: {comment}</p>
      <p>Ratting: <span className="text-orange-400">{ratting}</span></p>
      </div>
      <div className="">
        <button>
          delete
        </button>
      </div>
    </div>
   </div>
  );
};

export default Product;
