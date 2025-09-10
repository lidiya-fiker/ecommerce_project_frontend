import Header from "../../components/Header";
import "./HomePage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductGrid } from "./productsGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/product").then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
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
