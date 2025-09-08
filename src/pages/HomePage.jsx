import Header from "../components/Header";
import "./HomePage.css";
import axios from "axios";
import { money } from "../utils/money";
import { useEffect, useState } from "react";

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
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-container">
              <div className="product-image-container">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="product-name limit-text-to-2-lines">
                {product.name}
              </div>

              <div className="product-rating-container">
                <img
                  className="product-rating-stars"
                  src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                  alt={`${product.rating.stars} stars`}
                />
                <div className="product-rating-count link-primary">
                  {product.rating.count}
                </div>
              </div>

              <div className="product-price">{money(product.priceCents)}</div>

              <div className="product-quantity-container">
                <select>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="product-spacer"></div>

              <div className="added-to-cart">
                <img src="images/icons/checkmark.png" alt="Added to cart" />
                Added
              </div>

              <button className="add-to-cart-button button-primary">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
