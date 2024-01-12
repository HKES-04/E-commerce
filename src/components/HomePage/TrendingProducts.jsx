import { useState, useEffect } from "react";
import TrendingProductsCard from "../../utils/TrendingProductsCard";
import { productsData } from "../../api/Api";
import "./TrendingProducts.css";

function PopularProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await productsData();
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  const displayedProductIndices = [2, 5, 7, 9, 12, 13, 15, 18];

  return (
    <section className="products">
      <div className="products-info">
        <h1>Shopping Everyday</h1>
        <span></span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          quos fugit inventore, cumque quae corporis ratione tenetur eos
          voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis
          asperiores repudiandae assumenda quidem.
        </p>
      </div>
      <div id="trending-section" className="products-container">
        <div className="sec-heading">Trending Products</div>
        <div className="products-card products-card1">
          {products.map(function (item, index) {
            if (displayedProductIndices.includes(index)) {
              return <TrendingProductsCard key={item._id} product={item} />;
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
