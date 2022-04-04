import React from "react";
import './Product.css';

const Product = (props) => {
  // console.log(props.product);
  const {product} = props;
  const { name, img, comment, ratting } = product;
  // console.log(props);
  return (
    <div className="product">
       <img src={img} alt=""></img>
    <div className="text-xl font-semi-bold text-left pt-8">
      <p className="">Name:{name}</p>
      <p>Comment:{comment}</p>
      <p>Ratting:{ratting}</p>
    </div>
    </div>
  );
};

export default Product;
