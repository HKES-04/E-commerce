import { useState, useEffect } from "react";
import { productsData } from "../../api/Api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./NewProducts.css";

function NewProducts() {
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

  const navigate = useNavigate();

  function idString(id) {
    return String(id).toLowerCase().split(" ").join("-");
  }

  function handleDetails(product) {
    const rootId = idString(product.title);
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  }

  return (
    <section id="new-section" className="new">
      <div className="new-products">
        <div className="sec-heading1">New Arrivals</div>
        <div className="new-prodcuts-card">
          <Swiper
            slidesPerView={1}
            spaceBetween={70}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              470: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {products.map((product) =>
              product.isNew ? (
                <SwiperSlide key={product._id} product={product}>
                  <div
                    onClick={() => handleDetails(product)}
                    className="product-images"
                  >
                    <img
                      className="new-products-img"
                      src={product.image}
                      alt="Product Image"
                    />
                  </div>
                  <div className="product-border">
                    <div className="border-flex">
                      <div>
                        <h2 className="product-title">
                          {product.title.substring(0, 15)}
                        </h2>
                      </div>
                      <div className="product-right">
                        <div className="product-price1">
                          {product.oldPrice && (
                            <p className="old-price">${product.oldPrice}</p>
                          )}
                          <p className="current-price">${product.price}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-cart">
                      <p className="category">{product.category}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

NewProducts.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    isNew: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewProducts;
