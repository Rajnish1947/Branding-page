import { useState } from "react";
import Login from "./Login";

const Header = () => {
  const [log, setLogin] = useState(null);

  const handleLogin = () => {
    setLogin(<Login />);
   
  }
    return (
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <img src="/image/brand_logo.png" alt="Brand _image" />
            <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
              <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
          </div>
  
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 nav">
            <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" className="nav-link px-2 link-secondary">Features</a></li>
            <li><a href="#" className="nav-link px-2 link-secondary">Pricing</a></li>
            <li><a href="#" className="nav-link px-2 link-secondary">FAQs</a></li>
            <li><a href="#" className="nav-link px-2 link-secondary">About</a></li>
          </ul>
  
          <div className="col-md-3 text-end">
            <button type="button" id="Login-button" className=" btn btn-danger " onClick={handleLogin}>Login</button>
          </div>
        </header>
      </div>
    );
  };
  
  export default Header;
  