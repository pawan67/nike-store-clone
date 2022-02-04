import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useUserContext } from "../context/userContext";
import Link from "next/link";
function Header() {
  const { options, setOptions } = useUserContext();

  const { menu, setMenu } = useUserContext();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [goingUp, setGoingUp] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (scrollPosition < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (scrollPosition > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      setScrollPosition(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp, scrollPosition]);
  console.log(goingUp);
  return (
    <>
      <div
        className={`fixed duration-200 transition-all  shadow-md  z-50 ${
          menu
            ? "right-0 transition-all duration-200"
            : " transition-all -right-[4000px]"
        } right-0  w-3/4 h-screen bg-white p-10`}
      >
        <GrFormClose
          onClick={() => setMenu(false)}
          className=" float-right text-4xl"
        />
        <div className="  items-center mx-auto mt-20 text-2xl flex justify-between">
          <h2 onClick={() => setOptions("men")}>Men</h2>{" "}
          <MdKeyboardArrowRight />
        </div>
        <div className="  items-center mx-auto mt-10 text-2xl flex justify-between">
          <h2 onClick={() => setOptions("women")}>Women</h2>{" "}
          <MdKeyboardArrowRight />
        </div>
        <div className="  items-center mx-auto mt-10 text-2xl flex justify-between">
          <h2 onClick={() => setOptions("kids")}>Kids</h2>{" "}
          <MdKeyboardArrowRight />
        </div>
        <div className=" items-center flex  mt-10">
          <img className=" w-20" src="images/jordan.png" alt="" />
          <h2 className=" ml-5">Jordan</h2>
        </div>
        <div className=" text-xl mt-10 text-gray-700">
          Become a Nike Member for the best products, inspiration and stories in
          sport.
        </div>
        <div className=" flex mt-10 ">
          <button className=" active:scale-95 bg-black inline-block text-white text-lg px-3 py-1 rounded-full">
            Join us
          </button>
          <button className=" active:scale-95 bg-white inline-block text-black border  text-lg ml-3 px-3 py-1 rounded-full">
            Sign in
          </button>
        </div>
      </div>
      <div
        className={`w-screen transition-all duration-300  ${
          goingUp
            ? " transition-all top-0 duration-500"
            : "duration-500 -top-48 transition-all "
        }  transition-all fixed ${
          menu ? "blur-sm transition-all duration-500" : ""
        } bg-white z-10 shadow-md h-14 border-b`}
      >
        <div className=" px-3 max-w-7xl mx-auto flex h-full justify-between items-center ">
          <Link href="/">
            <div
              onClick={() => setOptions("")}
              className=" cursor-pointer  w-14"
            >
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
          </Link>
          <div className=" hidden sm:block">
            <div className=" text-lg cursor-pointer  flex space-x-5  ">
              <p onClick={() => setOptions("men")}>Men </p>
              <p onClick={() => setOptions("women")}>Women </p>
              <p onClick={() => setOptions("kids")}>Kids </p>
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
