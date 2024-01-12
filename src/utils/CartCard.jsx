import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../redux/slice";
import { ToastContainer, toast } from "react-toastify";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./CartCard.css";

function CartCard() {
  const productData = useSelector((state) => state.slice.productData);

  const dispatch = useDispatch();

  function reset() {
    return dispatch(resetCart()) & toast.error("Your cart has been reset!");
  }

  return (
    <section className="cart-card">
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <div className="cart-left">
          <div className="products-detail">
            {productData.map(function (item) {
              return (
                <div key={item._id} className="cart-info">
                  <div className="close-image">
                    <MdOutlineClose
                      className="close-x"
                      onClick={function () {
                        dispatch(deleteItem(item._id)) &
                          toast.error(
                            `${item.title} has been removed from your cart!`
                          );
                      }}
                    />
                    <img src={item.image} alt="Product Image" />
                  </div>
                  <div className="cart-desc">
                    <h2 className="item-title">{item.title}</h2>
                    <p className="item-price">${item.price}</p>
                    <div className="quantity quantity1">
                      <p>Quantity</p>
                      <div className="quantity-change">
                        <button
                          onClick={function () {
                            dispatch(
                              decrementQuantity({
                                _id: item._id,
                                title: item.title,
                                image: item.image,
                                price: item.price,
                                quantity: 1,
                                description: item.description,
                              })
                            );
                          }}
                        >
                          -
                        </button>
                        <p className="quantity-number">{item.quantity}</p>
                        <button
                          onClick={function () {
                            dispatch(
                              increamentQuantity({
                                _id: item._id,
                                title: item.title,
                                image: item.image,
                                price: item.price,
                                quantity: 1,
                                description: item.description,
                              })
                            );
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p className="total-price">${item.quantity * item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-buttons">
            <button className="reset" onClick={reset}>
              🗑️ Reset Cart
            </button>
            <Link className="link" to="/">
              <button className="back-shopping">
                <span>
                  <HiOutlineArrowLeft />
                </span>
                Go Back Shopping!
              </button>
            </Link>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={3000}
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

export default CartCard;
