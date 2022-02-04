import React from "react";
import { useUserContext } from "../context/userContext";
import Banner from "./Banner";
import Kids from "./Kids";
import Men from "./Men";
import Product from "./Product";
import Women from "./Women";

function HomeComponent({ data }) {
  console.log(data);
  const { menu, setMenu } = useUserContext();
  const { options, setOptions } = useUserContext();
  console.log();
  if (options === "") {
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
        <div className=" mb-10  flex flex-wrap ">
          {data.slice(50, 58).map(({ id, title, source, img, price }) => (
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
          img1="images/banner3.jpg"
          img2="images/banner3.jpg"
          text="Kids Shoes"
        />
        <div className=" mb-10  flex flex-wrap ">
          {data.slice(10, 16).map(({ id, title, source, img, price }) => (
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
  if (options === "men") {
    return <Men data={data} />;
  }
  if (options === "kids") {
    return <Kids data={data} />;
  }
  if (options === "women") {
    return <Women data={data} />;
  }
  return <></>;
}

export default HomeComponent;
