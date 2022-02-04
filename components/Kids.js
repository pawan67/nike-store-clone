import React from "react";
import { useUserContext } from "../context/userContext";
import Banner from "./Banner";
import Product from "./Product";
//kids 24 47
function Kids({ data }) {
  const { menu, setMenu } = useUserContext();

  return (
    <div
      className={`${
        menu ? "blur-md  " : " "
      } mt-14 sm:mt-15  transition-all max-w-7xl mx-auto`}
    >
      <Banner
        img1="images/banner3.jpg"
        img2="images/banner3.jpg"
        text="Kids Shoes"
      />
      <div className=" mb-10  flex flex-wrap ">
        {data.slice(24, 47).map(({ id, title, source, img, price }) => (
          <Product
            key={id}
            price={price}
            title={title}
            source={source}
            img={img}
          />
        ))}
      </div>
    </div>
  );
}

export default Kids;
