import { useState } from "react";
import useReviews from "../../hooks/useReviews";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useReviews([]);
  const [carts, setCarts] = useState([]);
  return (
      <div className="shop-container">
         <h1 className="text-3xl font-bold text centet p-12">Coustomers Reviews</h1>
        <div className="grid grid-cols-3 gap-2 p-8 h- product-container">
        {products.map((product) => (
            <Product
              key={product.id}
              product={product}
            ></Product>
          ))}
        </div>
      </div>
  );
};

export default Shop;
