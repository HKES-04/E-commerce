import { discountBanner } from "../../assets";
import { Link } from "react-router-dom";
import "./DiscountBanner.css";

function DiscountBanner() {
  return (
    <section>
      <div className="discount-banner">
        <div className="discount-text">
          <h3>Limited Time Offer!</h3>
          <h1>60% Off Select Porducts & Accessories</h1>
          <Link to="/shop">
            <button className="banner-cta v2">Shop Now</button>
          </Link>
        </div>
        <img src={discountBanner} alt="Discount Banner" />
      </div>
    </section>
  );
}

export default DiscountBanner;
