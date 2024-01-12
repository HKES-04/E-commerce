import { banner } from "../../assets/index";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  return (
    <section className="hero-banner">
      <div className="banner-content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Convallis interdum purus adipiscing dis parturient posuere ac a quam
            a eleifend montes parturient posuere curae tempor
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <Link to="/shop">
              <button className="banner-cta v2">Shop Now</button>{" "}
            </Link>
          </div>
        </div>
        <div className="banner-img">
          <img src={banner} alt="Banner Image" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
