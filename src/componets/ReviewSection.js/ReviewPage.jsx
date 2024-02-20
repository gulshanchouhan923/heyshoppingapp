import React, { Fragment, useEffect, useState } from "react";
import "../Styles/reviewPage.css";
import Navbar from "../HeaderSection/FooterSection/Navbar";
import Footer from "../HeaderSection/FooterSection/Footer";
function ReviewPage() {
  const [orderData, setOrderData] = useState();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orderData"));
    setOrderData(data);
  }, [orderData]);

  return (
    <Fragment>
      <Navbar />
      <div className="review-page">
        <div className="order-details-heading">
          <p> Order Details. </p>
        </div>
        {/* order details */}
        {orderData && orderData.length !== 0 ? (
          <Fragment>
            {orderData &&
              orderData.cartItems.map((items) => (
                <div className="order-details-main-container">
                  <div className="order-image">
                    <img src={items.image} alt={items.name} />
                  </div>
                  <div className="order-details">
                    <p> ID : {items.id} </p>
                    <p> Name : {items.name} </p>
                    <p> Price : {items.price} </p>
                    <p> Payment : Cash On Delivery </p>
                  </div>
                </div>
              ))}
            <div className="heading-user-deatils">Delivery Details.</div>

            <div className="user-details-container">
              <p>
                {" "}
                Name : {orderData && orderData.firstName}{" "}
                {orderData && orderData.lastName}{" "}
              </p>
              <p> Email : {orderData && orderData.email} </p>
              <p> Address : {orderData && orderData.address}</p>
              <p> Landmark : {orderData && orderData.landmark} </p>
              <p> Pincode : {orderData && orderData.pincode} </p>
              <p> City : {orderData && orderData.city} </p>
            </div>

            {/* submit review  */}

            <div className="product-review-main-container">
              <p> Please Give Your Review. </p>
              <div className="review-product-form-div">
                <form action="">
                  <input type="text" placeholder="Product id" />
                  <textarea
                    className="text-area-style"
                    cols={30}
                    rows={10}
                    placeholder="Add Your Review Here..."
                  ></textarea>

                  <button type="submit">Submit Review</button>
                </form>
              </div>
            </div>
          </Fragment>
        ) : null}
      </div>

      <Footer />
    </Fragment>
  );
}

export default ReviewPage;
