import { useState, useEffect } from "react";
import ProductsCard from "../utils/ProductsCard";
import SearchBar from "../components/ProductsPage/SearchBar";
import { productsData } from "../api/Api";
import { shopBanner } from "../assets";
import { FaFilter } from "react-icons/fa";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const [sortOption, setSortOption] = useState("default");
  const [categoryOption, setCategoryOption] = useState("all");
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = searchTerm
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : products;

    let sortedItems = [...filteredProducts];

    switch (sortOption) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    let categoryFilteredItems = sortedItems;
    switch (categoryOption) {
      case "mens":
        categoryFilteredItems = sortedItems.filter(
          (item) => item.category == "men"
        );
        break;
      case "womens":
        categoryFilteredItems = sortedItems.filter(
          (item) => item.category == "women"
        );
        break;
      case "kids":
        categoryFilteredItems = sortedItems.filter(
          (item) => item.category == "kids"
        );
        break;
      default:
        break;
    }

    setDisplayedProducts(categoryFilteredItems);
  }, [products, searchTerm, sortOption, categoryOption]);

  function handleSortChange(option) {
    setSortOption(option);
  }

  function handleCategoryChange(option) {
    setCategoryOption(option);
  }

  return (
    <section className="products">
      <div className="shop-banner">
        <div className="shop-banner-ct">
          <img className="shop-banner-img" src={shopBanner} alt="Shop Banner" />
        </div>
        <div className="shop-banner-text">
          <h1>Products</h1>
        </div>
      </div>
      <div className="search-filter">
        <div className="shop-category">
          <select
            id="filter"
            onChange={(e) => handleCategoryChange(e.target.value)}
            value={categoryOption}
          >
            <option value="filter-category" disabled selected hidden>
              Filter By Category
            </option>
            <option value="all">All</option>
            <option value="mens">Mens</option>
            <option value="womens">Womens</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="shop-search-filter">
          <div className="shop-filtering">
            <div className="filter">
              <FaFilter className="fa-filter" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
            >
              <option value="sort-by" disabled selected hidden>
                Sort By
              </option>
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
          <div className="shop-search">
            <SearchBar setSearchTerm={setSearchTerm} />
          </div>
        </div>
      </div>
      <div className="products-card">
        {displayedProducts.map(function (item) {
          return <ProductsCard key={item._id} product={item} />;
        })}
      </div>
    </section>
  );
}

export default Shop;
