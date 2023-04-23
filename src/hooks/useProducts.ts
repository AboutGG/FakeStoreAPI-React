import axios from "axios";
import { useEffect, useState } from "react";
import { ProductData } from "../models/productData";
const url = "https://fakestoreapi.com/products";


export const useProducts = (page = 1) => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setTimeout(async () => {
        const { data } = await axios.get(`${url}`);
        setProducts(data);
        setLoading(false);
      }, 2000);
    };
    load();
  }, [page]);
  return [products, setProducts, isLoading] as [
    ProductData[],
    Function,
    boolean
  ];
};
