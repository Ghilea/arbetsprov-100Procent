import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { IProduct } from "@/utiles/interface";

const FetchProducts = () => {
  const apiUrl = "https://dummyjson.com/products";

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data: IProduct[] = response.data.products;
        setProducts(data);
      } catch (error) {
        console.log("Something went wrong", error);
        setProducts([]);
      }
    };

    fetchData();
  }, []);

  return useMemo(() => products, [products]);
};

export default FetchProducts;
