import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

  import './Product.css'

const Product = (props) => {
  // console.log(props.product);
  const {product, handelRemove} = props;
  const { name, img, comment, ratting, id } = product;
  // console.log(props);


  const navigate = useNavigate();
  const shoeReview = () => {

    const path = `/Review/${id}`;
    navigate(path);
  }

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
      <div className=" flex items-center pl-12">
        <button onClick={handelRemove}>
          <TrashIcon className="h-5 w-5 text-red-900 btn"></TrashIcon>
        </button>
      </div>
    </div>
   </div>
  );
};

export default Product;
