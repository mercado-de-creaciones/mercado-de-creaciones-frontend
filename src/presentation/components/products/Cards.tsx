import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/infrastructure/interfaces/products.response";
import { useMediaQuery } from "@/presentation/hooks/use-media-query";
import CardProduct from "./Card";

const Cards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const mobile = useMediaQuery("(max-width: 768px)");

  const getProducts = async () => {
    const { data } = await axios("./src/presentation/components/products/products.json");
    setProducts(data);
  }


  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={`${mobile ? "mt-36" : "mt-6"} flex flex-wrap gap-10 justify-center`}>
      {
        products.map(product => {
          return (
            <CardProduct key={product.id} product={product} />
          )
        })
      }
    </div>
  );
};

export default Cards;
