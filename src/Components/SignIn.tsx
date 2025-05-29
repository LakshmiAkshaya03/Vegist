import './SignIn.css';
import logo from '../assets/images/logo1.png';

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-left d-flex flex-column justify-content-center align-items-center text-white text-center">
        <h1 className="mb-3 px-3">Welcome Back, Seller!</h1>
        <img src={logo} alt="Logo" className="img-fluid bg-white p-2 rounded" />
      </div>
      <div className="signin-right d-flex justify-content-center align-items-center">
        <div className="signin-box shadow p-4 ">
          <h2 className="text-center mb-4">Sign In</h2>
          <div className="mb-3">
            <label>Username or Email Address</label>
            <input type="text" className="form-control" placeholder="Enter Your Email or Username" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter Password" />
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">Keep me signed in</label>
          </div>
          <button className="btn btn-dark w-100">Sign In</button>
          <p className="text-center mt-3">
            Need to find <a href="#">your username</a> or <a href="#">your password</a>?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
