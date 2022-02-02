import React from "react";

function Banner({ img1, img2, text, link }) {
  return (
    <div className=" mt-10 relative ">
      <img src={img1} className=" hidden sm:block rounded-md" alt="" />
      <img src={img2} className=" sm:hidden " alt="" />
      <div className=" text-xl left-14  bottom-5 items-center sm:left-10 absolute sm:bottom-10 flex space-x-5">
        <p className=" bg-gray-300 px-3 py-1 rounded-full">{text}</p>
        <p className=" w-28 cursor-pointer bg-black text-white  py-1 text-center rounded-full">
          Shop
        </p>
      </div>
    </div>
  );
}

export default Banner;
