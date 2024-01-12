import "./ProductsCard.css";
import { BsArrowRight } from "react-icons/bs";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice";
import { ToastContainer, toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";

function ProductsCard({ product }) {
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

  const dispatch = useDispatch();

  function addCart() {
    return (
      dispatch(
        addToCart({
          _id: product._id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
          description: product.description,
        })
      ) & toast.success(`${product.title} has been added to your cart!`)
    );
  }

  return (
    <div className="group">
      <div className="sale">
        {product.isNew && <p className="sale-text">New!</p>}
      </div>
      <div onClick={handleDetails} className="product-images">
        <img src={product.image} alt="Product Image" />
      </div>
      <div className="product-border">
        <div className="border-flex">
          <div>
            <h2 className="product-title">{product.title.substring(0, 15)}</h2>
          </div>
          <div className="product-right">
            <div className="product-price">
              {product.oldPrice && (
                <p className="old-price">${product.oldPrice}</p>
              )}
              <p className="current-price">${product.price}</p>
            </div>
            <p onClick={addCart} className="add-cart">
              Add to Cart{" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div className="mobile-cart">
          <p className="category">{product.category}</p>
          <FaCartPlus onClick={addCart} className="mobile-cart-img" />
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

ProductsCard.propTypes = {
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

export default ProductsCard;
