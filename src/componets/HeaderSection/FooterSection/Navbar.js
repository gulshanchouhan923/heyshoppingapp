import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../Styles/navbar.css";



function Navbar() {

  var cartItems = JSON.parse(localStorage.getItem('cartItems'))

  return (
    <Fragment>
      <div className="navbar-div">
        {/* left side  */}
        <div className="navbar-left-side-container">
          <div className="logo-div">
           <Link to={'/'}> <h6>  Hey Shopping.</h6> </Link>
          </div>
        </div>

        {/* Right side */}

        <div className="navbar-right-side-container">
          <div className="right-side-item-section">
            <ul>
             <Link to={'/review/page'} > <li>Review Product</li> </Link> 
              <Link to={"/cart/page"}>
                <li>Cart({cartItems && cartItems.length !== 0 ? ( cartItems.length  ) : ( 0)})</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
