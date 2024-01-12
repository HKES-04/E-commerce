import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartCard from "../utils/CartCard";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { ToastContainer } from "react-toastify";
import "./Cart.css";
import { cartBanner } from "../assets";

function Cart() {
  const productData = useSelector((state) => state.slice.productData);
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    let price = 0;
    productData.map(function (item) {
      price += item.price * item.quantity;
    });
    const roundedPrice = price.toFixed(2);
    setTotalAmount(roundedPrice);
  }, [productData]);

  const userInfo = useSelector((state) => state.slice.userInfo);
  const [payNow, setPayNow] = useState(false);

  function proceedCheckout() {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to checkout!");
    }
  }

  return (
    <section>
      <img className="cart-background" src={cartBanner} alt="Cart Background" />
      {productData.length > 0 ? (
        <div className="cart-items">
          <CartCard />
          <div className="cart-right">
            <div className="cart-pricing">
              <h2>Cart Total</h2>
              <p className="cart-subtotal">
                Subtotal <span>${totalAmount}</span>
              </p>
              <p className="cart-shipping">
                Shipping <span>Lorem, ipsum dolor sit amet</span>
              </p>
            </div>
            <p className="cart-total">
              Total <span>${totalAmount}</span>
            </p>
            <button onClick={proceedCheckout} className="cart-checkout">
              Proceed to Checkout
            </button>
            {payNow && (
              <div className="cart-stripe">
                <StripeCheckout
                  stripeKey="pk_test_51OFQA8FWfkrU22M47pdRX3kVxD0n64njDpaOFkLEqHegTl3SiNiNOf7C8HIO9iwTKVlWCPfz3Oc9gKr5jQbekPe500beTnXqCm"
                  name="Bazar Online Shopping"
                  amount={totalAmount * 100}
                  label="Pay to bazar"
                  description={`Your Payment amount is $${totalAmount}`}
                  email={userInfo.email}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <p>
            Your Cart is Empty. Please go back Shopping and add Products to your
            Cart.
          </p>
          <Link className="link" to="/">
            <button className="back-shopping back-shopping1">
              <span>
                <HiOutlineArrowLeft />
              </span>
              Go Back Shopping!
            </button>
          </Link>
        </div>
      )}

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

export default Cart;
