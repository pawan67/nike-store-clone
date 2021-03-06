import React from "react";

function Product({ title, source, img, price }) {
  return (
    <div className=" shadow-xl hover:shadow-2xl hover:scale-110 transition   p-4   rounded-2xl mt-10 w-[180px]  md:w-[300px] mx-auto flex flex-col justify-between ">
      <div>
        <img src={img} className=" rounded-lg" alt="" />
        <div className=" flex justify-between mt-3">
          <h3>{title}</h3> <h3>{price}</h3>
        </div>
        <p className=" text-gray-500">{source}</p>
      </div>
      <button className="  cursor-pointer active:scale-95  w-full text-center  bg-black py-2 rounded-full mt-5 text-white">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
