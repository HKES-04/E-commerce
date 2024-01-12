import { logoLight, paymentLogo } from "../../assets";
import "./Footer.css";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-one">
          <img className="footer-icon" src={logoLight} alt="Logo Light" />
          <p>© ReactBD.com</p>
          <img className="payments-img" src={paymentLogo} alt="paymentLogo" />
          <div className="socials">
            <ImGithub className="social-media" />
            <FaYoutube className="social-media" />
            <FaFacebookF className="social-media" />
            <FaTwitter className="social-media" />
            <FaInstagram className="social-media" />
          </div>
        </div>
        <div className="footer-two">
          <h2 className="h2">Locate Us</h2>
          <div className="contact-info c1 contact-1">
            <p>Boston, Massachusetts</p>
            <p>Mobile: 00968 97859628</p>
            <p>Phone: 00968 24769821</p>
            <p>E-Mail: bazar@gmail.com</p>
          </div>
        </div>
        <div className="footer-three">
          <h2 className="h2">Personal Details</h2>
          <div className="contact-info contact-2">
            <p>
              <span>
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p>
              <span>
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p>
              <span>
                <FaHome />
              </span>
              Order Tracking
            </p>
            <p>
              <span>
                <MdLocationOn />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        <div className="footer-two footer-four">
          <h2 className="h2">Get in Touch</h2>
          <div className="contact-info c1 contact-3">
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Live Chat</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
