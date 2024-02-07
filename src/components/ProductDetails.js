import React from "react";
import Categories from "./Categories";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductDetails = () => {
  const [data, setData] = useState(Categories); // State initialization moved here
  console.log(data); // Moved console.log after the state initialization
  const { productId } = useParams();
  console.log(productId);
  const product = data.find((item) => item.id === parseInt(productId));
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="bg-[#FAF9F8] py-20 ">
      <div className="mt-40">
        {data.map((item) => (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-auto">
            <div>
              <img src={item.img} alt="image" /> {/* Changed data.img to item.img */}
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                {item.title} ,{item.description} {/* Changed data?.title to item.title */}
              </h1>
              <p className="text-xl font-semibold my-4"> ${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
