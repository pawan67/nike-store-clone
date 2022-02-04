import React from "react";
import { useUserContext } from "../context/userContext";

function Men() {
  const { fetchedData } = useUserContext();
  console.log(fetchedData);
  return <div></div>;
}

export default Men;
