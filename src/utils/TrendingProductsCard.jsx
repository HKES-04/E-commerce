import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function TrendingProductsCard({ product }) {
  const navigate = useNavigate();

  function idString(id) {
    return String(id).toLowerCase().split(" ").join("-");
  }
  const rootId = idString(product.title);

  function handleDetails() {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  }

  return (
    <div className="group">
      <div onClick={handleDetails} className="product-images">
        <img src={product.image} alt="Product Image" />
      </div>
      <div className="product-border">
        <div className="border-flex">
          <div>
            <h2 className="product-title">{product.title.substring(0, 15)}</h2>
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
    </div>
  );
}

TrendingProductsCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    isNew: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TrendingProductsCard;
