import useReviews from "../../hooks/useReviews";
import Product from "../Product/Product";
import './Review.css'

const Shop = () => {
  const [products, setProducts] = useReviews([]);

  const handelRemove = product =>{
    // console.log(product);
    const rest = product.filter(pd => pd.id !== product.id);
    setProducts(rest);
  }
  return (
      <div className="shop-container">
         <h1 className="text-3xl font-bold text-center p-12">Coustomers Reviews</h1>
        <div className="grid grid-cols-3 gap-2 p-8 h- product-container">
        {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handelRemove={handelRemove}
            ></Product>
          ))}
        </div>
      </div>
  );
};

export default Shop;
