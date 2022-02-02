import Image from "next/image";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div
        className={`fixed  z-50 ${
          menu ? "right-0 transition-all" : " transition-all -right-[500px]"
        } right-0  w-3/4 h-screen bg-white p-6`}
      >
        <GrFormClose onClick={()=> setMenu(false)} className=" float-right text-4xl" />
      </div>
      <div className="w-screen fixed bg-white z-10 shadow-md h-14 border-b">
        <div className=" px-3 max-w-7xl mx-auto flex h-full justify-between items-center ">
          <div className=" cursor-pointer  w-14">
            <svg
              className="pre-logo-svg"
              height="60px"
              width="60px"
              fill="#111"
              viewBox="0 0 69 32"
            >
              <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
            </svg>
          </div>
          <div className=" hidden sm:block">
            <div className=" text-lg cursor-pointer  flex space-x-5  ">
              <p>Men </p>
              <p>Women </p>
              <p>Kids </p>
            </div>
          </div>
          <div className="  space-x-5 text-2xl items-center flex ">
            <div className="flex bg-slate-100 items-center rounded-full py-1 px-2">
              <BiSearch />
              <input
                placeholder="Search"
                className=" pl-2  h-8 text-base outline-none w-28 rounded-full bg-slate-100"
                type="text"
              />
            </div>
            <BsBag />
            <AiOutlineMenu
              onClick={() => setMenu(true)}
              className=" sm:hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
