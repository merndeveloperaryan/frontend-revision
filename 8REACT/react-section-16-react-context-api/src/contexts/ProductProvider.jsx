import AxiosInstance from "../helpers/AxiosInstance";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    try {
      AxiosInstance.get("/products").then((result) => {
        setProducts(result.data);
      });
    } catch (error) {
      console.log("product lane me kucch problem huyi hai");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
