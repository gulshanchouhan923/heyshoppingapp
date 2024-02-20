import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "../HeaderSection/FooterSection/Navbar";
import Footer from "../HeaderSection/FooterSection/Footer";

import {cartRemoveAction} from '../../redux/Action/cartActions'

import "../Styles/cartPage.css";

function CartPage() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  var cartItems = JSON.parse(localStorage.getItem("cartItems"));

  let sum = 0;
  cartItems.forEach((el) => (sum += el.price));

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState("");

  const chekoutHandler = () => {
    window.alert("Your Order is Processing..");
    setTimeout(() => {
      const data = {
        cartItems,
        firstName,
        lastName,
        email,
        landmark,
        address,
        pincode,
        city,
        sum,
      };

      localStorage.setItem("orderData", JSON.stringify(data));
      window.alert("Order Placed Successfully..");
      navigation("/review/page");
    }, 2000);
  };


  const deleteHandler = (id) => {
    window.alert("Item removing..!");
      setTimeout(() => {
        dispatch(cartRemoveAction(id))
        window.alert("Items Revemod Successfully..");
      }, 1000);
      window.location.reload()
  }

  return (
    <Fragment>
      <Navbar />
        <Fragment>
          <div className="shopping-cart">
            <div className="title">Shopping Bag</div>

            {cartItems &&
              cartItems.map((items) => (
                <div className="item">
                  <div className="buttons">
                    <span className="delete-btn" onClick={()=>deleteHandler(items.id)}>
                      {" "}
                      <DeleteIcon />{" "}
                    </span>
                  </div>
                  <div className="image">
                    <img src={items.image} alt={items.name} />
                  </div>

                  <div className="description">
                    <span>{items.name}</span>
                  </div>

                  <div className="total-price">Rs {items.price}</div>
                </div>
              ))}

            <div className="total-ammount-div">
              <div className="total-amount">Total Amount</div>
              <div className="total-amount"> {sum} Rs</div>
            </div>
          </div>

          <div className="checkout-form-div">
            <h2> Shipping Address</h2>

            <form action="">
              <input
                type="text"
                placeholder="Firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Ladmark"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
              <input
                type="text"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </form>
          </div>
          <div className="submit-btn">
            <button onClick={chekoutHandler}>checkout </button>
          </div>
        </Fragment>

      <Footer />
    </Fragment>
  );
}

export default CartPage;
