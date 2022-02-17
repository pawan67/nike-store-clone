import React from "react";

function SearchedData({ data }) {
  console.log(data);
  return (
    <div className="  2xl:right-64 max-h-[600px] overflow-y-scroll z-50 absolute right-5 bg-white top-16 rounded-xl shadow-2xl w-[300px] md:w-[400px]  ">
      {data.map((items, id) => {
        
        return (
          <div key={id} className=" p-5 hover:bg-gray-100 flex  justify-between items-center">
            <div className="  min-w-xs max-w-sm">
              <div>{items.title}</div>
              <p className=" text-sm text-gray-600">{items.source}</p>
            </div>
            <img className=" rounded-md w-10" src={items.img} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default SearchedData;
