import Banner1 from "../components/HomePage/Banner";
import PopularProducts from "../components/HomePage/TrendingProducts";
import DiscountBanner from "../components/HomePage/DiscountBanner";
import NewProducts from "../components/HomePage/NewProducts";
import Newsletter from "../components/HomePage/Newsletter";

function Home() {
  return (
    <div>
      <Banner1 />
      <PopularProducts />
      <DiscountBanner />
      <NewProducts />
      <Newsletter />
    </div>
  );
}

export default Home;
