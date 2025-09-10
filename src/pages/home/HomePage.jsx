import Header from "../../components/Header";
import "./HomePage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductGrid } from "./productsGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("http://localhost:3001/product");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <Header cart={cart} />
      <title>Ecommerce project</title>

      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
}
