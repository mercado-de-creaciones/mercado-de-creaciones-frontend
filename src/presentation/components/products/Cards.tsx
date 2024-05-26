import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Product } from "@/infrastructure/interfaces/products.response";

const Cards = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const {data} = await axios("./src/presentation/components/products/products.json");
    setProducts(data);    
  }
    

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="mt-6 flex flex-wrap gap-10 justify-center">
      {
        products.map(product => {
          return (
            <Card key={product.id} product={product}/>
          )
        })
      }
    </div>
  );
};

export default Cards;
