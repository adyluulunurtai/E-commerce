import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";

class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <>
        <div calssname="py5">
          <div className="container">
            <Title name="наш    " title="каталог" />
            <div className="row" />
          </div>
        </div>
      </>
      // <Product />
    );
  }
}

export default ProductList;
