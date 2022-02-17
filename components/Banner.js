import React from "react";

function Banner({ img1, img2, text, link }) {
  return (
    <div className="  relative ">
      <img src={img1} className=" rounded-lg mt-20  w-full hidden sm:block " alt="" />
      <img src={img2} className=" sm:hidden " alt="" />
      <div className=" bg-black text-white absolute  bottom-2 left-2 text-center h-12 flex items-center uppercase font-bold justify-center text-xl cursor-pointer rounded-lg opacity-90 backdrop-blur-md   right-2">
        <p className="hover:scale-95">SHOP {text}</p>
        
      </div>
    </div>
  );
}

export default Banner;
