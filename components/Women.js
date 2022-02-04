import React from "react";
import { useUserContext } from "../context/userContext";
import Banner from "./Banner";
import Product from "./Product";
//kids 24 47
function Women({ data }) {
  const { menu, setMenu } = useUserContext();

  return (
    <div
      className={`${
        menu ? "blur-md  " : " "
      } mt-14 sm:mt-15  transition-all max-w-7xl mx-auto`}
    >
      <Banner
        img1="images/banner2.jpg"
        img2="images/banner2left.jpg"
        text="Women Shoes"
      />
      <div className=" mb-10  flex flex-wrap ">
        {data.slice(47, 72).map(({ id, title, source, img, price }) => (
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

export default Women;
