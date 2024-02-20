import React, { Fragment, useEffect, useState } from "react";
import ProductPage from "../ProductSection/ProductPage";
import axios from "axios";
import '../Styles/menuSection.css'

function MenuSection() {
  const [itemData, setItemData] = useState();

  const fetchData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    setItemData(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="menu-section-continer">
        {/* heading section */}

        <div className="menu-heading-div">
          <p className="menu-heading-p">All Products</p>
        </div>

        {/* product-data-section */}

        <div className="product-data-section">
          {itemData === 0 ? (
            <Fragment>
              {" "}
              <h4>Loading....</h4>{" "}
            </Fragment>
          ) : (
            <ProductPage data={itemData} />
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default MenuSection;
