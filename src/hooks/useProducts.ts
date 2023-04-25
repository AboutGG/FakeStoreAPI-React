import axios from "axios";
import { useEffect, useState } from "react";
import { ProductData } from "../models/productData";
const url = "https://fakestoreapi.com/products";

export const useProducts = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setTimeout(async () => {
        const { data } = await axios.get(`${url}`);
        const newData = data.map((item: ProductData) => ({ ...item, qty: 0 }));
        setProducts(newData);
        setLoading(false);
      }, 2000);
    };
    load();
  }, []);
  return [products, setProducts, isLoading] as [
    ProductData[],
    Function,
    boolean
  ];
};
