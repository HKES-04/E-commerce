import { cartWhite, logoLight, profileIcon } from "../../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";

function Header() {
  const productData = useSelector((state) => state.slice.productData);
  const userInfo = useSelector((state) => state.slice.userInfo);

  const [clicked, setClicked] = useState(false);

  function handleClicked() {
    return setClicked(!clicked);
  }

  const totalItemsInCart = productData.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <header className="header">
      <div className="header-div">
        <Link to="/">
          <div>
            <img className="logo" src={logoLight} alt="Dark Logo" />
          </div>
        </Link>
        <nav className="nav">
          <ul className={clicked ? "ul active" : "ul"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <ScrollLink
              to="trending-section"
              smooth={true}
              duration={500}
              offset={-120}
            >
              <li>Trending</li>
            </ScrollLink>
            <ScrollLink
              to="new-section"
              smooth={true}
              duration={500}
              offset={-120}
            >
              <li>New</li>
            </ScrollLink>
          </ul>
          <Link to="/cart">
            <div className="cart-div">
              <img src={cartWhite} alt="Cart Icon" />
              <span className="cart-amount">{totalItemsInCart}</span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="cart-image"
              src={userInfo ? userInfo.image : profileIcon}
              alt="Profile Image"
            />
          </Link>
          {userInfo && <p className="userinfo-name">{userInfo.name}</p>}

          <div onClick={handleClicked} className="mobile">
            {clicked ? (
              <IoMdClose size={25} />
            ) : (
              <IoReorderThreeOutline size={30} />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
