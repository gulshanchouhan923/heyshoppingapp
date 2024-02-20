import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Navbar from "../HeaderSection/FooterSection/Navbar";
import Footer from "../HeaderSection/FooterSection/Footer";

import { cartAction } from "../../redux/Action/cartActions";

import "../Styles/productPage.css";

function ProductDetails() {
  const dispatch = useDispatch();
  const params = useParams();

  var cartItems = JSON.parse(localStorage.getItem("cartItems"));

  const { id } = params; //

  const [productData, setProductData] = useState();

  async function fetchData() {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    setProductData(data);
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const addToCartHandler = (id, name, price, image) => {
    window.alert("Please wait..!!");
    setTimeout(() => {
      dispatch(cartAction(id, name, price, image));
      window.alert("item added to cart!!");
    }, 1500);
  };

  const emptyCartHandler = (cartID) => {
    setTimeout(() => {
      window.alert(`item ${cartID} already added in cart!!`);
    }, 1500);
  };

  return (
    <Fragment>
      <Navbar />
      <Fragment>
        <div className="product-detail-main-conatiner">
          {/*     image side  */}
          <div className="product-details-image-side">
            {productData &&
              productData.images.map((image) => (
                <div className="image-slide-div">
                  <img src={image} alt="images" />
                </div>
              ))}
          </div>

          {/*  details side */}
          <div className="product-details-side">
            <div className="heading">
              <h6>Name : {productData && productData.title} </h6>
            </div>
            <div className="heading">
              <h6>Brand : {productData && productData.brand} </h6>
            </div>
            <div className="heading">
              <h6> Category : {productData && productData.category} </h6>
            </div>
            <div className="heading-price">
              <h6>
                Discount : {productData && productData.discountPercentage} %
              </h6>
            </div>
            <div className="heading-price">
              <h6>Price : {productData && productData.price} Rs.</h6>
            </div>

            <div className="heading">
              <h6> Ratings : {productData && productData.rating} </h6>
            </div>
            <div className="heading">
              <h6>Stock : {productData && productData.stock} </h6>
            </div>
            <div className="description">
              <h6> Description : {productData && productData.description} </h6>
            </div>
            <div className="btns">
              <button
                onClick={() =>
                  addToCartHandler(
                    productData && productData.id,
                    productData && productData.title,
                    productData && productData.price,
                    productData && productData.thumbnail
                  )
                }
              >
                {" "}
                add to cart
              </button>
            </div>
          </div>
        </div>
      </Fragment>
      <Footer />
    </Fragment>
  );
}

export default ProductDetails;
