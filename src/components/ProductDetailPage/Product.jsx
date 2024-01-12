import { useLocation } from "react-router-dom";
import "./Product.css";
import { useState, useEffect } from "react";
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice";
import { ToastContainer, toast } from "react-toastify";

function Product() {
  const [productDetails, setProductDetails] = useState({});

  const location = useLocation();

  useEffect(() => {
    setProductDetails(location.state.item);
  }, [location]);

  let [baseQuantity, setBaseQuantity] = useState(1);

  function subtractQuantity() {
    if (baseQuantity <= 0) {
      return;
    }
    return setBaseQuantity(baseQuantity - 1);
  }

  function addQuantity() {
    return setBaseQuantity(baseQuantity + 1);
  }

  const dispatch = useDispatch();

  function addCart() {
    return (
      dispatch(
        addToCart({
          _id: productDetails._id,
          title: productDetails.title,
          image: productDetails.image,
          price: productDetails.price,
          quantity: baseQuantity,
          description: productDetails.description,
        })
      ) & toast.success(`${productDetails.title} has been added to your cart!`)
    );
  }

  return (
    <section>
      <div className="product-detail">
        <div className="detail-image">
          <div className="detail-new">
            {productDetails.isNew && <p>New!</p>}
          </div>
          <img src={productDetails.image} alt="Product Image" />
        </div>
        <div className="detail-info">
          <h2>{productDetails.title}</h2>
          <div className="detail-price">
            {productDetails.oldPrice && (
              <p className="old-price">${productDetails.oldPrice}</p>
            )}
            <p className="current-price1">${productDetails.price}</p>
          </div>
          <div className="ratings">
            <div className="ratings-stars">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStarHalf />
            </div>
            <p>(4 Customer Reviews)</p>
          </div>
          <p className="detail-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non
            magni facili blanditiis molestias
          </p>
          <div className="detail-quantity">
            <div className="quantity quantity-one">
              <p>Quantity</p>
              <div className="quantity-change">
                <button onClick={subtractQuantity}>-</button>
                <p className="quantity-number">{baseQuantity}</p>
                <button onClick={addQuantity}>+</button>
              </div>
            </div>
            <button onClick={addCart} className="add-to-cart">
              Add to Cart
            </button>
          </div>
          <p className="category1">
            Category:{" "}
            <span className="category-name">{productDetails.category}</span>
          </p>
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
    </section>
  );
}

export default Product;
