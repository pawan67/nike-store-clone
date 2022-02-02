import React from "react";
import Banner from "./Banner";
import Product from "./Product";

function HomeComponent({ data }) {
  console.log(data);
  return (
    <div className=" sm:mt-5 max-w-7xl mx-auto">
      <Banner
        img1="images/banner2.jpg"
        img2="images/banner2left.jpg"
        text="Women Shoes"
      />
      <div className="  flex flex-wrap ">
        {data.slice(30, 38).map(({ id, title, source, img, price }) => (
          <Product
            key={id}
            price={price}
            title={title}
            source={source}
            img={img}
          />
        ))}
      </div>
      <Banner
        img1="images/banner1.jpg"
        img2="images/banner1sm.jpg"
        text="Men Shoes"
      />
      <div className="  flex flex-wrap ">
        {data.slice(10, 21).map(({ id, title, source, img, price }) => (
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

export default HomeComponent;