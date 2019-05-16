import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

class ProductList extends Component {
  state = {
    products: []
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
