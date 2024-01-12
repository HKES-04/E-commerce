import { githubLogo, googleLogo } from "../assets";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, resetCart } from "../redux/slice";
import { useNavigate } from "react-router-dom";

function Login() {
  const userInfo = useSelector((state) => state.slice.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  function googleLogIn() {
    signInWithPopup(auth, provider)
      .then(function (result) {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        toast.success("Sign in Successful!");
        setTimeout(function () {
          navigate("/");
        }, 1500);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function googleSignOut() {
    signOut(auth)
      .then(function () {
        dispatch(removeUser());
        dispatch(resetCart());
        toast.success("Sign out Successful!");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <section className="login">
      <div className="login-option">
        <div onClick={googleLogIn} className="login-method">
          <img src={googleLogo} alt="Google Logo" />
          <span>Sign in with Google</span>
        </div>
        {userInfo && (
          <button onClick={googleSignOut} className="sign-out">
            Sign Out
          </button>
        )}
      </div>
      <div className="login-option login-option-two">
        <div className="login-method">
          <img src={githubLogo} alt="GitHub Logo" />
          <span>Sign in with Github</span>
        </div>
        {userInfo && <button className="sign-out">Sign Out</button>}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={1200}
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

export default Login;
