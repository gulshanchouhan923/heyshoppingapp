import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../Styles/productPage.css";

function ProductPage({ data }) {
  return (
    <Fragment>
      <div className="product-page-main">
        {data &&
          data.map((item) => (
            <div className="product-main-continer" key={item.id}>
              <div className="image-continer">
                <img src={item.thumbnail} alt={item.title} />
              </div>

              <div className="product-name-continer">
                <h4> Name : {item.title} </h4>
              </div>

              <div className="price-continer">
                <h4> Price : {item.price}</h4>
              </div>

              <div className="price-continer">
                <h4> Ratings : {item.rating}</h4>
              </div>

              <div className="product-buttons-continer">
                <Link to={`/item/${item.id}`}>
                  <div className="view-btn">Buy Now</div>{" "}
                </Link>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
}

export default ProductPage;
