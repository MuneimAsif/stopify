
import axios from "axios";
import { createContext, useContext, useState } from "react";

// We are creating context of an api data so will be able to receive an api data in any component from here. No need to call api and passsing props in every component. Just use context to fetch data from here.
export const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  // { children } representing all components
  const [data, setData] = useState();
  //   fetching all products from an api
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=150");
      const productsData = res.data.products;
      setData(productsData);
      console.log(productsData);
    } catch (error) {
      console.log(error);
    }
  };
  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((x) => {
      return x[property];
    });
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };
  const categoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(data, "brand");

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData,brandOnlyData }}>
      {/* by passing data here, any component now able to use data,setData and fetchAllProducts */}
      {children} {/* here you can consider any component */}
    </DataContext.Provider>
  );
};
export const getData = () => useContext(DataContext);
